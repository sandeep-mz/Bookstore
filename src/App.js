// App.js

import React, { useState, useEffect } from 'react';
import BookList from './Components/BookList'; // Import BookList component
import NavBar from './Components/NavBar'; // Import NavBar component


const App = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    // Fetch initial book data
    const fetchBooks = async () => {
      try {
        const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const data1 = await response1.json();
        const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const data2 = await response2.json();
        setBooksData([...data1.items, ...data2.items]);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooksData(data.items || []);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} />
      <main>
        {/* Display the BookList component with the fetched books */}
        <BookList books={booksData} />
      </main>

      {/* Footer or other content */}
    </div>
  );
};

export default App;
