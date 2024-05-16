// script.js

document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('.book-container');
    const tooltip = document.getElementById('tooltip');

    books.forEach(book => {
        book.addEventListener('mouseover', function(event) {
            const title = this.getAttribute('data-title');
            const summary = this.getAttribute('data-summary');
            const skills = this.getAttribute('data-skills');
            const language = this.getAttribute('data-language');

            tooltip.innerHTML = `
                <h3>${title}</h3>
                <p>${summary}</p>
                <p>${skills}</p>
                <p>${language}</p>
            `;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        book.addEventListener('mousemove', function(event) {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        book.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });
});

function openModal(pdfPath) {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');
    iframe.s// script.js

    document.addEventListener('DOMContentLoaded', function() {
        const books = document.querySelectorAll('.book-container');
        const tooltip = document.getElementById('tooltip');
    
        books.forEach(book => {
            book.addEventListener
    rc = pdfPath;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');
    iframe.src = '';
    modal.style.display = 'none';
}
