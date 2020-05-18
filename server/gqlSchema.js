const gqlSchema = `
  type Vehicle {
    id: String
    url: String
    name: String
    model: String
    characters: [Character]
  }

  type Species {
    id: String
    url: String
    name: String
  }

  type Planet {
    id: String
    url: String
    name: String
    characters: [Character]
    population: String
  }

  type Character {
    id: String
    url: String
    name: String
    planet: Planet
    species: [Species]
    vehicles: [Vehicle]
  }

  type Query {
    characters: [Character]
    character(id: String!): Character
    planets: [Planet]
    planet(id: String!): Planet
    vehicles: [Vehicle]
    vehicle(id: String!): Vehicle
  }
`;

module.exports = gqlSchema;
