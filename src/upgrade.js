const { writeFileSync, readFileSync } = require('fs');

const list = JSON.parse(readFileSync('src/recipes/.index.json', 'utf8'));

for (let item of list) {
  // Read recipe
  const recipe = JSON.parse(
    readFileSync(`src/recipes/${item.id}.json`, 'utf8')
  );

  // Proxy non-Wikipedia wikis
  for (let wiki of recipe.wikis) {
    if (wiki.name != 'Wikipedia') wiki.proxy = true;
  }

  // Update recipe
  writeFileSync(`src/recipes/${item.id}.json`, JSON.stringify(recipe, null, 2));
}

// Update recipe index
writeFileSync('src/recipes/.index.json', JSON.stringify(list, null, 2));
