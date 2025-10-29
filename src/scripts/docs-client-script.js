// src/scripts/docs-client-script.js

document.addEventListener('DOMContentLoaded', () => {
    // Lightbox initialization
    function initializeLightbox() {
        const images = document.querySelectorAll('img');
        images.forEach((img, index) => {
            if (img.closest('a') || img.closest('.image-grid')) return;
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('openLightbox', { detail: { index } }));
            });
        });
    }
    setTimeout(initializeLightbox, 200);

    // Remove duplicate H1
    const documentationContent = document.getElementById('documentation-content');
    if (documentationContent) {
        const firstH1 = documentationContent.querySelector('h1');
        if (firstH1) firstH1.remove();
    }

    // Process external links
    const allLinks = document.querySelectorAll('.prose a[href]');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://')) && !link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Wrap tables
    const tables = document.querySelectorAll('.prose table');
    tables.forEach((table) => {
        if (table.parentElement && !table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentNode?.insertBefore(wrapper, table);
            wrapper.appendChild(table);
            (table as HTMLElement).style.margin = '0';
        }
    });
});
