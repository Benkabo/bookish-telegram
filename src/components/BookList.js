import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";
import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time <span className='empty-icon'><InsertEmoticonIcon style={{color: '#6d3d6d' }} /></span> </div>
  );
};

export default BookList;
