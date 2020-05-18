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

    const peopleImages = await (async function() {
      const pipe = await fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json');
      const pipe2 = await pipe.json();
      
      let images = {}

      pipe2.forEach(item => {
        images[item.name] = item.image;
      });

      return images;
    })();

    results.forEach((value, index) => {
      const name = RESOURCE_URLS[index].name;

      if (name === 'characters') {
        value = value.map(item => {
          if (peopleImages.hasOwnProperty(item.name)) {
            return Object.assign({}, item, {
              imageUrl: peopleImages[item.name]
            });
          }

          return item;
        });
      }
  
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
