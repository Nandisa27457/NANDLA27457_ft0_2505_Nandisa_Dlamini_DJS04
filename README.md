# React Podcast App: Search, Sort, Filter, and Pagination

An advanced podcast browsing experience that allows users to dynamically search, sort, filter, and paginate a list of podcast shows. The goal is to create an intuitive interface that responds to user input in real time and maintains a consistent, seamless experience throughout navigation.


## Usage/Examples

After installing dependencies and starting the app, you’ll see a list of podcast genres displayed as cards. Use the dropdown menu at the top to filter the results.

1. View All Genres

By default, all genres and their podcast cards are displayed.

# Start the development server
```
npm start
```

Result:

Displays all genres (Personal Growth, History, Comedy, etc.).

Each card shows the genre title, description, and related podcast IDs.

2. Filter by a Specific Genre

Select a genre from the dropdown to display only cards that match that genre.


Example:
Choose History from the dropdown.
```
<select value="History">
  <option value="">All Genres</option>
  <option value="History">History</option>
</select>
```

Result:

Only the History genre card is shown.

The card includes podcast IDs like 5279, 9177, 6807....

3. Reset to All Genres

To return to the full list, select All Genres from the dropdown.
```
<select value="">
  <option value="">All Genres</option>
</select>
```

Result:

All genre cards are visible again.


## Features

- Search Bar
- Filtering dropdown from Newest, A-Z, Z-A
- Fullscreen mode
- Genre dropdown select


## Installation

Follow these steps to set up the project locally:

Clone the repository
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies
Make sure you have Node.js and npm (or Yarn) installed. Then run:
```
npm install
```

or with Yarn:
```
yarn install
```

Start the development server
```
npm start
```

The app will usually run on: http://localhost:3000

Open it in your browser to see the genre dropdown and cards in action.

Build for production
```
npm run build
```

This creates an optimized build in the build/ folder, ready for deployment.

🔧 Tips

If you run into dependency issues, delete node_modules and package-lock.json, then reinstall:
```
rm -rf node_modules package-lock.json
npm install
```
```
Use VS Code + ESLint + Prettier to keep your code clean and consistent.
```
If you’re deploying to Netlify, Vercel, or GitHub Pages, the npm run build command is required.
