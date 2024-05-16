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

