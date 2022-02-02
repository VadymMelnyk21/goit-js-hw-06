const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(function (categorie) {
    console.log('Category:', categorie.firstElementChild.textContent);
    console.log('Elements:', categorie.lastElementChild.children.length);
});