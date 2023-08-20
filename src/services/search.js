import { BASE_URL } from "../urls";

export const handleInputChange = (
  event,
  setSearchResults,
  setSearchTerm,
  searchResults
) => {
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

  const filterSearch = (newSearchTerm) => {
    if (newSearchTerm && searchResults) {
      const matchingResults = searchResults.filter((result) =>
        result.name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setSearchResults(matchingResults);
    }
  };
  filterSearch(inputQuery);
};
