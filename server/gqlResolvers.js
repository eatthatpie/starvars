const { getCharacters, getPlanets, getVehicles, getCharacterBy, getPlanetBy, getVehicleBy } = require('./db');
const { idToUrl } = require('./id');

const gqlResolvers = {
  characters: async function() {
    return getCharacters();
  },
  character: async function({ id }) {
    return getCharacterBy({ url: idToUrl(id, 'people') });
  },
  planets: async function() {
    return getPlanets();
  },
  planet: async function({ id }) {
    return getPlanetBy({ url: idToUrl(id, 'planets') });
  },
  vehicles: async function() {
    return getVehicles();
  },
  vehicle: async function({ id }) {
    return getVehicleBy({ url: idToUrl(id, 'vehicles') });
  },
};

module.exports = gqlResolvers;
