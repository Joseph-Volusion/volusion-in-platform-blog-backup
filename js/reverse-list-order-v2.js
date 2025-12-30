function assignDescendingOrder() {
  const list = document.querySelector('.blog-list');
  if (!list) return;

  const cards = document.querySelectorAll('.blog-card');
  const total = cards.length;

  cards.forEach((card, index) => {
    // index starts at 0, order should be total - index
    card.style.order = total - index;
  });

    list.style.visibility = 'visible';
}

assignDescendingOrder();

