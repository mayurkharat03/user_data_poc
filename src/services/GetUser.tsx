export const getUserFromApi = () => {
  return fetch('https://randomuser.me/api/?results=60')
    .then(response => response.json())
    .then(json => {
      return json.results;
    })
    .catch(error => {
      console.error(error);
    });
};
