# bookStoreJS

A small but mighty library app built as part of The Odin Project curriculum.  
This project was my chance to bring together **JavaScript constructors, arrays of objects, and DOM manipulation** into something that feels like a real app.

---

## About the Project

This app lets you:

- Add books with a **title, author, and read status**
- See all your books in a clean, responsive **table layout**
- Remove books from your library with one click
- Toggle between an “empty state” (add your first book) and the full library

It’s simple by design, but the focus was on **learning core JavaScript patterns**:

- Writing a constructor function for `Book` objects
- Managing an array (`myBooks`) as the source of truth
- Rendering DOM elements dynamically with `forEach`
- Using `crypto.randomUUID()` to generate unique IDs for each book
- Handling form input and validation

---

## How I Built It

This project started as a blank HTML/CSS/JS skeleton and grew piece by piece:

1. **UI Skeleton** → Set up form, table, and buttons in HTML
2. **State Management** → Created `myBooks` array and `Book` constructor
3. **DOM Updates** → Wrote `displayBooks()` to render rows dynamically
4. **User Actions** → Added event listeners for adding and deleting books
5. **UI State Toggle** → Created logic to hide/show table vs. "Add first book" button

And then came the real challenge…  
I spent almost **five hours straight** tracking down small but painful bugs. The logic for rendering books kept duplicating, and event listeners weren’t firing as expected. Fixing those tiny mistakes was frustrating — but the battle was worth it. Debugging like this taught me more about how JavaScript flows than reading a dozen tutorials ever could.

---

## Stretch Goals

I kept the app minimal to focus on fundamentals, but I plan to come back and add:

- **LocalStorage support** so books stay saved after refreshing the page
- A **“toggle read status”** feature to flip between “Read” and “Not read”

---

## About Me

I’m currently working through the **Full Stack JavaScript path** on The Odin Project.  
This is my second bigger project after building a dashboard UI, and it’s been a huge milestone in my learning.

- I started with just basic DOM manipulation.
- Now I’m managing **state**, **constructors**, and **event delegation**.
- Next up: **factory functions, classes, and beyond**

---

## Tech Stack

- **HTML5** – semantic structure
- **CSS3** – basic styling and layout
- **JavaScript (ES6)** – constructors, arrays, DOM, and events

---

## Acknowledgments

Thanks to The Odin Project and the open-source community for helping me build the foundation to grow as a developer.
