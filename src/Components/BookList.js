import React from 'react';

const BookList = ({ books }) => {
    if (books.length === 0) {
        return <p>No books found. Try searching for something else!</p>;
    }

    return (
        <div className="book-list">
            {books.map((book) => (
                <div className="book-card" key={book.key}>
                    <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt={book.title}
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    <h3>{book.title}</h3>
                    <p>Author: {book.author_name?.join(', ') || 'N/A'}</p>
                    <p>First Published: {book.first_publish_year || 'Unknown'}</p>
                    <a
                        href={`https://openlibrary.org${book.key}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More Info
                    </a>
                </div>
            ))}
        </div>
    );
};

export default BookList;
