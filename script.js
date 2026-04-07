function filterMenu(category) {
    const items = document.querySelectorAll('.menu-card');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}