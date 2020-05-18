const characters = require('./data/characters.json');
const planets = require('./data/planets.json');
const species = require('./data/species.json');
const vehicles = require('./data/vehicles.json');
const { urlToId } = require('./id');

characters.sort((a, b) => a.name > b.name ? 1 : -1);
planets.sort((a, b) => a.name > b.name ? 1 : -1);
species.sort((a, b) => a.name > b.name ? 1 : -1);
vehicles.sort((a, b) => a.name > b.name ? 1 : -1);

function getCharacters(params) {
  let stack = characters;

  if (params && params.homeworld) {
    stack = stack.filter(item => item.homeworld === params.homeworld)
  }

  if (params && params.vehicles) {
    stack = stack.filter(item => {
      return params.vehicles.filter(vurl => item.vehicles.indexOf(vurl) > -1).length > 0
    })
  }

  return stack.map(match => ({
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    imageUrl: () => match.imageUrl,
    planet: () => getPlanetBy({ url: match.homeworld }),
    species: () => getSpecies({ urls: match.species }),
    vehicles: () => getVehicles({ urls: match.vehicles })
  }));
}

function getCharacterBy({ url }) {
  const match = characters.find(item => item.url === url);

  if (!match) {
    return null;
  }

  return {
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    imageUrl: () => match.imageUrl,
    planet: () => getPlanetBy({ url: match.homeworld }),
    species: () => getSpecies({ urls: match.species }),
    vehicles: () => getVehicles({ urls: match.vehicles })
  };
}

function getPlanets() {
  return planets.map(match => ({
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    characters: () => getCharacters({ homeworld: match.url }),
    population: () => match.population
  }));
}

function getPlanetBy({ url }) {
  const match = planets.find(item => item.url === url);

  if (!match) {
    return null;
  }

  return {
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    characters: () => getCharacters({ homeworld: url }),
    population: () => match.population
  };
}

function getSpecies({ urls }) {
  const matches = species.filter(item => urls.indexOf(item.url) > -1);

  return matches.map(match => ({
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name
  }));
}

function getVehicles(params) {
  let stack = vehicles;

  if (params && params.urls) {
    stack = stack.filter(item => params.urls.indexOf(item.url) > -1);
  }

  return stack.map(match => ({
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    model: () => match.model,
    characters: () => getCharacters({ vehicles: [match.url] }),
  }));
}

function getVehicleBy({ url }) {
  const match = vehicles.find(item => item.url === url);

  if (!match) {
    return null;
  }

  return {
    id: () => urlToId(match.url),
    url: () => match.url,
    name: () => match.name,
    model: () => match.model,
    characters: () => getCharacters({ vehicles: [match.url] }),
  };
}

module.exports = { getCharacters, getPlanets, getVehicles, getCharacterBy, getPlanetBy, getVehicleBy };
