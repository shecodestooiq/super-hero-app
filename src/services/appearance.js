const getAppearance = (url, handler) => {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      handler(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
export default getAppearance;
