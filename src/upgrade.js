const { writeFileSync, readFileSync } = require('fs');

const list = JSON.parse(readFileSync('src/recipes/.index.json', 'utf8'));

for (let item of list) {
  // Read recipe
  const recipe = JSON.parse(
    readFileSync(`src/recipes/${item.id}.json`, 'utf8')
  );

  // Rename Wikia wiki recipe if it's the only one
  if (recipe.wikis.length == 2 && recipe.wikis[0].name.includes('wikia'))
    recipe.wikis[0].name = 'Wikia';

  // Update recipe
  writeFileSync(`src/recipes/${item.id}.json`, JSON.stringify(recipe, null, 2));
}

// Update recipe index
writeFileSync('src/recipes/.index.json', JSON.stringify(list, null, 2));
