# illuminsight cookbook

This repository contains recipes that assist illuminsight's insight generation process for specific published media.

## Contribute

If you'd like to add a new recipe or improve an existing one:

1. Add or edit a JSON file in `recipes/`.
2. Update `recipes.json` if needed.
3. Run `node build`.
4. Submit your pull request.

You can of course also write and use recipes outside of the cookbook, but putting your recipes here gives it first-class support within the illuminsight app, in addition to allowing others to easily improve upon it.

### JSON Structures

#### `recipes/<id>.json`

See the [`Recipe`](https://github.com/xyfir/illuminsight/blob/master/types/illuminsight.d.ts) interface.

#### `recipes.json`

```ts
Array<{
  /**
   * File name without extension within `recipes/`.
   * @example "a-song-of-ice-and-fire"
   * @example "lord-of-the-rings"
   * @example "harry-potter"
   */
  id: string;
  /**
   * A string of possible book titles.
   * @example "Harry Potter and the Sorcerer's Stone Harry Potter and the Philosopher's Stone"
   * @example "A Game of Thrones A Dance with Dragons"
   * @example "The Fellowship of the Ring The Two Towers"
   */
  books?: string;
  /**
   * A string of possible series names.
   * @example "The Lord of the Rings LOTR"
   * @example "Harry Potter"
   * @example "A Song of Ice and Fire Game of Thrones"
   */
  series?: string;
  /**
   * A string of possible author names.
   * @example "George R. R. Martin GRRM George RR Martin"
   * @example "JK Rowling J. K. Rowling"
   * @example "JRR Tolkien J.R.R. Tolkien Christopher Tolkien"
   */
  authors?: string;
}>
```

Regarding `id` and its corresponding recipe file name:

- It should be as _short_ and _descriptive_ as possible.
- Use hyphens to separate spaces.
- Avoid acronyms as they're likely to lead to confusion and future conflicts.
- An id should _rarely_, if _ever_ change! Choose wisely.

There can be multiple entries in `recipes.json` that point to the same recipe.

The `books`, `series`, and `authors` properties are used for matching searches to a recipe. Each should be a single string containing as many possible _popular_ variations of matching book titles, series, or authors.

#### `recipes.min.json`

You shouldn't ever edit this file directly, but in case you need to read data from it:

```ts
Array<{
  i: string;  // id
  b?: string; // books
  s?: string; // series
  a?: string; // authors
}>
```
