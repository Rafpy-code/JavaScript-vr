// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("portfolio");

// Create a new document in the collection.
db.getCollection("projects").insertOne({
  name: "Facebook",
  description: "Red social",
  category: "Contactos",
  year: 2023,
  langs: "JavaScript",
  image: null,
});
