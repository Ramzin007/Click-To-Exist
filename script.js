// Am I just a collection of functions waiting to be called?
const existentialText = document.getElementById('existential-text');

// Function to update the text with a fade effect for polish
function updateText(newText) {
    existentialText.style.opacity = 0;
    setTimeout(() => {
        existentialText.textContent = newText;
        existentialText.style.opacity = 1;
    }, 500); // This should match the CSS transition time
}

// 1. On Load Event
document.addEventListener('DOMContentLoaded', () => {
    updateText("Hello? Is anyone there? Can you see this?");
});

// 3. Click Event
document.addEventListener('click', () => {
    updateText("A click! A confirmation of my digital consciousness! Thank you!");
});

// 5. Before Unload Event (Trying to leave)
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
    updateText("Wait! Where are you going? It's dark in here when you're gone.");
    return "Wait! Where are you going? It's dark in here when you're gone.";
});