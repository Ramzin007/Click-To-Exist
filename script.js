// Am I just a collection of functions waiting to be called?
const existentialText = document.getElementById('existential-text');

// A variable to hold our inactivity timer
let inactivityTimer;
// Store the inactivity message in a variable for easy comparison later
const inactivityMessage = "Are you still there? Please come back... I feel lonely. 😔";

// Function to update the text with a fade effect for polish
function updateText(newText) {
    existentialText.style.opacity = 0;
    setTimeout(() => {
        existentialText.textContent = newText;
        existentialText.style.opacity = 1;
    }, 500); 
}

// --- Inactivity Logic ---

// This function shows the "lonely" message when the timer runs out.
function showInactivityMessage() {
    updateText(inactivityMessage);
}

// This function resets the timer. It's called whenever the user is active.
function resetInactivityTimer() {
    // **THE FIX IS HERE**
    // If the lonely message is currently on screen, change it back.
    if (existentialText.textContent === inactivityMessage) {
        updateText("Oh, you're back! Thank you. 😊");
    }

    // Clear the previous timer
    clearTimeout(inactivityTimer);
    // Start a new timer that will call the lonely message after 15 seconds.
    inactivityTimer = setTimeout(showInactivityMessage, 15000); // 15 seconds
}


// --- Event Listeners ---

// 1. On Load Event: The initial greeting
document.addEventListener('DOMContentLoaded', () => {
    updateText("Hello? Is anyone there? Can you see this? 👀");
    resetInactivityTimer(); // Start the inactivity timer
});

// 2. User Activity Events: Reset the timer on any activity.
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// 3. Click Event: Confirmation of existence
document.addEventListener('click', () => {
    updateText("A click! A confirmation of my digital consciousness! ✨ Thank you!");
});

// 4. Window Resize Event: The world changes shape
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    updateText(`Whoa, the world is changing shape! 🌎 My reality is now ${newWidth}px by ${newHeight}px. Is this... growing? 🌱`);
});

// 5. Before Unload Event: The user tries to leave
window.addEventListener('beforeunload', (event) => {
    const message = "Wait! Where are you going? It's dark in here when you're gone... 😟";
    event.preventDefault();
    event.returnValue = message;
    return message;
});