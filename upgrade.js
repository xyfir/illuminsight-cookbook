const { writeFileSync, readFileSync } = require('fs');

const indexes = JSON.parse(readFileSync('./recipes.json', 'utf8'));

for (let index of indexes) {
  // Read recipe
  const recipe = JSON.parse(readFileSync(`./recipes/${index.id}.json`, 'utf8'));

  // Multiple searches w/ name
  recipe.searches = [{ ...recipe.search, name: 'Google' }];
  delete recipe.search;

  // Multiple wikis w/ Wikipedia fallback
  recipe.wikis = [
    recipe.wiki,
    {
      name: 'Wikipedia',
      api: 'https://en.wikipedia.org/w/api.php',
      url: 'https://en.wikipedia.org/wiki/'
    }
  ];
  delete recipe.wiki;

  // Add id
  recipe.id = index.id;

  // Update file
  writeFileSync(`./recipes/${index.id}.json`, JSON.stringify(recipe, null, 2));
}
