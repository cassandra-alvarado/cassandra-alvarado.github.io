// script.js

// Get all modal elements
var modals = document.querySelectorAll('.modal');

// Get all book elements
var books = document.querySelectorAll('.book');

// Get all close elements
var closes = document.querySelectorAll('.close');

// Function to open the modal
function openModal(modalId) {
    document.querySelector(modalId).style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modals.forEach(modal => modal.style.display = 'none');
}

// Add event listeners to books to open corresponding modal
books.forEach(book => {
    book.addEventListener('click', function(event) {
        event.preventDefault();
        var modalId = this.getAttribute('href');
        openModal(modalId);
    });
});

// Add event listeners to close buttons to close the modal
closes.forEach(close => {
    close.addEventListener('click', closeModal);
});

// Add event listener to window to close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});
