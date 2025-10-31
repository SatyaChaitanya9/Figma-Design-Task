// Select all cards
const cards = document.querySelectorAll('.card');

// Step 1️ — Function to activate a specific card
function activateCard(card) {
  // Remove 'active' from all cards
  cards.forEach(c => {
    c.classList.remove('active');
    const radio = c.querySelector('.radio-button');
    radio.checked = false; // uncheck all radios
  });

  // Add 'active' to the clicked card
  card.classList.add('active');

  // Select its radio button
  const radio = card.querySelector('.radio-button');
  radio.checked = true;
}

// Step 2️ — Add event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    activateCard(card);
  });
});

// Step 3️ — When the page first loads, activate Card-1 by default
window.addEventListener('DOMContentLoaded', () => {
  const firstCard = document.getElementById('card1');
  activateCard(firstCard); // default selection
});



