document.addEventListener('DOMContentLoaded', () => {
    // Add cursor trail effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add typing effect to content boxes
    const contentBoxes = document.querySelectorAll('.content-box p');
    contentBoxes.forEach(box => {
        const text = box.textContent;
        box.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                box.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 0 15px var(--glow-color)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });
}); 