/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('portfolio');

// Create a new index in the collection.
db.getCollection('projects')
  .createIndex(
    {
        name: 'Yahoo',
        description: 'Red social',
        category: 'Contactos',
        year: 2013,
        langs: 'JavaScript',
        image: null
    }
  );
