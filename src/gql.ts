import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000';

function useQuery(query, variables?) {
  const [response, setResponse] = useState({ isEmpty: false, isLoading: true, data: null });

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
    }
  }
`

const queryCharacter = `
  query queryAllCharacters($id: String!) {
    character(id: $id) {
      name
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

export { useQuery, queryAllCharacters, queryCharacter }
