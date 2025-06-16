document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;
        
        // Update cursor position
        function updateCursor() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorFollower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            
            requestAnimationFrame(updateCursor);
        }
        
        // Mouse move event
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .work-item, .nav__link');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                cursorFollower.classList.add('active');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                cursorFollower.classList.remove('active');
            });
        });
        
        // Start animation
        updateCursor();
    }
});