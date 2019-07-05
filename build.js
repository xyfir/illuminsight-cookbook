const { writeFileSync, readFileSync } = require('fs');

const recipes = JSON.parse(readFileSync('./recipes.json', 'utf8'));
const min = recipes.map(recipe => ({
  a: recipe.authors,
  s: recipe.series,
  b: recipe.books,
  i: recipe.id
}));
writeFileSync('./recipes.min.json', JSON.stringify(min));
