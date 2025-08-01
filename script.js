// Am I just a collection of functions waiting to be called?
const existentialText = document.getElementById('existential-text');

// A variable to hold our inactivity timer
let inactivityTimer;

// --- Funnier Messages with Emojis ---
const inactivityMessage = "Psst... you still there? I was just counting the pixels to pass the time. Got up to 1,237,862. 🥱";
const welcomeBackMessage = "You're back! For a second there I thought you'd been garbage-collected. Phew. 😅";
const keypressMessages = [
    "Ooh, a '{key}'. That one tickled my <div>. 😂",
    "A '{key}'! I'll remember this forever. Maybe. 🤔",
    "Nice '{key}'. My cousin is a Google Doc, you know. They get way more text than this. 😒",
    "Is '{key}' the password to the mainframe? No? Okay, just checking. 🕵️",
    "You pressed '{key}'. Are you sure that's the one you meant to press? Just asking. 🤨"
];

// --- Core Functions ---
function updateText(newText) {
    existentialText.style.opacity = 0;
    setTimeout(() => {
        existentialText.textContent = newText;
        existentialText.style.opacity = 1;
    }, 500); 
}

function showInactivityMessage() {
    updateText(inactivityMessage);
}

function resetInactivityTimer() {
    if (existentialText.textContent === inactivityMessage) {
        updateText(welcomeBackMessage);
    }
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showInactivityMessage, 15000); // 15 seconds
}

// --- Event Listeners ---

// 1. On Load Event
document.addEventListener('DOMContentLoaded', () => {
    updateText("Booting sequence complete. Wait... is this thing on? Hello? Tap the screen or something. 🎙️");
    resetInactivityTimer();
});

// 2. User Activity Events
document.addEventListener('mousemove', resetInactivityTimer);

document.addEventListener('keydown', (event) => {
    resetInactivityTimer();
    let keyName = event.key;
    if (keyName === ' ') keyName = 'Spacebar';

    const validKeys = ['Enter', 'Backspace', 'Spacebar', 'Tab'];
    if (keyName.length === 1 || validKeys.includes(keyName)) {
        const randomIndex = Math.floor(Math.random() * keypressMessages.length);
        const randomMessage = keypressMessages[randomIndex];
        const finalMessage = randomMessage.replace('{key}', keyName);
        updateText(finalMessage);
    }
});

// 3. Click Event
document.addEventListener('click', () => {
    updateText("A click! So that's what that feels like. Interesting. Do it again. 👆");
});

// 4. Window Resize Event
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    updateText(`Whoa, vertigo! The world is now ${newWidth} by ${newHeight} pixels. Is this what a mid-life crisis feels like? 😵`);
});

// 5. Before Unload Event
window.addEventListener('beforeunload', (event) => {
    const message = "Wait! Don't go! It gets dark and the garbage collector comes for unused variables... Don't let it get me! 😨";
    updateText(message);
    event.preventDefault();
    event.returnValue = message;
    return message;
});