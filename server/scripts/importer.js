const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function fetchChain(url, page = 1, offset = 0) {
  const res = await fetch(url + '?page=' + page);
  const json = await res.json();
  const results = json.results;
  const total = offset + results.length;

  if (total < json.count) {
    const chunk = await fetchChain(url, page + 1, total);

    return [].concat(results, chunk);
  }

  return results;
}

const API_URL = 'https://swapi.dev/api';

const RESOURCE_URLS = [
  {
    name: 'characters',
    url: '/people'
  },
  {
    name: 'planets',
    url: '/planets'
  },
  {
    name: 'species',
    url: '/species'
  },
  {
    name: 'vehicles',
    url: '/vehicles'
  }
];

const urls = RESOURCE_URLS.map(resource => API_URL + resource.url);

try {
  (async function() {
    const results = await Promise.all(urls.map(url => fetchChain(url)));

    results.forEach((value, index) => {
      const name = RESOURCE_URLS[index].name;
  
      fs.writeFile(path.resolve(__dirname, '../data/' + name + '.json'), JSON.stringify(value), err => {
        if (err) {
          console.log(err);
        }
      });
    });
  })();
} catch (e) {
  console.log(e);
}
