/* eslint-disable no-unused-vars */
function getData(name) {
  const { axios } = window;
  return axios
    .get(
      (`/search/${name}`),
    )
    .then((res) => {
      return res.data;
    });
}
