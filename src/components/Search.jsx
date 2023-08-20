import React, { useState, useContext } from "react";
import { BASE_URL } from "../urls";
import Context from "../providers/dataProvider";
import { handleInputChange } from "../services/search";

function Search() {
  const { setCurrentData } = useContext(Context);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = (image, powers, connections, biography, appearance) => {
    setCurrentData((prevData) => ({
      ...prevData,
      image: image,
      powers: powers,
      connections: connections,
      biography: biography,
      appearance: appearance,
    }));
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search your superhero here..."
        class="search-input"
        value={searchTerm}
        onChange={(e) =>
          handleInputChange(e, setSearchResults, setSearchTerm, searchResults)
        }
      />
      {searchResults && searchResults.length > 0 ? (
        <>
          <div className="search-results">
            {searchResults.map((result) => (
              <div
                className="search-item"
                onClick={() =>
                  handleClick(
                    result.image.url,
                    result.powerstats,
                    result.connections,
                    result.biography,
                    result.appearance
                  )
                }
                key={result.id}
              >
                <div className="search-img">
                  <img src={result.image.url} alt="" />
                </div>
                <div>{result.name}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        searchTerm && <div className="no-results">No search results</div>
      )}
    </div>
  );
}

export default Search;
