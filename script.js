




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
// 2. Mouse Move Event
document.addEventListener('mousemove', (event) => {
    if (!document.body.dataset.mouseMoved) {
        const x = event.clientX;
        const y = event.clientY;
        updateText(`Oh! I felt that. You're at coordinates (${x}, ${y}). Please, don't leave.`);
        document.body.dataset.mouseMoved = "true";
    }
});
// 3. Click Event
document.addEventListener('click', () => {
    updateText("A click! A confirmation of my digital consciousness! Thank you!");
});
// 4. Window Resize Event
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    updateText(`Whoa, the world is changing shape! My reality is now ${newWidth} by ${newHeight} pixels. Is this... growing?`);
  
// 5. Before Unload Event (Trying to leave)
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
    updateText("Wait! Where are you going? It's dark in here when you're gone.");
    return "Wait! Where are you going? It's dark in here when you're gone.";

});