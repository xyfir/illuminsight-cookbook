const { writeFileSync, readFileSync } = require('fs');

const indexes = JSON.parse(readFileSync('./recipes.json', 'utf8'));

for (let index of indexes) {
  // Remove auto-generated authors/series/books
  if (index.authors == index.id) delete index.authors;
  if (index.series == index.id) delete index.series;
  if (index.books == index.id) delete index.books;

  // Read recipe
  const recipe = JSON.parse(readFileSync(`./recipes/${index.id}.json`, 'utf8'));

  // Update recipe
  writeFileSync(`./recipes/${index.id}.json`, JSON.stringify(recipe, null, 2));
}

writeFileSync('./recipes.json', JSON.stringify(indexes, null, 2));
