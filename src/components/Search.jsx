import React, { useState } from "react";
import { BASE_URL } from "../urls";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const inputQuery = event.target.value;
    setSearchTerm(inputQuery);

    fetch(`${BASE_URL}/search/${inputQuery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Error fetching search results: " + response.statusText
          );
        }
      })
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
    filterSearch(inputQuery);
  };

  const filterSearch = (newSearchTerm) => {
    const matchingResults = searchResults.filter((result) =>
      result.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSearchResults(matchingResults);
  };

  // This will send a request for the clicked itema and update the while content
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search your superhero here..."
        class="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div
              className="search-item"
              onClick={(id) => handleClick(result.id)}
            >
              <div className="search-img">
                <img src={result.image.url} alt="" />
              </div>
              <div key={result.id}>{result.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
