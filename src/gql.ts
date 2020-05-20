import { useEffect, useState } from 'react';
import ILoadable from '@/interfaces/ILoadable';

const API_URL = process.env.NODE_ENV === 'local'
  ? 'http://localhost:4444'
  : 'https://gqlswapi.site/api'

function useQuery(query, variables?): ILoadable {
  const [response, setResponse] = useState({
    isEmpty: false,
    isLoading: true,
    data: null
  });

  useEffect(() => {
    makeQuery(query, variables)
    .then(r => {
      setResponse({ isEmpty: false, isLoading: false, data: r });
    })
    .catch(e => {
      setResponse({ isEmpty: true, isLoading: false, data: null });
    })
  }, [null]);

  return response;
}

function makeQuery(query, variables?) {
  return (
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
    .then(response => response.json())
    .then(response => response.data)
    .catch(function(e) {
      console.error(e)
    })
  )
}

const queryAllCharacters = `
  query {
    characters {
      id
      name
      imageUrl
    }
  }
`

const queryAllPlanets = `
  query {
    planets {
      id
      name
      imageUrl
    }
  }
`

const queryAllVehicles = `
  query {
    vehicles {
      id
      name
      imageUrl
    }
  }
`

const queryCharacter = `
  query queryCharacter($id: String!) {
    character(id: $id) {
      name
      imageUrl
      species {
        name
      }
      planet {
        name
        id
      }
      vehicles {
        name
        id
      }
    }
  }
`

const queryPlanet = `
  query queryPlanet($id: String!) {
    planet(id: $id) {
      name
      population
      imageUrl
      characters {
        name
        id
      }
    }
  }
`

const queryVehicle = `
  query queryVehicle($id: String!) {
    vehicle(id: $id) {
      name
      model
      imageUrl
      characters {
        name
        id
      }
    }
  }
`

export {
  useQuery,
  queryAllCharacters,
  queryAllPlanets,
  queryAllVehicles,
  queryCharacter,
  queryPlanet,
  queryVehicle
}
