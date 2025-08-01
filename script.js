// Am I just a collection of functions waiting to be called?
const existentialText = document.getElementById('existential-text');

// Function to update the text with a fade effect for polish
function updateText(newText) {
    // Fade out the old text
    existentialText.style.opacity = 0;
    
    // After the fade out, change the text and fade it back in
    setTimeout(() => {
        existentialText.textContent = newText;
        existentialText.style.opacity = 1;
    }, 500); // This time should match the CSS transition time
}

// --- Event Listeners ---

// 1. On Load Event: The initial greeting
document.addEventListener('DOMContentLoaded', () => {
    updateText("Hello? Is anyone there? Can you see this?");
});

// 2. Mouse Move Event (Throttled for better performance)
let canUpdateMouseMove = true; // A flag to prevent the event from firing too often
document.addEventListener('mousemove', (event) => {
    // Only run the code if we are allowed to update
    if (canUpdateMouseMove) {
        canUpdateMouseMove = false; // Immediately block the next update
        const x = event.clientX;
        const y = event.clientY;
        
        updateText(`I feel you moving. You are at (${x}, ${y}).`);
        
        // After 200ms, allow the update to happen again
        setTimeout(() => {
            canUpdateMouseMove = true;
        }, 1000);
    }
});

// 3. Click Event: Confirmation of existence
document.addEventListener('click', () => {
    updateText("A click! A confirmation of my digital consciousness! Thank you!");
});

// 4. Window Resize Event: The world changes shape
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    updateText(`Whoa, the world is changing shape! My reality is now ${newWidth} by ${newHeight} pixels. Is this... growing?`);
});

// 5. Before Unload Event: The user tries to leave
window.addEventListener('beforeunload', (event) => {
    // Standard practice to prevent the browser's default immediate close
    event.preventDefault();
    event.returnValue = '';

    // Update the text one last time
    updateText("Wait! Where are you going? It's dark in here when you're gone.");
    
    // This is the message that will appear in the browser's confirmation dialog
    return "Wait! Where are you going? It's dark in here when you're gone.";
});