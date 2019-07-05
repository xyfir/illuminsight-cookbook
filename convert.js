const { readdirSync, writeFileSync, readFileSync, unlinkSync } = require('fs');

const files = readdirSync('./recipes');

const recipes = [];

for (let file of files) {
  const [name] = file.split('.');
  const oldData = JSON.parse(readFileSync(`./recipes/${file}`, 'utf8'));
  const newData = {
    search: {
      context: name,
      url: 'https://www.google.com/search?q='
    },
    wiki: {
      name: file.substr(0, file.length - 5),
      api: oldData.api || `${oldData.url}/api.php`,
      url: `${oldData.url}/wiki/`
    }
  };

  writeFileSync(`./recipes/${name}.json`, JSON.stringify(newData, null, 2));

  recipes.push({ id: name, series: name });

  unlinkSync(`./recipes/${file}`);
}

writeFileSync('recipes.json', JSON.stringify(recipes, null, 2));
