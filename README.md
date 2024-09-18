# 01 - Development of a Book List Application

## Context

We are a multinational book publishing company. We want to offer our audience a way to view our catalog and save the books they are interested in to a reading list.

To do this, we want to develop a web application that allows users to view available books and create a reading list. Keep in mind that:

- We do not know if the framework we use now will be the final one, but we want to reuse as much code as possible.
- The application must be easy to use and visually appealing.
- 80% of our users come from desktop browsers.

## Requirements

### Functionality

1. **Viewing Available Books**: The application must display a list of available books that the user can review.

2. **Creating a Reading List**: The user must be able to create a reading list from the available books. The UI must clearly show which books are in the reading list and which are not. It should also be possible to move a book from the reading list to the available list.

3. **Filtering Books by Genre**: Users must be able to filter the list of available books by genre, and a counter should display the number of available books, the number of books in the reading list, and the number of available books in the selected genre.

4. **State Synchronization**: There must be global state synchronization that reflects the number of books in the reading list and the number of books still available. If a book is moved from the available list to the reading list, the count of both should be updated accordingly.

5. **Data Persistence**: The application must persist the reading list data in the browser's local storage. When the page is reloaded, the reading list should be maintained.

6. **Tab Synchronization**: If the user opens the application in two different tabs, changes made in one tab should be reflected in the other without using a backend.

7. **Deployment**: The application must be deployed on a free hosting service (Netlify, Vercel, Firebase, etc.) and must be accessible via a public URL. Indicate the URL in the README.

8. **Testing**: The application must have AT LEAST one test. Create the test you consider most important for your application.

## Code Tips

1. **Code Structure**: The code must be well-organized and easy to read.

2. **HTML Semantics**: The HTML must be semantic and accessible.

3. **Team Thinking**: Prepare your project thinking that any team member may have to work on it in the future (scripts in the `package.json`, minimal documentation in the README, comments in the code if necessary, etc.).

4. **Format Your Code**: Ensure your code is consistently formatted. You can use Prettier or any other tool you like.

5. **Production Ready**: Ensure your application is ready for production. Minimize the code, optimize images, etc.

## Additional Challenges

**Want to go further?** Here are some additional challenges you can try:

- Implement a search functionality in the list of available books.
- Add a new filter to filter books by the number of pages.
- Allow reordering of books in the reading list by priority.
- Make your design responsive.
