import getDistanceFromLatLonInKm from "./FindDistance";

export default function getClosestCountry(allCountries, countryName) {
  let closestCountry = "";
  let closestDistance = "";
  let countryBorder = "";
  let selectedCountryLatLng = "";

  allCountries.map(async (country) => {
    const { alpha3Code, borders, latlng } = country;

    if (countryName === alpha3Code) {
      countryBorder = borders;
      selectedCountryLatLng = latlng;
    }
  });

  allCountries.map(async (country) => {
    const { alpha3Code, latlng, name } = country;
    if (
      countryBorder &&
      !countryBorder.includes(alpha3Code) &&
      alpha3Code !== countryName
    ) {
      const distance = getDistanceFromLatLonInKm(
        selectedCountryLatLng[0],
        selectedCountryLatLng[1],
        latlng[0],
        latlng[1],
        "K"
      );
      if (closestDistance === "" || distance < Number(closestDistance)) {
        closestDistance = distance;
        closestCountry = name;
      }
    }
  });
  return closestCountry;
}
