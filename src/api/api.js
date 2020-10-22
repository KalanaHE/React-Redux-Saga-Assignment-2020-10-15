export const fetchApi = async (coordinates) => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return "error";
  }
};
