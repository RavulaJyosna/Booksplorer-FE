import React from "react";
import PropTypes from "prop-types";

// import the Book component
import Book from "./Book";

const BookList = (props) => {
  return (
    <div>{props.books.map(b => <Book key={b.id} title={b.title} author={b.author} price={b.price} count={b.count} category={b.category} imageUrls={b.imageUrls} username={b.user.username}/>)}</div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;