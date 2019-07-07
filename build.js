const { writeFileSync, readFileSync } = require('fs');

let recipes = JSON.parse(readFileSync('./recipes.json', 'utf8'));

// Sort A-Z by id
recipes = recipes.sort((a, b) => {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
});

// Minify
const min = recipes.map(recipe => ({
  a: recipe.authors,
  s: recipe.series,
  b: recipe.books,
  i: recipe.id
}));

writeFileSync('./recipes.json', JSON.stringify(recipes, null, 2));
writeFileSync('./recipes.min.json', JSON.stringify(min));
