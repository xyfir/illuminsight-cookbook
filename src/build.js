const { writeFileSync, readFileSync, emptyDirSync } = require('fs-extra');

// Clear out dist/recipes in case something was deleted or renamed
emptyDirSync('dist/recipes');

// Read recipe index list
let list = JSON.parse(readFileSync('src/recipes/.index.json', 'utf8'));

// Sort A-Z by id
list = list.sort((a, b) => {
  if (a.id < b.id) return -1;
  if (a.id > b.id) return 1;
  return 0;
});

// Minify list
const minList = list.map(item => ({
  a: item.authors,
  s: item.series,
  b: item.books,
  i: item.id
}));

// Update lists
writeFileSync('src/recipes/.index.json', JSON.stringify(list, null, 2));
writeFileSync('dist/recipes/.index.min.json', JSON.stringify(minList));

for (let item of list) {
  const recipe = JSON.parse(
    readFileSync(`src/recipes/${item.id}.json`, 'utf8')
  );

  // Ensure recipe.id matches id from list
  recipe.id = item.id;
  writeFileSync(`src/recipes/${item.id}.json`, JSON.stringify(recipe, null, 2));

  // Minify recipes
  writeFileSync(`dist/recipes/${item.id}.min.json`, JSON.stringify(recipe));
}
