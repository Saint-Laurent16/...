import { firebaseConfig } from './firebase-config.js';

const STORIES = [
  {
    slug: 'lanterns-of-luntian-bay', title: "The Lanterns of Luntian Bay", tag: 'MAGICAL REALISM', theme: 'lantern', emoji: '🏮', icon: '🌊',
    description: 'When the bay’s lights go out, two friends discover that the smallest act of courage can guide an entire town home.',
    readTime: '8 min read',
    scenes: [
      { label: 'THE BEGINNING', title: 'A light where it should not be', text: [
        'Every year, on the first night of the rainy season, the people of Luntian Bay placed paper lanterns along the shore. Their warm lights helped fishing boats find their way home. But this year, a sudden storm swept across the coast and the lanterns went dark.',
        'Mira watched from her grandmother’s porch. Far beyond the waves, one tiny blue light blinked three times. “That is not one of ours,” she whispered. Her friend Tomas picked up a raincoat. “Then maybe someone out there needs help.”',
        'Mira hesitated. The sea was loud and the wind pulled at the trees. Then she remembered her grandmother’s words: courage is not the absence of fear; it is choosing what matters more.'
      ], clueTitle: 'The blue lantern', clueText: 'The unusual blue light flashes in a pattern: three short flashes. It may be a signal rather than an ordinary lantern.', object: 'A paper lantern', objectText: 'Lanterns guide boats toward the safe harbor. The blue lantern is different from the warm lights used by the town.' },
      { label: 'THE DISCOVERY', title: 'A message beneath the mangroves', text: [
        'Mira and Tomas followed the faint blue glow along the mangrove path. They moved slowly, watching for slippery roots and listening for the tide. Near an old wooden marker, they found a small lantern caught between two branches.',
        'A message was tied to its handle. The paper was wet, but Mira carefully unfolded it. “The eastern marker has fallen. The channel is blocked,” it read. “Boats cannot see the safe route.”',
        'Tomas pointed toward the dark water. “The marker must be near the rocks.” Mira understood the problem: the storm had not only extinguished the lights. It had moved the guide that showed boats where the deep channel began.'
      ], clueTitle: 'The hidden message', clueText: 'The fallen eastern marker is the main danger. Without it, boats may mistake the shallow rocks for the safe channel.', object: 'The mangrove marker', objectText: 'A marker is a fixed object used to identify a location or guide people. This one once showed boats where the safe channel began.' },
      { label: 'THE TURNING POINT', title: 'A shore full of light', text: [
        'The children could not move the heavy marker alone. Mira remembered a coil of bright rope in the old rescue shed. Tomas ran to ask the neighbors for help while Mira tied the rope around the marker’s base.',
        'One by one, lanterns appeared along the path. Neighbors came carrying flashlights, dry cloth, and warm tea. Together they pulled the marker upright and secured it with rope. Then they relit the shore lanterns, starting at the eastern bend.',
        'A fishing boat emerged from the rain. Its captain raised a hand when he saw the lights. The boat turned toward the deep channel and reached the harbor safely. Mira looked at the blue lantern, now steady and bright. Sometimes, she thought, a small signal is enough to bring a whole community together.'
      ], clueTitle: 'The community effort', clueText: 'Mira and Tomas solve the problem by asking for help. Cooperation matters because the marker is too heavy for two children to move safely.', object: 'The rescue rope', objectText: 'The rope helps the neighbors pull the marker upright. It represents how separate strengths can combine to solve a difficult problem.' }
    ],
    quiz: [
      { q: 'Why did the people of Luntian Bay place lanterns along the shore?', options: ['To decorate the beach for visitors', 'To help fishing boats find the way home', 'To celebrate the end of summer', 'To keep birds away from the water'], answer: 1, explain: 'The lanterns were used as guides so fishing boats could find the safe route back to the harbor.' },
      { q: 'What made the blue light different from the town’s lanterns?', options: ['It was underwater', 'It flashed three times like a signal', 'It was shaped like a star', 'It moved with the wind'], answer: 1, explain: 'Mira noticed that the blue light blinked three times, suggesting it was a signal.' },
      { q: 'What problem did the message reveal?', options: ['The rescue shed was locked', 'The eastern marker had fallen and the channel was blocked', 'The town had run out of lanterns', 'The fishing boats had left early'], answer: 1, explain: 'The fallen marker made it difficult for boats to identify the safe channel.' },
      { q: 'What does the word “hesitated” most nearly mean in Scene 1?', options: ['Moved very quickly', 'Paused because she was uncertain', 'Laughed loudly', 'Forgot what happened'], answer: 1, explain: 'Mira hesitated because she felt unsure about going out into the storm.' },
      { q: 'Which event helped the children solve the problem?', options: ['They waited for the storm to disappear', 'They built a new boat', 'They asked neighbors to help move the marker', 'They followed the blue light back home'], answer: 2, explain: 'The neighbors worked together to raise the marker and relight the shore.' },
      { q: 'What is the main message of the story?', options: ['Storms can always be avoided', 'It is better to solve problems alone', 'Small acts of courage and teamwork can help a community', 'Lanterns are more useful than flashlights'], answer: 2, explain: 'Mira and Tomas act despite their fear, and the community succeeds by cooperating.' }
    ]
  },
  {
    slug: 'the-clockmakers-garden', title: "The Clockmaker’s Garden", tag: 'FANTASY & MYSTERY', theme: 'clock', emoji: '⚙️', icon: '🌿',
    description: 'A quiet garden has stopped growing. One curious apprentice must listen closely to discover what time has forgotten.',
    readTime: '9 min read',
    scenes: [
      { label: 'THE BEGINNING', title: 'The garden that forgot spring', text: [
        'At the edge of Bellweather Town stood a glass greenhouse filled with metal vines, copper leaves, and flowers that opened at the sound of music. The garden belonged to Master Orin, a clockmaker who believed that every living thing had its own rhythm.',
        'One morning, his apprentice Ivo noticed that every flower had closed. The tiny gears beneath the soil had stopped turning, and the greenhouse clock pointed to the same minute it had shown the night before.',
        '“The garden is not broken,” Master Orin said. “It is waiting.” Ivo wanted to ask what it was waiting for, but the old clockmaker had already handed him a brass key and pointed toward the silent fountain.'
      ], clueTitle: 'The frozen minute', clueText: 'The clock has stopped at the same minute overnight. The garden may be responding to something missing from its rhythm.', object: 'The brass key', objectText: 'Master Orin gives Ivo this key before explaining the problem. It hints that the answer is hidden in a place that can be opened.' },
      { label: 'THE DISCOVERY', title: 'The song inside the fountain', text: [
        'Ivo unlocked a panel beneath the fountain. Inside was a small music box, its cylinder scratched and its spring loose. On the lid, someone had engraved: “A garden grows when every voice is heard.”',
        'He turned the cylinder carefully. A few notes rang out, but the melody stopped after four beats. Ivo remembered the old gardeners humming while they worked. They had each sung a different part of the same tune.',
        'Perhaps the music box needed more than a key. Ivo visited the greenhouse helpers and asked what they remembered. A bee keeper hummed a bright high note; a glass blower sang a low warm one. Their memories formed pieces of a melody.'
      ], clueTitle: 'The unfinished melody', clueText: 'The music box stops after four beats. The inscription and the helpers’ memories suggest that the missing melody needs many voices.', object: 'The music cylinder', objectText: 'A music cylinder stores a tune as tiny patterns. When it turns, pins on the cylinder pluck the notes in order.' },
      { label: 'THE TURNING POINT', title: 'A rhythm made together', text: [
        'Ivo brought the helpers to the fountain. Each person hummed the note they remembered. At first, the sounds clashed. Then Ivo listened for the spaces between them and tapped a steady beat against the fountain’s rim.',
        'The melody slowly came together. The music box clicked, the greenhouse clock moved forward, and the metal vines began to unfold. Copper leaves turned toward the morning sun. One by one, the flowers opened.',
        'Master Orin smiled. “You did not repair the garden by forcing it to move,” he said. “You listened until you understood what it needed.” Ivo realized that a good clockmaker measures time, but a wise one also pays attention to the people and places living inside it.'
      ], clueTitle: 'The shared rhythm', clueText: 'Ivo listens to different memories and helps the group combine them. The garden wakes when the melody becomes complete.', object: 'The opening flower', objectText: 'The flower is a sign that the garden has found its rhythm again. Its opening shows the result of listening and cooperation.' }
    ],
    quiz: [
      { q: 'What first showed Ivo that something was wrong in the greenhouse?', options: ['The glass roof had cracked', 'All the flowers had closed and the gears had stopped', 'The fountain had overflowed', 'Master Orin had lost his key'], answer: 1, explain: 'Ivo noticed that the flowers were closed, the gears were still, and the clock had frozen.' },
      { q: 'What did the engraving on the music box say?', options: ['Time waits for no one', 'A garden grows when every voice is heard', 'Never open the fountain', 'Every clock needs a key'], answer: 1, explain: 'The inscription points toward the importance of listening to many voices.' },
      { q: 'Why did Ivo visit the greenhouse helpers?', options: ['To ask them to build a new clock', 'To find pieces of the melody they remembered', 'To borrow their tools', 'To tell them the garden was closed'], answer: 1, explain: 'The helpers remembered different notes from the garden’s old song.' },
      { q: 'What does “clashed” mean when describing the first sounds?', options: ['Fit together perfectly', 'Did not sound harmonious together', 'Became completely silent', 'Echoed from far away'], answer: 1, explain: 'The notes clashed because they did not yet fit together smoothly.' },
      { q: 'What helped the melody finally come together?', options: ['Ivo forced the music box to spin faster', 'The helpers each sang the same note', 'Ivo listened and kept a steady beat', 'Master Orin replaced the cylinder'], answer: 2, explain: 'Ivo listened to the different notes and gave the group a steady rhythm.' },
      { q: 'Which statement best expresses the story’s main idea?', options: ['Old machines should always be replaced', 'Listening and cooperation can restore what seems broken', 'Gardens should be kept away from people', 'Only experts can solve difficult problems'], answer: 1, explain: 'The garden returns to life when Ivo listens and brings the helpers together.' }
    ]
  },
  {
    slug: 'the-map-beneath-the-mangroves', title: 'The Map Beneath the Mangroves', tag: 'OCEAN ADVENTURE', theme: 'sea', emoji: '🐢', icon: '🫧',
    description: 'A young shoreline scientist follows a turtle’s trail and finds a map that could protect a hidden coastal nursery.',
    readTime: '8 min read',
    scenes: [
      { label: 'THE BEGINNING', title: 'Footprints in the wet sand', text: [
        'Before sunrise, Naya walked the coast with a notebook and a small field camera. Her class was studying mangroves, the trees whose tangled roots protect shorelines and provide shelter for young sea creatures.',
        'Near a quiet inlet, she found a line of fresh turtle tracks leading away from the water. Beside them lay a smooth wooden disc marked with three curved lines. Naya recognized the pattern from an old map in the community science room.',
        'A volunteer ranger named Lolo Ben explained that the inlet had once been a nesting area. “The coast changes,” he said, “but clues remain if we learn how to read them.” Naya placed the disc in her bag and followed the tracks toward the mangroves.'
      ], clueTitle: 'The three curved lines', clueText: 'The wooden disc carries a pattern Naya recognizes from an old map. It may mark a location or a route through the mangroves.', object: 'The wooden map disc', objectText: 'The three curved lines match a symbol on an older coastal map. They may point to a protected inlet.' },
      { label: 'THE DISCOVERY', title: 'A nursery hidden in the roots', text: [
        'The mangrove path narrowed as the roots rose from the mud like arches. Naya heard tiny splashes and saw young fish weaving through the shallow water. A small green turtle rested beside a root, then slipped into a clear pool.',
        'She compared the wooden disc with the map on her tablet. The curved lines matched three bends in the inlet. At the final bend, the map showed a circle and the words “quiet water.” Naya understood: the hidden pool was a nursery, a safe place where young sea animals could grow.',
        'But a broken plastic net was caught between the roots. It blocked part of the pool’s entrance. Naya did not pull it at once; she marked the location and called Lolo Ben. Some problems, she knew, needed care before action.'
      ], clueTitle: 'The quiet-water symbol', clueText: 'The circle on the map marks a sheltered nursery. Naya identifies it by matching the map’s curves to the inlet bends.', object: 'The tangled net', objectText: 'Discarded fishing gear can trap or injure sea animals. Naya calls a trained ranger instead of pulling it carelessly.' },
      { label: 'THE TURNING POINT', title: 'A map for the future', text: [
        'Lolo Ben returned with two coastal volunteers and the right safety tools. They carefully removed the net and recorded the nursery’s location. Naya photographed the young fish, the turtle tracks, and the roots that sheltered the pool.',
        'At the community meeting, Naya shared the old map beside her new photographs. The group agreed to mark the inlet as a learning and protection zone. They planned signs, regular cleanups, and a student watch team that would report damaged nets or litter.',
        'The turtle appeared again at sunset, resting where the mangrove roots met the tide. Naya added one final note to her notebook: a map is not only a picture of where a place is. It can also show people how to care for where they live.'
      ], clueTitle: 'The protection plan', clueText: 'The team does more than remove one net. They record the location and create a community plan to protect the nursery over time.', object: 'The mangrove roots', objectText: 'Mangrove roots shelter young fish, soften waves, and help hold the shoreline in place. Protecting them supports many forms of life.' }
    ],
    quiz: [
      { q: 'Why was Naya studying mangroves?', options: ['They are places where clocks are repaired', 'They protect shorelines and shelter young sea creatures', 'They make ocean water salty', 'They are used to build fishing boats'], answer: 1, explain: 'The story explains that mangroves protect coastlines and provide shelter for young sea life.' },
      { q: 'What clue did Naya find near the turtle tracks?', options: ['A glass bottle with a letter', 'A wooden disc marked with three curved lines', 'A broken compass', 'A red fishing flag'], answer: 1, explain: 'The wooden disc carries a pattern that matches an older coastal map.' },
      { q: 'What did the circle and words “quiet water” represent on the map?', options: ['A deep shipping channel', 'A place for boats to park', 'A sheltered nursery for young sea animals', 'A freshwater river'], answer: 2, explain: 'The circle marked a protected pool where young sea creatures could grow.' },
      { q: 'Why did Naya call Lolo Ben instead of pulling the net herself?', options: ['She was afraid of getting wet', 'She knew removing it could require care and proper tools', 'She wanted to leave the net there', 'She had lost her notebook'], answer: 1, explain: 'Naya acted carefully because a damaged net can be dangerous to animals and the people removing it.' },
      { q: 'What does the word “nursery” mean in this story?', options: ['A shop that sells plants', 'A safe place where young animals grow', 'A room for storing maps', 'A place where boats are painted'], answer: 1, explain: 'A nursery is a protected place where young animals can develop.' },
      { q: 'What is the best main idea of the story?', options: ['Old maps are never useful', 'A single person should make all environmental decisions', 'Learning about a place can help a community protect it', 'Turtles always return to the same beach'], answer: 2, explain: 'Naya uses observation and research to help the community plan long-term protection.' }
    ]
  }
];

const AVATARS = [
  { id: 'spark', emoji: '✦', label: 'Starlight', unlock: 0, note: 'Starter look' },
  { id: 'cat', emoji: '🐈‍⬛', label: 'Midnight Cat', unlock: 0, note: 'Starter look' },
  { id: 'bunny', emoji: '🐰', label: 'Moon Bunny', unlock: 0, note: 'Starter look' },
  { id: 'fox', emoji: '🦊', label: 'Clever Fox', unlock: 1, note: 'Finish a story' },
  { id: 'owl', emoji: '🦉', label: 'Night Owl', unlock: 3, note: 'Explore 3 scenes' },
  { id: 'jelly', emoji: '🪼', label: 'Glow Jelly', unlock: 1, note: 'Complete a quiz' },
  { id: 'dragon', emoji: '🐉', label: 'Tiny Dragon', unlock: 90, note: 'Score 90% on a quiz' },
  { id: 'robot', emoji: '🤖', label: 'Pixel Pal', unlock: 3, note: 'Finish all 3 stories' }
];
const PALETTES = [
  { id: 'violet', label: 'Lavender', color: '#8270ef', cover: 'linear-gradient(120deg,#5d4caa,#ac82c4 55%,#517cb5)' },
  { id: 'rose', label: 'Rose', color: '#e27caf', cover: 'linear-gradient(120deg,#9b4f80,#df89a9 55%,#7557a8)' },
  { id: 'ocean', label: 'Ocean', color: '#55b9d3', cover: 'linear-gradient(120deg,#245d83,#559fbf 55%,#514a9e)' },
  { id: 'mint', label: 'Mint', color: '#61c8a7', cover: 'linear-gradient(120deg,#277b79,#59bc9c 55%,#426da7)' },
  { id: 'sunset', label: 'Sunset', color: '#efad69', cover: 'linear-gradient(120deg,#a55e69,#dc976e 55%,#6c5b9e)' },
  { id: 'midnight', label: 'Midnight', color: '#a4a8d8', cover: 'linear-gradient(120deg,#202b5c,#51558f 55%,#8c76b7)' }
];
const ACHIEVEMENTS = [
  { id: 'first-page', title: 'First Page', detail: 'Complete your first scene', icon: '✦', unlocked: u => (u.scenesCompleted || []).length >= 1 },
  { id: 'story-seeker', title: 'Story Seeker', detail: 'Finish your first story quiz', icon: '📖', unlocked: u => (u.completedStories || []).length >= 1 },
  { id: 'curious-mind', title: 'Curious Mind', detail: 'Explore three scenes', icon: '🔎', unlocked: u => (u.scenesCompleted || []).length >= 3 },
  { id: 'sharp-reader', title: 'Sharp Reader', detail: 'Score 80% or higher', icon: '💡', unlocked: u => (u.quizHistory || []).some(q => q.score >= 80) },
  { id: 'perfect-page', title: 'Perfect Page', detail: 'Score 100% on a quiz', icon: '🌟', unlocked: u => (u.quizHistory || []).some(q => q.score === 100) },
  { id: 'world-walker', title: 'World Walker', detail: 'Finish all three stories', icon: '🪐', unlocked: u => (u.completedStories || []).length >= 3 }
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const safeParse = (value, fallback) => { try { return JSON.parse(value) ?? fallback; } catch { return fallback; } };
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const getStory = slug => STORIES.find(s => s.slug === slug);
const STORAGE = { accounts: 'storyverse_accounts_v1', profiles: 'storyverse_profiles_v1', classes: 'storyverse_classes_v1', session: 'storyverse_session_v1' };
let selectedRole = 'student';
let authMode = 'login';
let currentUser = null;
let activeStory = null;
let activeScene = 0;
let quizIndex = 0;
let quizAnswers = [];
let quizChecked = false;
let storyFontSize = 14;
let scanStream = null;
let scanRaf = null;
let scanBusy = false;
let scanActive = false;
let scannerCanvas = null;
let scannerContext = null;
let activeAmbient = false;
let ambientContext = null;
let ambientNodes = [];
let ambientTimer = null;
let sceneEngine = null;
let cloud = null;
let cloudMode = false;
let pendingStoryFromUrl = null;

function getLocalAccounts() { return safeParse(localStorage.getItem(STORAGE.accounts), []); }
function setLocalAccounts(value) { localStorage.setItem(STORAGE.accounts, JSON.stringify(value)); }
function getLocalProfiles() { return safeParse(localStorage.getItem(STORAGE.profiles), {}); }
function setLocalProfiles(value) { localStorage.setItem(STORAGE.profiles, JSON.stringify(value)); }
function getLocalClasses() { return safeParse(localStorage.getItem(STORAGE.classes), []); }
function setLocalClasses(value) { localStorage.setItem(STORAGE.classes, JSON.stringify(value)); }
function createProfile({ uid, username, displayName, role }) {
  return { uid, username, displayName: displayName || username, role, avatar: 'spark', palette: 'violet', bio: 'Just here for the next good story. ✦', scorePrivate: true, xp: 0, scenesCompleted: [], completedStories: [], quizHistory: [], joinedClassCodes: [], createdAt: Date.now() };
}
function currentProfile() { return currentUser; }
function getPalette(id) { return PALETTES.find(p => p.id === id) || PALETTES[0]; }
function saveProfileLocal(profile) {
  const profiles = getLocalProfiles(); profiles[profile.uid] = profile; setLocalProfiles(profiles);
}
async function persistUser() {
  if (!currentUser) return;
  if (cloudMode && cloud?.db) {
    const { doc, setDoc, serverTimestamp } = cloud.fs;
    await setDoc(doc(cloud.db, 'users', currentUser.uid), { ...currentUser, updatedAt: serverTimestamp() }, { merge: true });
    for (const code of currentUser.joinedClassCodes || []) {
      const enrollment = { uid: currentUser.uid, username: currentUser.username, displayName: currentUser.displayName, avatar: currentUser.avatar, completedStories: currentUser.completedStories || [], scenesCompleted: currentUser.scenesCompleted || [], quizHistory: currentUser.quizHistory || [], xp: currentUser.xp || 0, updatedAt: serverTimestamp() };
      await setDoc(doc(cloud.db, 'classes', code, 'students', currentUser.uid), enrollment, { merge: true }).catch(() => {});
    }
  } else saveProfileLocal(currentUser);
}
function toast(message, type = 'info') {
  const el = document.createElement('div'); el.className = `toast ${type === 'error' ? 'error' : ''}`; el.textContent = message;
  $('#toastStack').append(el); setTimeout(() => el.remove(), 3400);
}
function showModal(id) { const el = document.getElementById(id); if (el) el.classList.remove('hidden'); }
function hideModal(id) { const el = document.getElementById(id); if (el) el.classList.add('hidden'); }

async function hashPassword(password, salt) {
  if (!crypto?.subtle) return `plain:${password}`;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 120000, hash: 'SHA-256' }, key, 256);
  return [...new Uint8Array(bits)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function usernameEmail(username) { return `${username.toLowerCase().replace(/[^a-z0-9._-]/g, '')}@storyverse.local`; }

async function initializeCloud() {
  if (!firebaseConfig || !firebaseConfig.apiKey || !firebaseConfig.projectId) return;
  try {
    const [appMod, authMod, fsMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js')
    ]);
    const app = appMod.initializeApp(firebaseConfig);
    const auth = authMod.getAuth(app);
    const db = fsMod.getFirestore(app);
    cloud = { app, auth, db, authFns: authMod, fs: fsMod };
    cloudMode = true;
    $('#connectionPill').innerHTML = '<i></i><span>CLOUD SYNC</span>';
    $('#authHint').textContent = 'No real email or Google account needed. Choose a username and password to create your account.';
    authMod.onAuthStateChanged(auth, async fbUser => {
      if (fbUser && !currentUser) {
        try {
          const snap = await fsMod.getDoc(fsMod.doc(db, 'users', fbUser.uid));
          if (snap.exists()) {
            currentUser = { ...snap.data(), uid: fbUser.uid };
            enterApp();
          }
        } catch (err) { console.warn('Could not restore session', err); }
      }
    });
  } catch (err) {
    console.warn('Cloud setup unavailable; running local mode.', err);
    cloudMode = false;
    toast('Cloud setup could not connect. The app is in local demo mode.', 'error');
  }
}

function updateAuthUI() {
  $$('.role-tab').forEach(btn => { const active = btn.dataset.role === selectedRole; btn.classList.toggle('active', active); btn.setAttribute('aria-selected', String(active)); });
  $('#showLogin').classList.toggle('active', authMode === 'login');
  $('#showSignup').classList.toggle('active', authMode === 'signup');
  $('#displayNameField').classList.toggle('hidden', authMode !== 'signup');
  $('#authPassword').autocomplete = authMode === 'login' ? 'current-password' : 'new-password';
  $('#authSubmit').innerHTML = `${authMode === 'login' ? 'Log in' : 'Create account'} as a ${selectedRole} <span>↗</span>`;
  $('#authHint').textContent = cloudMode ? 'No real email or Google account needed. Choose a username and password to create your account.' : 'No email or Google account needed. Local demo accounts stay on this browser until you connect cloud sync.';
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const username = $('#authUsername').value.trim().toLowerCase();
  const password = $('#authPassword').value;
  const displayName = $('#authDisplayName').value.trim() || username;
  if (!/^[a-z0-9_]{3,24}$/.test(username)) { toast('Use 3–24 letters, numbers, or underscores for your username.', 'error'); return; }
  if (password.length < 6) { toast('Your password needs at least 6 characters.', 'error'); return; }
  $('#authSubmit').disabled = true;
  try {
    if (cloudMode && cloud) {
      const email = usernameEmail(username);
      if (authMode === 'signup') {
        const cred = await cloud.authFns.createUserWithEmailAndPassword(cloud.auth, email, password);
        const profile = createProfile({ uid: cred.user.uid, username, displayName, role: selectedRole });
        const { doc, setDoc, serverTimestamp } = cloud.fs;
        await setDoc(doc(cloud.db, 'users', cred.user.uid), { ...profile, createdAt: serverTimestamp() });
        currentUser = profile;
      } else {
        const cred = await cloud.authFns.signInWithEmailAndPassword(cloud.auth, email, password);
        const snap = await cloud.fs.getDoc(cloud.fs.doc(cloud.db, 'users', cred.user.uid));
        if (!snap.exists()) throw new Error('This account profile could not be found.');
        const profile = { ...snap.data(), uid: cred.user.uid };
        if (profile.role !== selectedRole) { await cloud.authFns.signOut(cloud.auth); throw new Error(`This account is registered as a ${profile.role}. Choose the ${profile.role} tab.`); }
        currentUser = profile;
      }
    } else {
      const accounts = getLocalAccounts();
      const account = accounts.find(a => a.username === username);
      if (authMode === 'signup') {
        if (account) throw new Error('That username is already taken on this device. Try another.');
        const salt = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const hash = await hashPassword(password, salt);
        const uid = `local_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        const profile = createProfile({ uid, username, displayName, role: selectedRole });
        accounts.push({ uid, username, role: selectedRole, salt, passwordHash: hash }); setLocalAccounts(accounts); saveProfileLocal(profile); currentUser = profile;
      } else {
        if (!account) throw new Error('We could not find that username on this device. Create an account first.');
        if (account.role !== selectedRole) throw new Error(`This account is registered as a ${account.role}. Choose the ${account.role} tab.`);
        const hash = await hashPassword(password, account.salt);
        if (hash !== account.passwordHash) throw new Error('That password does not match. Try again.');
        const profiles = getLocalProfiles();
        currentUser = profiles[account.uid] || createProfile({ uid: account.uid, username, role: account.role, displayName: username });
      }
    }
    localStorage.setItem(STORAGE.session, JSON.stringify({ uid: currentUser.uid, username: currentUser.username, role: currentUser.role }));
    enterApp();
  } catch (err) {
    toast(err.message || 'Something went wrong. Please try again.', 'error');
  } finally { $('#authSubmit').disabled = false; }
}

function enterApp() {
  if (!currentUser) return;
  $('#authScreen').classList.add('hidden'); $('#appShell').classList.remove('hidden');
  $('#topName').textContent = currentUser.displayName || currentUser.username;
  $('#topAvatar').textContent = avatarEmoji(currentUser.avatar);
  $('#welcomeTitle').innerHTML = `Welcome back, ${escapeHtml(currentUser.displayName || 'reader')} <span>✦</span>`;
  $('#classNavLabel').textContent = currentUser.role === 'teacher' ? 'My classes' : 'My classroom';
  $('#connectionPill').innerHTML = cloudMode ? '<i></i><span>CLOUD SYNC</span>' : '<i></i><span>LOCAL DEMO</span>';
  renderHome(); showView('home');
  if (pendingStoryFromUrl) { const slug = pendingStoryFromUrl; pendingStoryFromUrl = null; setTimeout(() => openStory(slug), 300); }
}
function avatarEmoji(id) { return AVATARS.find(a => a.id === id)?.emoji || '✦'; }

async function logout() {
  stopNarration(); stopAmbient(); stopScanner(); closeStoryEngine();
  if (cloudMode && cloud) await cloud.authFns.signOut(cloud.auth).catch(() => {});
  currentUser = null; localStorage.removeItem(STORAGE.session);
  $('#appShell').classList.add('hidden'); $('#authScreen').classList.remove('hidden');
  $('#authPassword').value = ''; updateAuthUI();
}

function showView(view) {
  $$('.view-section').forEach(el => el.classList.toggle('active', el.id === `view-${view}`));
  $$('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));
  $$('.mobile-nav button[data-view]').forEach(el => el.classList.toggle('active', el.dataset.view === view));
  const names = { home: 'Home', explore: 'Explore stories', how: 'How it works', classroom: 'Classroom', progress: 'My progress', profile: 'My profile' };
  $('#breadcrumbCurrent').textContent = names[view] || 'Home';
  if (view === 'home') renderHome();
  if (view === 'explore') renderExplore();
  if (view === 'classroom') renderClassroom();
  if (view === 'progress') renderProgress();
  if (view === 'profile') renderProfile();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function storyCard(story, compact = false) {
  const meta = `<div class="story-card-meta"><span>◷ ${story.readTime}</span><span><b>3</b> SCENES</span></div>`;
  return `<article class="story-card" data-story-card="${story.slug}"><div class="story-art art-${story.theme}"><span class="art-symbol">✦ · ✧</span><span class="art-emoji">${story.emoji}</span><span class="story-tag">${story.tag}</span>${currentUser?.role === 'teacher' ? '<button class="qr-mini" data-qr-story="' + story.slug + '" title="Show story QR">▦</button>' : ''}</div><div class="story-card-body"><h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.description)}</p>${meta}<div class="story-card-actions"><button class="story-open" data-open-story="${story.slug}">OPEN STORY ↗</button>${currentUser?.role === 'teacher' ? '<button class="story-qr-action" data-qr-story="' + story.slug + '" aria-label="Show QR code">▦</button>' : ''}</div></div></article>`;
}
function renderHome() {
  if (!currentUser) return;
  $('#homeStories').innerHTML = STORIES.map(s => storyCard(s, true)).join('');
  const scenes = (currentUser.scenesCompleted || []).length;
  const stories = (currentUser.completedStories || []).length;
  const scores = (currentUser.quizHistory || []).map(q => q.score);
  const average = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
  $('#homeStoriesDone').textContent = stories;
  $('#homeScenesDone').textContent = scenes;
  $('#homeAverage').textContent = average === null ? '—' : `${average}%`;
  const percent = Math.round(stories / STORIES.length * 100);
  $('#homeProgressPercent').textContent = `${percent}%`;
  $('#homeProgressRing').style.setProperty('--progress', `${percent * 3.6}deg`);
  const streak = scenes ? 'Curiosity streak' : '0 day streak';
  $('#streakValue').textContent = scenes ? streak : '0 day streak';
}
function renderExplore() {
  const term = ($('#storySearch')?.value || '').toLowerCase();
  const filtered = STORIES.filter(s => `${s.title} ${s.description} ${s.tag}`.toLowerCase().includes(term));
  $('#storyLibrary').innerHTML = filtered.map(s => storyCard(s)).join('') || '<div class="empty-state" style="grid-column:1/-1"><div class="empty-illustration">⌕</div><h3>No stories found</h3><p>Try another word or theme.</p></div>';
}

function generateCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = new Uint8Array(8); crypto.getRandomValues(bytes);
  return [...bytes].map(b => alphabet[b % alphabet.length]).join('');
}
function openCreateClass() { $('#classModalTitle').textContent = 'Create a class'; $('#classNameInput').value = ''; $('#classDescriptionInput').value = ''; showModal('classModal'); }
async function createClass(event) {
  event.preventDefault();
  const name = $('#classNameInput').value.trim(); const description = $('#classDescriptionInput').value.trim();
  if (!name) return;
  const code = generateCode();
  const klass = { code, name, description, teacherUid: currentUser.uid, teacherName: currentUser.displayName, studentUids: [], createdAt: Date.now() };
  try {
    if (cloudMode && cloud) {
      await cloud.fs.setDoc(cloud.fs.doc(cloud.db, 'classes', code), { ...klass, createdAt: cloud.fs.serverTimestamp() });
      await cloud.fs.setDoc(cloud.fs.doc(cloud.db, 'joinCodes', code), { code, name, teacherUid: currentUser.uid, createdAt: cloud.fs.serverTimestamp() });
    } else { const classes = getLocalClasses(); classes.push(klass); setLocalClasses(classes); }
    hideModal('classModal'); toast(`Class created! Share code ${code} with your students.`); renderClassroom();
  } catch (err) { toast(err.message || 'Could not create class.', 'error'); }
}
async function joinClass(event) {
  event.preventDefault(); const code = $('#joinCodeInput').value.trim().toUpperCase();
  if (!/^[A-Z0-9]{8}$/.test(code)) { toast('Enter the 8-character class code.', 'error'); return; }
  try {
    if (cloudMode && cloud) {
      const { doc, getDoc, updateDoc, arrayUnion, setDoc, serverTimestamp } = cloud.fs;
      const inviteSnap = await getDoc(doc(cloud.db, 'joinCodes', code));
      if (!inviteSnap.exists()) throw new Error('We could not find a class with that code. Check with your teacher.');
      const klass = inviteSnap.data();
      if ((currentUser.joinedClassCodes || []).includes(code)) throw new Error('You are already in this classroom.');
      const classRef = doc(cloud.db, 'classes', code);
      await updateDoc(classRef, { studentUids: arrayUnion(currentUser.uid) });
      await setDoc(doc(cloud.db, 'classes', code, 'students', currentUser.uid), { uid: currentUser.uid, username: currentUser.username, displayName: currentUser.displayName, avatar: currentUser.avatar, completedStories: currentUser.completedStories || [], scenesCompleted: currentUser.scenesCompleted || [], quizHistory: currentUser.quizHistory || [], joinedAt: serverTimestamp() }, { merge: true });
      currentUser.joinedClassCodes = [...new Set([...(currentUser.joinedClassCodes || []), code])]; await persistUser();
      hideModal('joinModal'); toast(`You joined ${klass.name}!`); renderClassroom();
    } else {
      const classes = getLocalClasses(); const klass = classes.find(c => c.code === code);
      if (!klass) throw new Error('We could not find a class with that code on this device. Local demo codes only work on the same browser.');
      if (!klass.studentUids.includes(currentUser.uid)) klass.studentUids.push(currentUser.uid);
      setLocalClasses(classes); currentUser.joinedClassCodes = [...new Set([...(currentUser.joinedClassCodes || []), code])]; await persistUser();
      hideModal('joinModal'); toast(`You joined ${klass.name}!`); renderClassroom();
    }
  } catch (err) { toast(err.message || 'Could not join this class.', 'error'); }
}

async function listTeacherClasses() {
  if (cloudMode && cloud) {
    const { collection, getDocs, query, where } = cloud.fs;
    const q = query(collection(cloud.db, 'classes'), where('teacherUid', '==', currentUser.uid));
    const snap = await getDocs(q); return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
  return getLocalClasses().filter(c => c.teacherUid === currentUser.uid);
}
async function listStudentClasses() {
  const codes = currentUser.joinedClassCodes || [];
  if (cloudMode && cloud) {
    const { doc, getDoc } = cloud.fs;
    const rows = await Promise.all(codes.map(async code => { const snap = await getDoc(doc(cloud.db, 'classes', code)); return snap.exists() ? { id: snap.id, ...snap.data() } : null; }));
    return rows.filter(Boolean);
  }
  return getLocalClasses().filter(c => codes.includes(c.code));
}
async function getClassRoster(klass) {
  if (cloudMode && cloud) {
    const snap = await cloud.fs.getDocs(cloud.fs.collection(cloud.db, 'classes', klass.code, 'students'));
    return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  }
  const profiles = getLocalProfiles();
  return (klass.studentUids || []).map(uid => profiles[uid]).filter(Boolean).map(p => ({ ...p, uid: p.uid }));
}
async function renderClassroom() {
  if (!currentUser) return;
  const root = $('#classroomContent');
  if (currentUser.role === 'teacher') {
    $('#classPageTitle').innerHTML = 'Your <em>classrooms.</em>';
    $('#classPageCopy').textContent = 'Create private learning spaces and see how your students grow as readers.';
    root.innerHTML = '<div class="empty-state"><div class="empty-illustration">✦</div><h3>Loading your classrooms…</h3></div>';
    try {
      const classes = await listTeacherClasses();
      const classCards = classes.map(c => `<article class="class-card"><div class="class-card-top"><div class="class-card-icon">▦</div><span class="section-kicker">PRIVATE CLASS</span></div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.description || 'A STORYVERSE learning circle')}</p><div class="class-code"><span>${escapeHtml(c.code)}</span><button data-copy-code="${c.code}" title="Copy code">⧉</button></div><div class="class-card-meta"><span>${(c.studentUids || []).length} STUDENTS</span><span>ENGLISH READING</span></div><div class="class-card-actions"><button class="small-action" data-view-roster="${c.code}">View class progress ↗</button></div></article>`).join('');
      root.innerHTML = `<div class="class-actions"><button class="button button-primary" id="createClassAction">＋ CREATE A CLASS</button><div class="class-private-note">Private codes keep each learning circle separate.</div></div>${classes.length ? `<div class="class-grid">${classCards}</div>` : `<div class="empty-state"><div class="empty-illustration">✧</div><h3>Your first classroom starts here.</h3><p>Create a private class, share its code with your students, and follow their reading progress in one place.</p><button class="button button-primary" id="createClassEmpty">Create your first class ↗</button></div>`}<div id="teacherRosterArea"></div>`;
    } catch (err) { root.innerHTML = `<div class="empty-state"><h3>Could not load classes</h3><p>${escapeHtml(err.message)}</p></div>`; }
  } else {
    $('#classPageTitle').innerHTML = 'Your <em>learning circle.</em>';
    $('#classPageCopy').textContent = 'Join your teacher’s private classroom and keep your reading progress connected.';
    root.innerHTML = '<div class="empty-state"><div class="empty-illustration">✦</div><h3>Loading your classroom…</h3></div>';
    try {
      const classes = await listStudentClasses();
      root.innerHTML = `<div class="class-actions"><button class="button button-primary" id="joinClassAction">＋ JOIN WITH A CLASS CODE</button></div>${classes.length ? `<div class="class-grid">${classes.map(c => `<article class="class-card"><div class="class-card-top"><div class="class-card-icon">▦</div><span class="section-kicker">YOUR CLASS</span></div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.description || 'Your private STORYVERSE classroom')}</p><div class="class-card-meta"><span>TEACHER · ${escapeHtml(c.teacherName || 'Teacher')}</span><span>${(c.studentUids || []).length} MEMBERS</span></div><div class="class-card-actions"><span class="small-action" style="text-align:center">You're in ✓</span></div></article>`).join('')}</div>` : `<div class="empty-state"><div class="empty-illustration">▦</div><h3>Your class is waiting.</h3><p>Ask your teacher for the 8-character private code. Once you join, your reading progress can be viewed by your teacher.</p><button class="button button-primary" id="joinClassEmpty">Join a class ↗</button></div>`}`;
    } catch (err) { root.innerHTML = `<div class="empty-state"><h3>Could not load your class</h3><p>${escapeHtml(err.message)}</p></div>`; }
  }
}

async function renderTeacherRoster(code) {
  const area = $('#teacherRosterArea'); if (!area) return;
  const classes = await listTeacherClasses(); const klass = classes.find(c => c.code === code);
  if (!klass) { toast('Class not found.', 'error'); return; }
  const roster = await getClassRoster(klass);
  const total = roster.length;
  const rows = roster.map(s => {
    const attempts = (s.quizHistory || []).slice().sort((a,b) => (a.date || 0) - (b.date || 0));
    const scores = attempts.map(q => q.score); const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : null;
    const trend = scores.length > 1 ? scores[scores.length - 1] - scores[scores.length - 2] : null;
    const trendLabel = trend === null ? '—' : `${trend > 0 ? '+' : ''}${trend} pts`;
    const trendClass = trend === null ? '' : trend > 0 ? 'trend-up' : trend < 0 ? 'trend-down' : '';
    const done = (s.completedStories || []).length;
    return `<tr><td><div class="student-name-cell"><span class="student-avatar">${avatarEmoji(s.avatar)}</span><span>${escapeHtml(s.displayName || s.username || 'Student')}</span></div></td><td>${done}/3</td><td>${(s.scenesCompleted || []).length}/9</td><td>${avg === null ? '—' : `<span class="score-pill">${avg}%</span>`}</td><td><span class="${trendClass}">${trendLabel}</span></td><td><button class="view-student" data-student-detail="${escapeHtml(s.uid)}" data-class-code="${code}">View details ↗</button></td></tr>`;
  }).join('');
  area.innerHTML = `<div class="table-card"><div class="table-card-head"><div><h3>${escapeHtml(klass.name)} · Class overview</h3><span>${total} enrolled student${total === 1 ? '' : 's'} · Code ${code}</span></div><button class="small-action" data-hide-roster>Close ×</button></div><table class="data-table"><thead><tr><th>STUDENT</th><th>STORIES</th><th>SCENES</th><th>AVG. SCORE</th><th>VS PREVIOUS QUIZ</th><th>DETAILS</th></tr></thead><tbody>${rows || `<tr><td colspan="6">No students have joined yet. Share the class code above.</td></tr>`}</tbody></table></div><p class="class-private-note">Students’ reading data is visible to the teacher of this class for learning research and classroom support. Their personal profile score privacy setting controls profile visibility to other students, not the teacher’s class report.</p>`;
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
async function showStudentDetail(uid, code) {
  let student;
  if (cloudMode && cloud) {
    const snap = await cloud.fs.getDoc(cloud.fs.doc(cloud.db, 'classes', code, 'students', uid));
    if (snap.exists()) student = snap.data();
  } else student = getLocalProfiles()[uid];
  if (!student) { toast('Student progress could not be found.', 'error'); return; }
  $('#studentDetailName').textContent = student.displayName || student.username || 'Student';
  const avgList = (student.quizHistory || []).map(q => q.score); const avg = avgList.length ? Math.round(avgList.reduce((a,b)=>a+b,0)/avgList.length) : '—';
  $('#studentDetailContent').innerHTML = `<div class="student-detail-stats"><div><b>${(student.completedStories || []).length}/3</b><span>STORIES</span></div><div><b>${(student.scenesCompleted || []).length}/9</b><span>SCENES</span></div><div><b>${avg === '—' ? '—' : `${avg}%`}</b><span>AVERAGE SCORE</span></div></div><h3 style="font:600 13px var(--display);margin:10px 0">Quiz history</h3>${(student.quizHistory || []).length ? (student.quizHistory || []).slice().reverse().map(q => `<div class="student-detail-story"><span>${escapeHtml(q.storyTitle || 'Story quiz')}</span><b>${q.score}%</b></div>`).join('') : '<p class="class-private-note">No quiz attempts recorded yet.</p>'}`;
  showModal('studentDetailModal');
}

function renderProgress() {
  if (!currentUser) return;
  if (currentUser.role === 'teacher') {
    $('#progressContent').innerHTML = `<div class="empty-state"><div class="empty-illustration">↗</div><h3>Teacher progress lives in your classrooms.</h3><p>Open My classes, select a classroom, and view each student's completed stories, scenes, and quiz scores.</p><button class="button button-primary" data-view="classroom">Open my classes ↗</button></div>`;
    return;
  }
  const scores = currentUser.quizHistory || []; const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b.score,0)/scores.length) : null;
  const scenes = (currentUser.scenesCompleted || []).length; const stories = (currentUser.completedStories || []).length;
  const stats = `<div class="stat-grid"><div class="stat-card"><span>STORIES COMPLETED</span><b>${stories}<small style="font-size:13px;color:#8793b3"> / 3</small></b><small>Every ending counts.</small></div><div class="stat-card"><span>SCENES EXPLORED</span><b>${scenes}<small style="font-size:13px;color:#8793b3"> / 9</small></b><small>One scene at a time.</small></div><div class="stat-card"><span>AVERAGE QUIZ SCORE</span><b>${avg === null ? '—' : `${avg}%`}</b><small>${scores.length} quiz attempt${scores.length === 1 ? '' : 's'}</small></div><div class="stat-card"><span>STORYVERSE XP</span><b>${currentUser.xp || 0}</b><small>Earned by reading and exploring.</small></div></div>`;
  const bars = STORIES.map(s => { const attempts = scores.filter(q => q.storySlug === s.slug); const val = attempts.length ? attempts[attempts.length - 1].score : 0; const done = currentUser.completedStories?.includes(s.slug); return `<div class="chart-group"><div class="chart-bar" style="height:${Math.max(4,val)}%" title="${val}%"></div><div class="chart-bar secondary" style="height:${Math.max(4,Math.min(100,(currentUser.scenesCompleted||[]).filter(id=>id.startsWith(s.slug+':')).length/3*100))}%"></div><span class="chart-label">${s.title.split(' ')[0]}</span></div>`; }).join('');
  const achievementRows = ACHIEVEMENTS.map(a => { const ok = a.unlocked(currentUser); return `<div class="achievement-row"><div class="achievement-icon">${a.icon}</div><div><b>${a.title}</b><small>${a.detail}</small></div><span class="achievement-status ${ok?'unlocked':''}">${ok?'UNLOCKED':'LOCKED'}</span></div>`; }).join('');
  const history = scores.length ? scores.slice().reverse().map(q => `<div class="history-row"><div class="history-story-icon">✦</div><div><b>${escapeHtml(q.storyTitle)}</b><small>${new Date(q.date || Date.now()).toLocaleDateString()} · ${q.correct}/${q.total} correct</small></div><span class="history-score">${q.score}%</span></div>`).join('') : '<p class="class-private-note">Your quiz results will appear here after your first story.</p>';
  $('#progressContent').innerHTML = `${stats}<div class="progress-panels"><div class="panel-card"><span class="section-kicker">YOUR STORY CHECK-IN</span><h3>Quiz scores & scene progress</h3><div class="bar-chart">${bars}</div><div class="chart-legend"><span><i></i> Latest quiz score</span><span><i class="cyan"></i> Scenes explored</span></div></div><div class="panel-card"><span class="section-kicker">COLLECT THE LITTLE WINS</span><h3>Achievements</h3><div class="achievement-list">${achievementRows}</div></div></div><div class="panel-card" style="margin-top:13px"><span class="section-kicker">LOOKING BACK</span><h3>Previous quiz results</h3><div class="history-list">${history}</div></div>`;
}

function renderProfile() {
  if (!currentUser) return;
  const user = currentUser; const palette = getPalette(user.palette); const completed = (user.completedStories || []).length; const scenes = (user.scenesCompleted || []).length;
  const avatarRows = AVATARS.map(a => { const unlocked = avatarUnlocked(a, user); return `<button class="avatar-option ${user.avatar === a.id ? 'selected' : ''} ${unlocked ? '' : 'locked'}" data-avatar="${a.id}" title="${unlocked ? a.label : `${a.label} — ${a.note}`}">${a.emoji}</button>`; }).join('');
  const swatches = PALETTES.map(p => `<button class="color-swatch ${user.palette === p.id ? 'selected' : ''}" data-palette="${p.id}" style="background:${p.color}" title="${p.label}"></button>`).join('');
  const unlocked = ACHIEVEMENTS.filter(a => a.unlocked(user)); const locked = ACHIEVEMENTS.filter(a => !a.unlocked(user));
  $('#profileContent').innerHTML = `<div class="profile-layout"><div><article class="profile-preview-card"><div class="profile-cover" style="background:${palette.cover}"><div class="cover-orbit"></div></div><div class="profile-ident"><div class="profile-avatar-large" style="background:linear-gradient(145deg,${palette.color},#d88dbd)">${avatarEmoji(user.avatar)}</div><h2>${escapeHtml(user.displayName || user.username)}</h2><div class="profile-handle">@${escapeHtml(user.username)} · ${user.role === 'teacher' ? 'TEACHER' : 'STORY EXPLORER'}</div><p class="profile-bio">${escapeHtml(user.bio || 'Just here for the next good story. ✦')}</p><div class="profile-mini-stats"><div><b>${completed}</b><small>STORIES</small></div><div><b>${scenes}</b><small>SCENES</small></div><div><b>${user.xp || 0}</b><small>XP</small></div></div><div class="profile-privacy-label" style="font-size:8px;color:#8793b4;margin-top:12px">${user.scorePrivate ? '🔒 QUIZ SCORES PRIVATE ON PROFILE' : '✦ QUIZ SCORES SET TO SHARE'}</div><div class="profile-score-list"><b>YOUR QUIZ SCORES</b>${(user.quizHistory || []).length ? (user.quizHistory || []).slice().reverse().slice(0,3).map(q => `<div><span>${escapeHtml(q.storyTitle)}</span><strong>${q.score}%</strong></div>`).join('') : '<small>Complete a story quiz to add your first score.</small>'}</div></div></article><div class="achievement-unlocks"><h3>Your profile unlocks</h3><div class="unlock-pills">${unlocked.map(a => `<span class="unlock-pill">${a.icon} ${a.title}</span>`).join('')}${locked.map(a => `<span class="unlock-pill locked">⌑ ${a.title}</span>`).join('')}</div></div></div><div class="profile-editor"><h3>Make your profile yours</h3><label class="field-label" for="profileDisplayName">Display name</label><input id="profileDisplayName" value="${escapeHtml(user.displayName || '')}" maxlength="28" class="auth-form-input" style="width:100%;border:1px solid var(--line);background:#10172d;color:#fff;border-radius:9px;padding:10px;font-size:10px"/><label class="field-label" for="profileBio">A little about you</label><textarea id="profileBio" maxlength="100" style="width:100%;border:1px solid var(--line);background:#10172d;color:#fff;border-radius:9px;padding:10px;font-size:10px;min-height:62px">${escapeHtml(user.bio || '')}</textarea><label class="field-label">Choose your avatar</label><div class="avatar-options">${avatarRows}</div><div style="font-size:8px;color:#7f8bad;margin-top:7px">Locked looks open as you complete stories, explore scenes, and earn quiz achievements.</div><label class="field-label">Profile colors</label><div class="swatch-row">${swatches}</div><div class="privacy-setting"><div><b>Keep my quiz scores private</b><small>Other students won't see your scores on your profile. Your teacher can still see class progress.</small></div><button id="privacyToggle" class="toggle-switch ${user.scorePrivate ? 'on' : ''}" aria-label="Toggle score privacy" aria-pressed="${!!user.scorePrivate}"></button></div><button id="saveProfileButton" class="button button-primary button-wide" style="margin-top:5px">Save profile changes <span>✓</span></button></div></div>`;
}
function avatarUnlocked(a, user) {
  if (a.unlock === 0) return true;
  if (a.id === 'fox') return (user.completedStories || []).length >= 1;
  if (a.id === 'owl') return (user.scenesCompleted || []).length >= 3;
  if (a.id === 'jelly') return (user.quizHistory || []).length >= 1;
  if (a.id === 'dragon') return (user.quizHistory || []).some(q => q.score >= 90);
  if (a.id === 'robot') return (user.completedStories || []).length >= 3;
  return false;
}
async function saveProfileEdits() {
  const displayName = $('#profileDisplayName').value.trim() || currentUser.username; const bio = $('#profileBio').value.trim();
  currentUser.displayName = displayName; currentUser.bio = bio; await persistUser();
  $('#topName').textContent = displayName; $('#topAvatar').textContent = avatarEmoji(currentUser.avatar); renderProfile(); toast('Profile saved. Looking good! ✦');
}

function markSceneComplete(story, index) {
  const key = `${story.slug}:${index}`;
  if (!currentUser.scenesCompleted.includes(key)) { currentUser.scenesCompleted.push(key); currentUser.xp = (currentUser.xp || 0) + 10; persistUser(); }
}
function updateSceneUI() {
  const story = activeStory; const scene = story.scenes[activeScene];
  $('#experienceStoryTitle').textContent = story.title;
  $('#sceneCounter').textContent = `SCENE ${activeScene + 1} / ${story.scenes.length}`;
  $('#sceneHeading').textContent = scene.title;
  $('#sceneMeta').textContent = `SCENE ${activeScene + 1} · ${scene.label}`;
  $('#sceneText').innerHTML = scene.text.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  $('#sceneText').style.fontSize = `${storyFontSize}px`;
  const completedSceneCount = (currentUser.scenesCompleted || []).filter(key => key.startsWith(`${story.slug}:`)).length;
  $('#sceneDots').innerHTML = story.scenes.map((_, i) => `<i class="${i < activeScene ? 'done' : i === activeScene ? 'active' : ''}"></i>`).join('');
  $('#sceneProgressLabel').textContent = `${completedSceneCount} of ${story.scenes.length} scenes completed`;
  $('#sceneProgressFill').style.width = `${completedSceneCount / story.scenes.length * 100}%`;
  $('#previousScene').disabled = activeScene === 0;
  $('#nextScene').innerHTML = activeScene === story.scenes.length - 1 ? 'FINISH & TAKE QUIZ <span>✦</span>' : 'NEXT SCENE <span>→</span>';
  $('#objectInfo').classList.add('hidden');
  $('#audioStatus').textContent = `Narration ready · ${activeAmbient ? 'ambient sounds on' : 'ambient sounds off'}`;
  stopNarration();
  return buildSceneWorld(story, activeScene);
}
async function openStory(slug) {
  const story = getStory(slug); if (!story) { toast('That story portal could not be found.', 'error'); return; }
  activeStory = story; activeScene = 0; storyFontSize = 14;
  showModal('storyModal'); await updateSceneUI();
  $('#arButton').classList.remove('hidden');
  $('#arButton').textContent = '◎ VIEW IN YOUR ROOM';
}
function nextScene() {
  if (!activeStory) return;
  markSceneComplete(activeStory, activeScene);
  if (activeScene < activeStory.scenes.length - 1) { activeScene++; updateSceneUI(); }
  else { stopNarration(); stopAmbient(); hideModal('storyModal'); beginQuiz(activeStory); }
}
function previousScene() { if (activeScene > 0) { activeScene--; updateSceneUI(); } }
function exitStory() { stopNarration(); stopAmbient(); closeARViewer(); hideModal('storyModal'); closeStoryEngine(); renderHome(); }

function beginQuiz(story) {
  quizIndex = 0; quizAnswers = Array(story.quiz.length).fill(null); quizChecked = false;
  $('#quizIntro').textContent = `Six questions about ${story.title}. Take your time and think about the clues.`;
  $('#quizResult').classList.add('hidden'); $('#quizQuestionArea').classList.remove('hidden'); $('#quizBack').classList.remove('hidden'); $('#quizNext').classList.remove('hidden');
  renderQuizQuestion(); showModal('quizModal');
}
function renderQuizQuestion() {
  const story = activeStory; const q = story.quiz[quizIndex]; const chosen = quizAnswers[quizIndex];
  quizChecked = quizChecked || false;
  $('#quizQuestionCount').textContent = `QUESTION ${quizIndex + 1} OF ${story.quiz.length}`;
  $('#quizProgressFill').style.width = `${(quizIndex + 1) / story.quiz.length * 100}%`;
  const options = q.options.map((option, i) => {
    let state = chosen === i ? 'selected' : '';
    if (quizChecked && i === q.answer) state = 'correct'; else if (quizChecked && chosen === i && i !== q.answer) state = 'incorrect';
    return `<button class="quiz-option ${state}" data-quiz-option="${i}" ${quizChecked ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + i)}</span>${escapeHtml(option)}</button>`;
  }).join('');
  const feedback = quizChecked ? `<div class="quiz-feedback" style="margin-top:11px;padding:10px;border-radius:9px;background:${chosen === q.answer ? '#204a42' : '#492b46'};font-size:9px;color:#d6e4e9"><b>${chosen === q.answer ? 'That’s right! ✦' : 'Not quite — keep learning.'}</b><p style="margin:4px 0 0;color:#b4c5d5">${escapeHtml(q.explain)}</p></div>` : '';
  $('#quizQuestionArea').innerHTML = `<div class="quiz-question"><h3>${escapeHtml(q.q)}</h3><div class="quiz-options">${options}</div>${feedback}</div>`;
  $('#quizBack').disabled = quizIndex === 0;
  $('#quizNext').disabled = !quizChecked && chosen === null;
  $('#quizNext').innerHTML = quizChecked ? (quizIndex === story.quiz.length - 1 ? 'SEE MY SCORE <span>✦</span>' : 'NEXT QUESTION <span>→</span>') : 'CHECK ANSWER <span>✓</span>';
}
function handleQuizNext() {
  const story = activeStory; if (!story) return;
  if (!quizChecked) { if (quizAnswers[quizIndex] === null) return; quizChecked = true; quizAnswers[`checked_${quizIndex}`] = true; renderQuizQuestion(); return; }
  if (quizIndex < story.quiz.length - 1) { quizIndex++; quizChecked = quizAnswers[`checked_${quizIndex}`] === true; renderQuizQuestion(); }
  else finishQuiz();
}
function handleQuizBack() {
  if (quizIndex > 0) { quizIndex--; quizChecked = quizAnswers[`checked_${quizIndex}`] === true; renderQuizQuestion(); }
}
function selectQuizOption(index) {
  if (quizChecked) return;
  quizAnswers[quizIndex] = index;
  renderQuizQuestion();
  // The answer is locked only after Check answer is pressed.
}
async function finishQuiz() {
  const story = activeStory; const correct = story.quiz.reduce((n, q, i) => n + (quizAnswers[i] === q.answer ? 1 : 0), 0);
  const score = Math.round(correct / story.quiz.length * 100);
  const attempt = { storySlug: story.slug, storyTitle: story.title, score, correct, total: story.quiz.length, date: Date.now() };
  currentUser.quizHistory = [...(currentUser.quizHistory || []), attempt];
  if (!currentUser.completedStories.includes(story.slug)) currentUser.completedStories.push(story.slug);
  currentUser.xp = (currentUser.xp || 0) + 30 + correct * 5;
  await persistUser();
  $('#quizQuestionArea').classList.add('hidden'); $('#quizBack').classList.add('hidden'); $('#quizNext').classList.add('hidden');
  const message = score >= 80 ? 'You noticed the details and connected the ideas. Amazing reading!' : score >= 60 ? 'Nice effort. Revisit the clues and see what you notice next time.' : 'Every attempt teaches you something. Try the story again and look for clues.';
  $('#quizResult').classList.remove('hidden');
  $('#quizResult').innerHTML = `<div class="score-big">${score}%</div><h3>${score >= 80 ? 'Beautifully understood.' : 'Adventure complete.'}</h3><p>${correct} out of ${story.quiz.length} correct · ${message}</p><button class="button button-primary" id="quizDoneButton">Back to Storyverse ↗</button>`;
  renderHome();
}

function speakText(text, opts = {}) {
  if (!('speechSynthesis' in window)) { toast('Read-aloud is not supported by this browser.', 'error'); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const english = voices.find(v => /en(-|_)(PH|US|GB|AU)/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang));
  if (english) utterance.voice = english;
  utterance.rate = opts.rate || 0.93; utterance.pitch = opts.pitch || 1.02;
  utterance.onstart = () => { $('#narrateButton').textContent = 'Ⅱ'; $('#audioStatus').textContent = 'Narration playing…'; };
  utterance.onend = () => { $('#narrateButton').textContent = '▶'; $('#audioStatus').textContent = `Narration finished · ${activeAmbient ? 'ambient sounds on' : 'ambient sounds off'}`; };
  utterance.onerror = () => { $('#narrateButton').textContent = '▶'; $('#audioStatus').textContent = 'Narration unavailable'; };
  window.speechSynthesis.speak(utterance);
}
function toggleNarration() {
  if (!activeStory) return;
  if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) { window.speechSynthesis.pause(); $('#narrateButton').textContent = '▶'; $('#audioStatus').textContent = 'Narration paused'; }
  else if (window.speechSynthesis?.paused) { window.speechSynthesis.resume(); $('#narrateButton').textContent = 'Ⅱ'; $('#audioStatus').textContent = 'Narration playing…'; }
  else { const scene = activeStory.scenes[activeScene]; speakText(scene.text.join(' '), { pitch: activeStory.theme === 'sea' ? 1.0 : activeStory.theme === 'clock' ? 1.06 : 0.97 }); }
}
function stopNarration() { if (window.speechSynthesis) window.speechSynthesis.cancel(); const btn = $('#narrateButton'); if (btn) btn.textContent = '▶'; }
function pronounceWord() { const word = $('#pronounceInput').value.trim(); if (!word) { toast('Type a word first.'); return; } speakText(word, { rate: 0.78, pitch: 1 }); }

async function toggleAmbient(force) {
  const shouldPlay = typeof force === 'boolean' ? force : !activeAmbient;
  if (shouldPlay) {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) throw new Error('Audio is not supported.');
      if (!ambientContext) ambientContext = new Ctx();
      if (ambientContext.state === 'suspended') await ambientContext.resume();
      if (ambientNodes.length) stopAmbientNodes();
      const ctx = ambientContext; const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource(); noise.buffer = noiseBuffer; noise.loop = true;
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      const gain = ctx.createGain(); gain.gain.value = activeStory?.theme === 'sea' ? 0.055 : activeStory?.theme === 'clock' ? 0.018 : 0.035;
      filter.frequency.value = activeStory?.theme === 'sea' ? 330 : activeStory?.theme === 'clock' ? 650 : 520;
      noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination); noise.start();
      const chord = activeStory?.theme === 'sea' ? [130.81, 164.81, 196] : activeStory?.theme === 'clock' ? [110, 138.59, 164.81] : [146.83, 174.61, 220];
      const padNodes = [];
      chord.forEach((frequency, index) => {
        const tone = ctx.createOscillator(); const toneGain = ctx.createGain();
        tone.type = 'sine'; tone.frequency.value = frequency; toneGain.gain.value = index === 0 ? .003 : .0018;
        tone.connect(toneGain); toneGain.connect(ctx.destination); tone.start(); padNodes.push(tone, toneGain);
      });
      ambientNodes = [noise, filter, gain, ...padNodes]; activeAmbient = true;
      ambientTimer = window.setInterval(() => {
        if (!activeAmbient || !ambientContext || ambientContext.state !== 'running') return;
        const cue = ambientContext.createOscillator(); const envelope = ambientContext.createGain();
        const now = ambientContext.currentTime;
        cue.type = 'sine';
        if (activeStory?.theme === 'clock') { cue.frequency.setValueAtTime(780, now); cue.frequency.exponentialRampToValueAtTime(520, now + .07); envelope.gain.setValueAtTime(.0001, now); envelope.gain.exponentialRampToValueAtTime(.012, now + .008); envelope.gain.exponentialRampToValueAtTime(.0001, now + .12); }
        else { const start = activeStory?.theme === 'sea' ? 520 : 1250; cue.frequency.setValueAtTime(start, now); cue.frequency.exponentialRampToValueAtTime(start * 1.6, now + .09); cue.frequency.exponentialRampToValueAtTime(start * .85, now + .24); envelope.gain.setValueAtTime(.0001, now); envelope.gain.exponentialRampToValueAtTime(.009, now + .025); envelope.gain.exponentialRampToValueAtTime(.0001, now + .28); }
        cue.connect(envelope); envelope.connect(ambientContext.destination); cue.start(now); cue.stop(now + .3);
      }, activeStory?.theme === 'clock' ? 2100 : 3400);
      $('#soundToggle').classList.add('sound-on'); $('#ambientButton').classList.add('sound-on');
      $('#audioStatus').textContent = 'Soft story ambience playing';
    } catch (err) { toast(err.message || 'Could not start ambient audio.', 'error'); }
  } else stopAmbient();
}
function stopAmbientNodes() { for (const node of ambientNodes) { try { if (node.stop) node.stop(); node.disconnect?.(); } catch {} } ambientNodes = []; }
function stopAmbient() { activeAmbient = false; if (ambientTimer) clearInterval(ambientTimer); ambientTimer = null; stopAmbientNodes(); $('#soundToggle')?.classList.remove('sound-on'); $('#ambientButton')?.classList.remove('sound-on'); if ($('#audioStatus')) $('#audioStatus').textContent = 'Narration ready · ambient sounds off'; }

function getStoryPayload(slug) {
  if (location.protocol === 'http:' || location.protocol === 'https:') {
    const url = new URL(location.href); url.searchParams.set('story', slug); url.hash = '';
    return url.toString();
  }
  return `STORYVERSE:${slug}`;
}
function openQR(slug) {
  if (currentUser?.role !== 'teacher') { toast('QR codes are available to teacher accounts only.', 'error'); return; }
  const story = getStory(slug); if (!story) return;
  activeQrSlug = slug;
  $('#qrStoryTitle').textContent = story.title; $('#qrPayload').textContent = getStoryPayload(slug); $('#qrCodeDisplay').innerHTML = '';
  showModal('qrModal');
  if (window.QRCode) {
    new QRCode($('#qrCodeDisplay'), { text: getStoryPayload(slug), width: 196, height: 196, colorDark: '#11152d', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.H });
  } else $('#qrCodeDisplay').textContent = 'QR generator could not load. Use this code: ' + story.slug;
}
function downloadQR() {
  const display = $('#qrCodeDisplay'); const canvas = display.querySelector('canvas'); const img = display.querySelector('img');
  const href = canvas ? canvas.toDataURL('image/png') : img?.src;
  if (!href) { toast('QR image is not ready.', 'error'); return; }
  const a = document.createElement('a'); a.href = href; a.download = `${activeQrSlug || 'storyverse'}-qr.png`; a.click();
}
let activeQrSlug = null;
function parseStoryPayload(value) {
  const raw = String(value || '').trim();
  let slug = raw;
  if (/^https?:\/\//i.test(raw)) {
    try { const url = new URL(raw); slug = url.searchParams.get('story') || url.pathname.split('/').filter(Boolean).pop() || ''; } catch {}
  } else if (/^STORYVERSE[:|]/i.test(raw)) slug = raw.split(/[:|]/).slice(1).join(':');
  slug = slug.trim().replace(/^\/+|\/+$/g, '').toLowerCase();
  if (slug.includes('?')) slug = new URLSearchParams(slug.split('?')[1]).get('story') || slug;
  return getStory(slug)?.slug || null;
}

function openScanner() { stopScanner(); showModal('scanModal'); $('#scannerPlaceholder').classList.remove('hidden'); $('#scannerVideo').style.display = 'none'; $('#startScanButton').classList.remove('hidden'); $('#stopScanButton').classList.add('hidden'); }
async function startScanner() {
  if (!navigator.mediaDevices?.getUserMedia) { toast('Camera access needs HTTPS or localhost on a supported browser.', 'error'); return; }
  try {
    scanStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
    const video = $('#scannerVideo'); video.srcObject = scanStream; video.style.display = 'block'; $('#scannerPlaceholder').classList.add('hidden'); $('.scanner-frame').classList.add('scanning');
    await video.play(); scanActive = true; $('#startScanButton').classList.add('hidden'); $('#stopScanButton').classList.remove('hidden');
    scannerCanvas = document.createElement('canvas'); scannerContext = scannerCanvas.getContext('2d', { willReadFrequently: true });
    scanLoop();
  } catch (err) {
    const message = err.name === 'NotAllowedError' ? 'Camera permission was blocked. Allow camera access in your browser settings.' : err.name === 'NotFoundError' ? 'No camera was found on this device.' : `Camera could not start: ${err.message}`;
    toast(message, 'error');
  }
}
async function scanLoop() {
  if (!scanActive) return;
  const video = $('#scannerVideo');
  if (video.readyState >= 2 && !scanBusy) {
    scanBusy = true;
    try {
      let decoded = null;
      if ('BarcodeDetector' in window) {
        try { if (!window.storyBarcodeDetector) window.storyBarcodeDetector = new BarcodeDetector({ formats: ['qr_code'] }); const codes = await window.storyBarcodeDetector.detect(video); if (codes.length) decoded = codes[0].rawValue; } catch {}
      }
      if (!decoded && window.jsQR) {
        scannerCanvas.width = video.videoWidth; scannerCanvas.height = video.videoHeight;
        scannerContext.drawImage(video, 0, 0, scannerCanvas.width, scannerCanvas.height);
        const frame = scannerContext.getImageData(0, 0, scannerCanvas.width, scannerCanvas.height);
        const result = window.jsQR(frame.data, frame.width, frame.height, { inversionAttempts: 'attemptBoth' });
        if (result) decoded = result.data;
      }
      if (decoded) {
        const slug = parseStoryPayload(decoded);
        if (slug) { stopScanner(); hideModal('scanModal'); toast('Story QR recognized. Opening your world…'); openStory(slug); return; }
        stopScanner(); toast('That QR code is not a STORYVERSE story. Try another one.', 'error'); return;
      }
    } finally { scanBusy = false; }
  }
  scanRaf = requestAnimationFrame(scanLoop);
}
function stopScanner() {
  scanActive = false; if (scanRaf) cancelAnimationFrame(scanRaf); scanRaf = null;
  if (scanStream) scanStream.getTracks().forEach(t => t.stop()); scanStream = null;
  const video = $('#scannerVideo'); if (video) { video.pause(); video.srcObject = null; video.style.display = 'none'; }
  $('.scanner-frame')?.classList.remove('scanning'); $('#startScanButton')?.classList.remove('hidden'); $('#stopScanButton')?.classList.add('hidden'); $('#scannerPlaceholder')?.classList.remove('hidden');
}
function openManualStory() {
  const slug = parseStoryPayload($('#manualStoryCode').value);
  if (!slug) { toast('No matching story found. Try one of the story slugs shown on a story QR.', 'error'); return; }
  stopScanner(); hideModal('scanModal'); openStory(slug);
}

let THREE_MODULE = null;
async function ensureThree() {
  if (THREE_MODULE) return THREE_MODULE;
  try { THREE_MODULE = await import('https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js'); return THREE_MODULE; }
  catch (err) { console.warn('Three.js could not load', err); return null; }
}
function closeStoryEngine() {
  if (!sceneEngine) return;
  try {
    sceneEngine.disposables?.forEach(item => item?.dispose?.());
    if (sceneEngine.renderer?.xr?.getSession()) sceneEngine.renderer.xr.getSession().end();
    sceneEngine.renderer?.setAnimationLoop(null);
    sceneEngine.resizeObserver?.disconnect();
    sceneEngine.renderer?.dispose();
    sceneEngine.renderer?.domElement?.remove();
  } catch {}
  sceneEngine = null;
}

async function buildSceneWorld(story, sceneIndex) {
  const stage = $('#sceneStage');
  if (!stage) return;
  closeStoryEngine();
  $('#sceneStage .scene-stage-loading')?.classList.remove('hidden');
  const THREE = await ensureThree();
  if (!THREE) {
    $('#sceneStage .scene-stage-loading').innerHTML = '3D scene needs an internet connection <span>✦</span>';
    $('#xrStatus').textContent = 'READING VIEW';
    return;
  }
  try {
    const width = Math.max(280, stage.clientWidth); const height = Math.max(195, stage.clientHeight);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); renderer.setSize(width, height, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.xr.enabled = true;
    renderer.xr.setReferenceSpaceType('local');
    stage.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    const bgColors = { lantern: 0x142541, clock: 0x222449, sea: 0x0d3650 };
    scene.background = new THREE.Color(bgColors[story.theme]);
    scene.fog = new THREE.FogExp2(bgColors[story.theme], 0.035);
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.05, 8.3); camera.lookAt(0, 1.3, 0);
    const ambient = new THREE.HemisphereLight(0xbccaff, 0x1a2542, 1.7); scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffe8d4, 2.1); key.position.set(-3, 7, 5); scene.add(key);
    const rim = new THREE.PointLight(story.theme === 'sea' ? 0x4adce8 : story.theme === 'clock' ? 0xe7b86b : 0x8b86ff, 2.1, 13); rim.position.set(3, 2.8, -2); scene.add(rim);
    const mainGroup = new THREE.Group(); scene.add(mainGroup);
    const xrGroup = new THREE.Group(); xrGroup.position.set(0, -0.15, -1.45); xrGroup.scale.setScalar(0.55); scene.add(xrGroup); xrGroup.visible = false;
    const interactive = []; const floaters = []; const disposables = [];
    const mat = (color, roughness = 0.72, metalness = 0.03, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
    function mesh(geo, material, parent = mainGroup, position = [0,0,0], scale = [1,1,1]) {
      const m = new THREE.Mesh(geo, material); m.position.set(...position); m.scale.set(...scale); m.castShadow = false; m.receiveShadow = false; parent.add(m); disposables.push(geo, material); return m;
    }
    function discoverable(object, title, text) { object.userData.discovery = { title, text }; interactive.push(object); return object; }
    function addGround(color) { const ground = mesh(new THREE.CircleGeometry(5.2, 64), mat(color, 0.95), mainGroup, [0, -0.1, 0]); ground.rotation.x = -Math.PI / 2; ground.scale.set(1, .72, 1); }
    function addStarField() {
      const count = 120; const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) { positions[i*3] = (Math.random()-.5)*17; positions[i*3+1] = Math.random()*8; positions[i*3+2] = -4 - Math.random()*8; }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const points = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xdedaff, size: 0.035, transparent: true, opacity: .65 })); mainGroup.add(points); floaters.push({ object: points, mode: 'rotate' }); disposables.push(geo, points.material);
    }
    function addTree(x, z, scale = 1) {
      const trunk = mesh(new THREE.CylinderGeometry(.12*scale,.2*scale,1.45*scale,7), mat(0x73533f), mainGroup, [x,.65*scale,z]);
      const top = mesh(new THREE.ConeGeometry(.72*scale,1.9*scale,7), mat(0x397d78), mainGroup, [x,1.9*scale,z]); top.rotation.z = (Math.random()-.5)*.15;
      const leaf = mesh(new THREE.ConeGeometry(.5*scale,1.3*scale,7), mat(0x4a9a83), mainGroup, [x+.07,2.55*scale,z-.05]);
      floaters.push({ object: leaf, base: leaf.position.y, phase: Math.random()*3 });
      return discoverable(top, 'Mangrove canopy', 'The leafy canopy slows wind and offers shade. Mangrove roots create shelter for many small coastal animals.');
    }
    function addCoral(x,z,color) {
      const group = new THREE.Group(); group.position.set(x,0,z); mainGroup.add(group);
      const base = mesh(new THREE.SphereGeometry(.35,10,8), mat(color), group, [0,.28,0], [1,.7,1]);
      for (let i=0;i<4;i++) { const stem = mesh(new THREE.CylinderGeometry(.05,.11,.65+Math.random()*.35,6), mat(color), group, [(i-1.5)*.19,.63,(Math.random()-.5)*.2]); stem.rotation.z = (i-1.5)*.2; }
      return discoverable(base, 'Coral garden', 'Coral structures create shelter and hiding places for sea creatures. A healthy reef is full of connected life.');
    }
    function addFlower(x,z,color) {
      const stem = mesh(new THREE.CylinderGeometry(.035,.05,.8,7), mat(0x6d9a74), mainGroup, [x,.42,z]);
      const blossom = new THREE.Group(); blossom.position.set(x,.92,z); mainGroup.add(blossom);
      const center = mesh(new THREE.SphereGeometry(.13,12,10), mat(0xf8d47e, .5), blossom, [0,0,0]);
      for (let i=0;i<6;i++) { const petal = mesh(new THREE.SphereGeometry(.17,10,8), mat(color), blossom, [Math.cos(i*Math.PI/3)*.19, Math.sin(i*Math.PI/3)*.19,0], [1,.65,.75]); }
      floaters.push({ object: blossom, base: .92, phase: Math.random()*5 });
      return discoverable(center, 'Clockwork blossom', 'Each petal is connected to a tiny gear. The flower opens when the garden’s rhythm returns.');
    }
    function addCharacter(color, hairColor, position = [-1,0,0], parent = mainGroup) {
      const character = new THREE.Group(); character.position.set(...position); parent.add(character);
      const bodyMat = mat(color, .55, .05); const skin = mat(0xe9bd9e, .7); const hair = mat(hairColor, .78);
      const body = mesh(new THREE.CapsuleGeometry(.31,.62,4,8), bodyMat, character, [0,.83,0]);
      const head = mesh(new THREE.SphereGeometry(.34,18,14), skin, character, [0,1.53,.02], [1,.98,.9]);
      const hairCap = mesh(new THREE.SphereGeometry(.35,14,10), hair, character, [0,1.72,-.01], [1,.45,1]);
      mesh(new THREE.SphereGeometry(.045,8,8), mat(0x20243e), character, [-.12,1.55,.315]); mesh(new THREE.SphereGeometry(.045,8,8), mat(0x20243e), character, [.12,1.55,.315]);
      const armL = mesh(new THREE.CapsuleGeometry(.08,.42,3,6), skin, character, [-.39,.96,0]); armL.rotation.z = -.35;
      const armR = mesh(new THREE.CapsuleGeometry(.08,.42,3,6), skin, character, [.39,.96,0]); armR.rotation.z = .35;
      const legL = mesh(new THREE.CapsuleGeometry(.09,.35,3,6), mat(0x273451), character, [-.16,.28,0]);
      const legR = mesh(new THREE.CapsuleGeometry(.09,.35,3,6), mat(0x273451), character, [.16,.28,0]);
      floaters.push({ object: character, base: position[1], phase: Math.random()*3, mode: 'character' });
      discoverable(head, 'A story character', 'Look closely at the character’s expression and surroundings. What might they be thinking or feeling in this moment?');
      return character;
    }
    function addLantern(x,z,blue=false) {
      const group = new THREE.Group(); group.position.set(x,1.65,z); mainGroup.add(group);
      const glow = mesh(new THREE.SphereGeometry(.23,16,12), new THREE.MeshStandardMaterial({ color: blue ? 0x6ee8f0 : 0xffbd72, emissive: blue ? 0x22bcd1 : 0xb66b29, emissiveIntensity: 1.8, roughness: .3 }), group, [0,0,0], [1,1.25,.8]);
      const ring = mesh(new THREE.TorusGeometry(.27,.025,6,20), mat(0xd5b27c,.35,.4), group, [0,0,0]); ring.rotation.x = Math.PI/2;
      const light = new THREE.PointLight(blue ? 0x59e5ef : 0xffb86b, 1.3, 4); light.position.set(0,0,0); group.add(light);
      floaters.push({ object: group, base: 1.65, phase: Math.random()*4 });
      return discoverable(glow, blue ? 'The blue signal' : 'A shore lantern', blue ? 'Three blue flashes may be a warning or a request for help. Mira follows the signal to understand what happened.' : 'The warm lantern light helps boats find the safe channel back to the harbor.');
    }
    function addGear(x,y,z,size,color) {
      const group = new THREE.Group(); group.position.set(x,y,z); mainGroup.add(group);
      const torus = mesh(new THREE.TorusGeometry(size,.095,7,16), mat(color,.35,.6), group);
      for (let i=0;i<8;i++) { const tooth = mesh(new THREE.BoxGeometry(.12,.19,.14), mat(color,.35,.6), group, [Math.cos(i*Math.PI/4)*size,Math.sin(i*Math.PI/4)*size,0]); tooth.rotation.z = i*Math.PI/4; }
      floaters.push({ object: group, mode: 'gear', base: 0, phase: Math.random()*3 });
      return discoverable(torus, 'A turning gear', 'Gears transfer movement from one part of a machine to another. A single stopped gear can affect an entire mechanism.');
    }
    function addBubble(x,y,z) {
      const bubble = mesh(new THREE.SphereGeometry(.08+Math.random()*.08,10,8), new THREE.MeshStandardMaterial({ color: 0x87e8f3, metalness: .1, roughness: .15, transparent:true, opacity:.42 }), mainGroup, [x,y,z]);
      floaters.push({ object: bubble, base: y, phase: Math.random()*5, mode: 'bubble' });
    }

    addStarField();
    if (story.theme === 'lantern') {
      addGround(0x1c3651);
      const water = mesh(new THREE.CircleGeometry(4.5,48), mat(0x1a5872,.4,.15), mainGroup, [0,-.025,-1]); water.rotation.x = -Math.PI/2; water.scale.set(1.2,.62,1);
      for (let i=0;i<8;i++) addTree(-4.2+i*1.2, -1.8-(i%2)*.8, .72+Math.random()*.5);
      addLantern(-2.1,1.0, false); addLantern(2.6,-1.4, true); addLantern(2.1,1.3,false);
      const path = mesh(new THREE.BoxGeometry(6,.08,1.3), mat(0x886b4e), mainGroup, [0,.04,1.8]); path.rotation.y = -.1;
      addCharacter(0x657ed6,0x342b56,[-.9,0,1.0]); addCharacter(0xe7a36d,0x4c3028,[.8,0,1.2]);
      for(let i=0;i<13;i++){ const glow=mesh(new THREE.SphereGeometry(.035,6,6),new THREE.MeshBasicMaterial({color:0x8df6df}),mainGroup,[(Math.random()-.5)*8,.5+Math.random()*2,(Math.random()-.5)*5]);floaters.push({object:glow,base:glow.position.y,phase:Math.random()*5}); }
    } else if (story.theme === 'clock') {
      addGround(0x2b3059);
      const platform = mesh(new THREE.CylinderGeometry(4.4,4.7,.28,48), mat(0x6c604e,.45,.35), mainGroup, [0,-.08,0]);
      const back = mesh(new THREE.TorusGeometry(3.1,.065,7,80), mat(0x9e8d69,.35,.5), mainGroup, [0,2.15,-1.7]); back.scale.y = .8;
      addGear(-2.5,2.1,-1.2,.65,0xc69b58); addGear(2.7,2.3,-1.8,.85,0xa6a4bf); addGear(2.25,.9,-1.6,.42,0xe0b96b);
      for(let i=0;i<7;i++) addFlower(-3.4+i*1.1,1.0+(i%2)*.3,[0xd58db9,0xeabf6f,0x9bcfbe][i%3]);
      const music = mesh(new THREE.BoxGeometry(1.1,.48,.55), mat(0x9c7045,.45,.25), mainGroup, [0,.3,1.65]);
      discoverable(music,'The music box','The box stores a melody on a turning cylinder. Its incomplete tune is the clue to waking the garden.');
      addCharacter(0x719d8a,0x2e3548,[-.85,0,1.5]);
      const clockFace = mesh(new THREE.CircleGeometry(.74,40), mat(0xf1dca9,.55), mainGroup, [0,2.6,-2.2]);
      const clockRing = mesh(new THREE.TorusGeometry(.78,.08,8,48), mat(0xb78c51,.35,.55), mainGroup, [0,2.6,-2.15]);
      for(let i=0;i<12;i++){ const tick=mesh(new THREE.BoxGeometry(.035,.15,.03),mat(0x473d35),mainGroup,[Math.sin(i*Math.PI/6)*.61,2.6+Math.cos(i*Math.PI/6)*.61,-2.12]); tick.rotation.z = -i*Math.PI/6; }
      discoverable(clockRing,'The greenhouse clock','The clock stopped at the same minute as the garden. When the melody returns, its hands can move again.');
    } else {
      addGround(0x164761);
      const seabed = mesh(new THREE.CircleGeometry(4.7,48), mat(0x24596b), mainGroup, [0,-.08,0]); seabed.rotation.x = -Math.PI/2; seabed.scale.set(1.2,.7,1);
      addCoral(-3.4,-1.5,0xe48ba5); addCoral(3.3,-1.4,0xd0a6e8); addCoral(-2.8,1.3,0xefbd7a); addCoral(2.8,1.4,0x8cd6ce);
      for(let i=0;i<14;i++){ const blade=mesh(new THREE.ConeGeometry(.12,.8+Math.random()*.8,5),mat(0x399a89),mainGroup,[-4+Math.random()*8,.45,-2+Math.random()*4]);blade.rotation.z=(Math.random()-.5)*.45; }
      const turtle = new THREE.Group(); turtle.position.set(1.5,1.0,.4); mainGroup.add(turtle);
      const shell = mesh(new THREE.SphereGeometry(.43,16,12),mat(0x4a9d79,.65),turtle,[0,0,0],[1.15,.55,1]);
      const head = mesh(new THREE.SphereGeometry(.18,12,10),mat(0x9ed7a7),turtle,[.46,.02,.02]);
      for(let i=0;i<4;i++){ const fin=mesh(new THREE.SphereGeometry(.16,10,8),mat(0x75b998),turtle,[(i<2?-1:1)*.34,-.14,(i%2?1:-1)*.3],[1,.45,.7]); }
      floaters.push({object:turtle,base:1,phase:2,mode:'character'}); discoverable(shell,'The young sea turtle','The turtle’s tracks led Naya toward the sheltered pool. Its presence is one clue that the inlet may be an important habitat.');
      addCharacter(0x4e82c9,0x3a2b54,[-1.6,0,1.3]);
      for(let i=0;i<18;i++) addBubble(-4+Math.random()*8,.3+Math.random()*3,-2+Math.random()*4);
      const mapDisc=mesh(new THREE.CylinderGeometry(.42,.42,.09,32),mat(0xb78a57,.65),mainGroup,[-.2,.16,2.25]); mapDisc.rotation.x = Math.PI/2; discoverable(mapDisc,'The wooden map disc','Three curved lines match the bends in the inlet. Naya compares the symbol with an old map to find the hidden nursery.');
    }
    // A floating character and story artifact make the immersive AR view feel like a tiny portal.
    const arCharacter = addCharacter(story.theme === 'sea' ? 0x4e82c9 : story.theme === 'clock' ? 0x719d8a : 0x657ed6, 0x3a2b54, [-.48,-.38,.08], xrGroup);
    arCharacter.scale.setScalar(.62);
    const arArtifact = story.theme === 'sea'
      ? mesh(new THREE.SphereGeometry(.28,14,10), mat(0x4a9d79,.6), xrGroup, [.54,-.08,.05], [1.3,.55,1])
      : story.theme === 'clock'
        ? mesh(new THREE.TorusGeometry(.34,.075,7,18), mat(0xe0b96b,.35,.55), xrGroup, [.55,.12,.05])
        : mesh(new THREE.SphereGeometry(.22,14,10), new THREE.MeshStandardMaterial({color:0x70e8ef,emissive:0x27aabd,emissiveIntensity:1.4}), xrGroup, [.55,.08,.05], [1,1.25,.8]);
    const arStand = mesh(new THREE.TorusGeometry(.55,.035,8,40), mat(story.theme==='sea'?0x83e6e5:0xb6a4ff,.3,.4), xrGroup, [0,.05,0]);
    const arOrb = mesh(new THREE.IcosahedronGeometry(.36,1), new THREE.MeshStandardMaterial({ color: story.theme==='sea'?0x73dfe5:story.theme==='clock'?0xf1c777:0xa99aff, emissive: story.theme==='sea'?0x145a70:0x3a286c, emissiveIntensity: .8, roughness:.25, metalness:.3 }), xrGroup, [0,.45,0]);
    const arLight = new THREE.PointLight(0x9e91ff,2,4); arLight.position.set(0,.6,.2); xrGroup.add(arLight);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      for (const item of floaters) {
        if (item.mode === 'rotate') item.object.rotation.y = t * .025;
        else if (item.mode === 'gear') item.object.rotation.z = Math.sin(t*.25+item.phase)*.12 + t*.12;
        else if (item.mode === 'bubble') item.object.position.y = item.base + Math.sin(t*1.2+item.phase)*.12 + Math.sin(t*.5+item.phase)*.08;
        else item.object.position.y = item.base + Math.sin(t*1.2+item.phase)*.075;
      }
      arOrb.rotation.y = t*.55; arOrb.rotation.x = Math.sin(t*.45)*.18; arStand.rotation.z = t*.24;
      renderer.render(scene,camera);
    };
    renderer.setAnimationLoop(animate);
    const resize = () => { if (!sceneEngine) return; const w = Math.max(280,stage.clientWidth), h = Math.max(190,stage.clientHeight); renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); };
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(stage);
    sceneEngine = { THREE, renderer, scene, camera, mainGroup, xrGroup, interactive, floaters, resizeObserver, disposables, stage, story, sceneIndex, arActive:false };
    $('#sceneStage .scene-stage-loading')?.classList.add('hidden');
    $('#xrStatus').textContent = '3D VIEW';
    attachSceneControls(sceneEngine);
  } catch (err) {
    console.warn('Could not build 3D scene', err);
    $('#sceneStage .scene-stage-loading').innerHTML = '3D scene could not load on this device <span>✦</span>';
  }
}
function attachSceneControls(engine) {
  const { THREE, renderer, camera, interactive, mainGroup } = engine; const canvas = renderer.domElement;
  const raycaster = new THREE.Raycaster(); const pointer = new THREE.Vector2();
  let down = null; let moved = false;
  canvas.addEventListener('pointerdown', event => { down = { x: event.clientX, y: event.clientY, rx: mainGroup.rotation.x, ry: mainGroup.rotation.y }; moved = false; canvas.setPointerCapture?.(event.pointerId); });
  canvas.addEventListener('pointermove', event => {
    if (!down) return;
    const dx = event.clientX - down.x, dy = event.clientY - down.y;
    if (Math.abs(dx)+Math.abs(dy)>5) moved=true;
    if (moved && !engine.arActive) { mainGroup.rotation.y = down.ry + dx*.004; mainGroup.rotation.x = Math.max(-.12,Math.min(.18,down.rx + dy*.002)); }
  });
  canvas.addEventListener('pointerup', event => {
    if (!down) return;
    if (!moved && !engine.arActive) {
      const rect = canvas.getBoundingClientRect(); pointer.x = ((event.clientX-rect.left)/rect.width)*2-1; pointer.y = -((event.clientY-rect.top)/rect.height)*2+1;
      raycaster.setFromCamera(pointer,camera);
      const hits = raycaster.intersectObjects(interactive,true);
      const target = hits.find(hit => hit.object.userData.discovery || hit.object.parent?.userData.discovery);
      if (target) {
        const obj = target.object.userData.discovery ? target.object : target.object.parent;
        const details = obj.userData.discovery;
        $('#objectInfoTitle').textContent = details.title; $('#objectInfoText').textContent = details.text; $('#objectInfo').classList.remove('hidden');
        $('#stageHint').textContent = 'Discovery unlocked ✦';
      }
    }
    down = null;
  });
  canvas.addEventListener('pointercancel',()=>down=null);
}
function closeARViewer() {
  const viewer = $('#storyARModel');
  if (viewer) {
    try { viewer.pause?.(); } catch {}
    viewer.removeAttribute('src');
  }
  hideModal('arViewerModal');
  if ($('#arViewerStatus')) $('#arViewerStatus').textContent = 'Loading the 3D story world…';
}

async function launchAR() {
  if (!activeStory) return;
  const viewer = $('#storyARModel');
  if (!viewer) { toast('The AR viewer is not available in this page.', 'error'); return; }
  if (!customElements.get('model-viewer')) {
    toast('The AR viewer is still loading. Check your internet connection and try again.', 'error');
    return;
  }

  const modelPath = `./assets/ar/${activeStory.slug}.glb`;
  $('#arViewerTitle').textContent = activeStory.title;
  $('#arViewerDescription').textContent = `${activeStory.description} Explore the story diorama, then place it in your space.`;
  $('#arViewerStatus').textContent = 'Loading the 3D story world…';
  viewer.setAttribute('alt', `3D augmented reality diorama for ${activeStory.title}`);
  viewer.addEventListener('load', () => {
    $('#arViewerStatus').textContent = '3D story ready. If AR is supported, tap the AR button to place it in your space.';
  }, { once: true });
  viewer.addEventListener('error', () => {
    $('#arViewerStatus').textContent = 'The 3D model could not load. Check your connection and try again.';
    toast('The AR story model could not load.', 'error');
  }, { once: true });
  showModal('arViewerModal');
  viewer.setAttribute('src', new URL(modelPath, document.baseURI).href);
}

function bindEvents() {
  $$('.role-tab').forEach(btn => btn.addEventListener('click', () => { selectedRole = btn.dataset.role; updateAuthUI(); }));
  $('#showLogin').addEventListener('click', () => { authMode = 'login'; updateAuthUI(); });
  $('#showSignup').addEventListener('click', () => { authMode = 'signup'; updateAuthUI(); });
  $('#authForm').addEventListener('submit', handleAuthSubmit);
  $('#logoutButton').addEventListener('click', logout);
  $('#createClassAction')?.addEventListener('click', openCreateClass);
  $('#classForm').addEventListener('submit', createClass);
  $('#joinForm').addEventListener('submit', joinClass);
  $('#startScanButton').addEventListener('click', startScanner);
  $('#stopScanButton').addEventListener('click', stopScanner);
  $('#openManualStory').addEventListener('click', openManualStory);
  $('#manualStoryCode').addEventListener('keydown', e => { if (e.key === 'Enter') openManualStory(); });
  $('#downloadQR').addEventListener('click', downloadQR);
  $('#nextScene').addEventListener('click', nextScene);
  $('#previousScene').addEventListener('click', previousScene);
  $('#exitStory').addEventListener('click', exitStory);
  $('#narrateButton').addEventListener('click', toggleNarration);
  $('#ambientButton').addEventListener('click', () => toggleAmbient());
  $('#soundToggle').addEventListener('click', () => toggleAmbient());
  $('#pronounceButton').addEventListener('click', () => $('#pronounceRow').classList.toggle('hidden'));
  $('#pronounceGo').addEventListener('click', pronounceWord);
  $('#pronounceInput').addEventListener('keydown', e => { if (e.key === 'Enter') pronounceWord(); });
  $('#fontDown').addEventListener('click', () => { storyFontSize = Math.max(12, storyFontSize - 1); $('#sceneText').style.fontSize = `${storyFontSize}px`; });
  $('#fontUp').addEventListener('click', () => { storyFontSize = Math.min(19, storyFontSize + 1); $('#sceneText').style.fontSize = `${storyFontSize}px`; });
  $('#objectInfoClose').addEventListener('click', () => $('#objectInfo').classList.add('hidden'));
  $('#arButton').addEventListener('click', launchAR);
  $('#quizNext').addEventListener('click', handleQuizNext);
  $('#quizBack').addEventListener('click', handleQuizBack);
  $('#storySearch').addEventListener('input', renderExplore);

  document.addEventListener('click', async event => {
    const viewBtn = event.target.closest('[data-view]');
    if (viewBtn) { event.preventDefault(); showView(viewBtn.dataset.view); return; }
    const scanBtn = event.target.closest('[data-action="scan"]');
    if (scanBtn) { openScanner(); return; }
    const openBtn = event.target.closest('[data-open-story]');
    if (openBtn) { openStory(openBtn.dataset.openStory); return; }
    const qrBtn = event.target.closest('[data-qr-story]');
    if (qrBtn) { activeQrSlug = qrBtn.dataset.qrStory; openQR(activeQrSlug); return; }
    const option = event.target.closest('[data-quiz-option]');
    if (option) { selectQuizOption(Number(option.dataset.quizOption)); return; }
    const createAction = event.target.closest('#createClassAction, #createClassEmpty');
    if (createAction) { openCreateClass(); return; }
    const joinAction = event.target.closest('#joinClassAction, #joinClassEmpty');
    if (joinAction) { $('#joinCodeInput').value=''; showModal('joinModal'); return; }
    const viewRoster = event.target.closest('[data-view-roster]');
    if (viewRoster) { await renderTeacherRoster(viewRoster.dataset.viewRoster); return; }
    const copyCode = event.target.closest('[data-copy-code]');
    if (copyCode) {
      const code = copyCode.dataset.copyCode;
      try { await navigator.clipboard.writeText(code); toast(`Class code ${code} copied.`); }
      catch { toast(`Share this class code: ${code}`); }
      return;
    }
    const hideRoster = event.target.closest('[data-hide-roster]');
    if (hideRoster) { $('#teacherRosterArea').innerHTML = ''; return; }
    const studentDetail = event.target.closest('[data-student-detail]');
    if (studentDetail) { showStudentDetail(studentDetail.dataset.studentDetail, studentDetail.dataset.classCode); return; }
    const avatar = event.target.closest('[data-avatar]');
    if (avatar) {
      const choice = AVATARS.find(a => a.id === avatar.dataset.avatar);
      if (!choice || !avatarUnlocked(choice, currentUser)) { toast(`Unlock this avatar: ${choice?.note || 'complete an achievement first'}.`); return; }
      currentUser.avatar = choice.id; $('#topAvatar').textContent = choice.emoji; renderProfile(); return;
    }
    const palette = event.target.closest('[data-palette]');
    if (palette) { currentUser.palette = palette.dataset.palette; renderProfile(); return; }
    const quizDone = event.target.closest('#quizDoneButton');
    if (quizDone) { hideModal('quizModal'); showView('progress'); activeStory = null; closeStoryEngine(); return; }
    const close = event.target.closest('[data-close]');
    if (close) { const id = close.dataset.close; if (id === 'scanModal') stopScanner(); if (id === 'storyModal') exitStory(); else if (id === 'arViewerModal') closeARViewer(); else hideModal(id); return; }
  });
  document.addEventListener('click', async event => {
    if (event.target.closest('#saveProfileButton')) { await saveProfileEdits(); return; }
    if (event.target.closest('#privacyToggle')) { currentUser.scorePrivate = !currentUser.scorePrivate; renderProfile(); return; }
  });

  $$('.modal-layer').forEach(layer => layer.addEventListener('click', event => {
    if (event.target === layer) {
      if (layer.id === 'scanModal') stopScanner();
      if (layer.id === 'storyModal') exitStory();
      else if (layer.id === 'arViewerModal') closeARViewer();
      else hideModal(layer.id);
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (!$('#scanModal').classList.contains('hidden')) { stopScanner(); hideModal('scanModal'); }
      else if (!$('#storyModal').classList.contains('hidden')) exitStory();
      else { closeARViewer(); $$('.modal-layer').forEach(el => el.classList.add('hidden')); }
    }
  });
}

async function restoreLocalSession() {
  if (cloudMode) return;
  const session = safeParse(localStorage.getItem(STORAGE.session), null);
  if (!session?.uid) return;
  const profile = getLocalProfiles()[session.uid];
  if (profile) { currentUser = profile; enterApp(); }
}

function handleDeepLink() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('story');
  if (slug && getStory(slug)) pendingStoryFromUrl = slug;
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.info('Offline shell not installed', err));
  }
}

async function init() {
  handleDeepLink();
  bindEvents();
  updateAuthUI();
  await initializeCloud();
  updateAuthUI();
  if (!cloudMode) await restoreLocalSession();
  registerServiceWorker();
}

init();
