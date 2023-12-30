// BookItem.js

import React from 'react';

const BookItem = ({ book }) => {
  const { title, authors, description, imageLinks, previewLink } = book.volumeInfo;

  return (
    <div className="book-card">
      <div className="book-image">
        {imageLinks && imageLinks.thumbnail && (
          <img src={imageLinks.thumbnail} alt={title} />
        )}
        <a href={previewLink} target="_blank" rel="noopener noreferrer" className="read-now-link">
          Read Now
        </a>
      </div>
      {/* <div className="book-details">
        <h3>{title}</h3>
        <p>Author(s): {authors && authors.join(', ')}</p>
        <p>Description: {description || 'Description not available'}</p>
      </div> */}
    </div>
  );
};

export default BookItem;
