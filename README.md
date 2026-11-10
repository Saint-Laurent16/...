# STORYVERSE — Augmented Reality Storybooks

A mobile-first, responsive reading adventure for Grade 7–9 students. The project is plain HTML, CSS, and JavaScript modules so it is easy to edit and publish as a static site.

## What's included

- Separate Student and Teacher registration/login tabs. Accounts use a username and password; no Google account or real email address is requested.
- Three original stories, each with three manually navigated scenes and six comprehension questions.
- Story-specific QR codes, QR downloads, camera scanning, and a manual story-code fallback. QR links still open the selected story; students then tap **VIEW IN YOUR ROOM** to launch native AR.
- Interactive Three.js story environments with animated characters and discoverable objects, plus story-specific 3D AR dioramas that launch in Android Scene Viewer or iPhone AR Quick Look through Google model-viewer.
- An interactive 3D model-viewer fallback for desktop and phones that do not support native AR.
- Browser read-aloud narration, word pronunciation, adjustable reading text, and soft generated ambient soundscapes / scene cues.
- Student progress dashboard, quiz history, XP, achievements, avatar unlocks, profile colors, and score-privacy preference.
- Teacher classrooms with private 8-character codes, student rosters, completed scenes/stories, average quiz scores, quiz history, and score change versus the previous quiz attempt.
- PWA manifest and a small offline app-shell service worker.

## Run it locally

Camera access and WebXR require a secure context. Use `localhost` rather than opening `index.html` by double-clicking it.

1. Unzip the project.
2. Open a terminal in this folder.
3. Start a local server, for example:

   ```bash
   python -m http.server 8000
   ```

4. Open `http://localhost:8000` in Chrome or another modern browser.
5. Create a Teacher or Student account.

In the default **Local Demo** mode, accounts, classes, and progress are saved in that browser's local storage. This is useful for trying the experience on one device, but a class code created in Local Demo mode will not sync to another phone or laptop.

## Enable shared classrooms across different devices (Firebase cloud sync)

The project includes an optional Firebase integration. It uses Firebase Authentication with a generated internal username address (`yourusername@storyverse.local`) so users still sign up with a username and password only. The app does not ask for a real email address and does not send an email verification message.

1. Create a Firebase project and choose the no-cost Spark plan where available.
2. In **Authentication → Sign-in method**, enable **Email/Password**.
3. Create a **Cloud Firestore** database.
4. In **Project settings → Your apps**, register a Web app and copy its Firebase web configuration.
5. Open `firebase-config.js` and replace `null` with the config object, for example:

   ```js
   export const firebaseConfig = {
     apiKey: "YOUR_WEB_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_WEB_APP_ID"
   };
   ```

6. In **Firestore → Rules**, paste the contents of `firestore.rules` and publish the rules.
7. Publish the site using HTTPS (the free GitHub Pages route below is one option). Register a Teacher account, create a class, and share its 8-character code. Students can create accounts on their own phones and join with that code.

The Firebase web config is intended to be included in a public frontend. **Never put a Firebase service-account JSON, private server key, or admin credential in this project.** The Firestore rules are part of the security boundary; review them before using real student data.

## Publish for free with GitHub Pages

1. Create a GitHub account and a new repository.
2. Upload the contents of this folder to the repository's root (not the ZIP file itself).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site and open the HTTPS URL it gives you.
6. Test camera access from the published HTTPS site on the actual student phones.

You can edit the website directly in GitHub by opening a file and selecting the pencil icon, or edit the files in VS Code and upload the changes. Keep `index.html`, `styles.css`, `app.js`, `firebase-config.js`, `manifest.json`, and `sw.js` together in the same folder.

## Update an existing Cloudflare Pages deployment

If this repository is already connected to Cloudflare Pages, replace `index.html`, `app.js`, `styles.css`, `sw.js`, and `README.md` with this update, then add the `assets/ar/` folder and its three `.glb` files. Keep your existing `firebase-config.js` and `firestore.rules`. Commit the changes to the connected branch; Cloudflare Pages should redeploy automatically. Existing STORYVERSE QR links do not need to be reprinted.

## Important device notes

- Camera scanning works only on HTTPS or localhost and requires camera permission. The native `BarcodeDetector` API is used when available; a `jsQR` fallback is included, along with manual story-code entry.
- The AR button uses Google `<model-viewer>` with Android Scene Viewer, iPhone Safari AR Quick Look, and WebXR as available modes. The iPhone Quick Look USDZ is generated from the GLB at launch when an `ios-src` is not supplied. Android AR requires an ARCore-compatible phone and the required Google AR services; iPhone AR requires a supported iPhone/iOS version and Safari. All camera-based AR requires HTTPS. Devices without AR support can still rotate and inspect the 3D model in the page.
- The reading experience uses custom stylized Three.js scenes. The AR viewer uses three lightweight, story-specific GLB dioramas in `assets/ar/`; they are miniature story illustrations rather than photorealistic scans or animated film assets. This keeps the app manageable for student phones.
- Narration and pronunciation use the device/browser's speech synthesis voice. Ambient effects are generated in the browser (soft waves/wind-like noise and gentle scene cues); they are not recorded animal sound files.
- Three.js, Firebase (when enabled), QR generation, QR decoding, and fonts load from CDNs, so the first visit needs internet access. The service worker caches the app shell, not all third-party libraries.
- Local Demo is not suitable for a real multi-device research deployment. Connect Firebase and test teacher/student accounts, privacy settings, class membership, and permissions before collecting research data.
- The score comparison shown to teachers is the difference between the student's latest quiz attempt and their immediately previous quiz attempt. Since students may take quizzes for different stories, use repeated attempts and your research protocol when interpreting improvement; it is a progress indicator, not a validated reading-comprehension assessment.

## Customizing the content

- Edit the `STORIES` array near the top of `app.js` to revise scenes, object clues, questions, and answer explanations.
- Each story must keep a unique `slug`, exactly three scene objects, and a quiz array. The matching AR model uses the same slug as its `.glb` filename in `assets/ar/`.
- Update `AVATARS`, `PALETTES`, and `ACHIEVEMENTS` in `app.js` to add more profile rewards.
- Change the colors, layout, typography, and responsive behavior in `styles.css`.
- Edit page sections and navigation in `index.html`.

## Research and privacy reminder

This is a starter implementation, not a certified school information system. Before use with actual minors or formal research participants, obtain the appropriate school/parent permissions, explain what data is stored, restrict access to the Firebase project, create a data-retention plan, and conduct a small device/browser test. Do not collect unnecessary personal information. Student accounts need only a username and password in this build.
