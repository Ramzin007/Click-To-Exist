// 2. Mouse Move Event
document.addEventListener('mousemove', (event) => {
    if (!document.body.dataset.mouseMoved) {
        const x = event.clientX;
        const y = event.clientY;
        updateText(`Oh! I felt that. You're at coordinates (${x}, ${y}). Please, don't leave.`);
        document.body.dataset.mouseMoved = "true";
    }
});

// 4. Window Resize Event
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    updateText(`Whoa, the world is changing shape! My reality is now ${newWidth} by ${newHeight} pixels. Is this... growing?`);
});