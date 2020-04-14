import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useReducer(Book[
//     { title: "name of the wind", author: "patrick rothfuss", id: 1 },
//     { title: "the final empire", author: "brandon sanderson", id: 2 },
//   ]);
//   const addBook = (title, author) => {
//     setBooks([...books, { title, author, id: uuidv4() }]);
//   };
//   const removeBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };

//   return (
//     <BookContext.Provider value={{ books, addBook, removeBook }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// };


// USING REDUCERS TO MINIMIZE ALL THE FUNCTION ABOVE

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{books, dispatch}} >
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
