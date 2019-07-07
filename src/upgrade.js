const { writeFileSync, readFileSync } = require('fs');

const indexes = JSON.parse(readFileSync('src/recipes.json', 'utf8'));

for (let index of indexes) {
  // Read recipe
  const recipe = JSON.parse(
    readFileSync(`src/recipes/${index.id}.json`, 'utf8')
  );

  // Update recipe
  writeFileSync(
    `src/recipes/${index.id}.json`,
    JSON.stringify(recipe, null, 2)
  );
}

// Update recipe index
writeFileSync('src/recipes.json', JSON.stringify(indexes, null, 2));
