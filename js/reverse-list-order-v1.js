function assignDescendingOrder() {
  const cards = document.querySelectorAll('.blog-card');
  const total = cards.length;

  cards.forEach((card, index) => {
    // index starts at 0, order should be total - index
    card.style.order = total - index;
  });
}

document.addEventListener('DOMContentLoaded', assignDescendingOrder);