const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector('#ingredients');
let liHtml = '';

ingredients.forEach((ingredient) => {
  liHtml += `<li class="item">${ingredient}</li>`;
});

ul.innerHTML = liHtml;