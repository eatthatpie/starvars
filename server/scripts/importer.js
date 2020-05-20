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

    const planetImages = {
      'Alderaan': 'https://vignette.wikia.nocookie.net/starwars/images/c/c0/Aldera_City.png/revision/latest?cb=20130202021748',
      'Bespin': 'https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550',
      'Cerea': 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/Cerea-FDCR.png/revision/latest?cb=20180501023912',
      'Chandrila': 'https://vignette.wikia.nocookie.net/starwars/images/9/9b/Chandrila_AoRCR.png/revision/latest?cb=20170222012047',
      'Concord Dawn': 'https://vignette.wikia.nocookie.net/star-wars-rebelianci/images/6/63/Concord_Dawn.jpeg/revision/latest/top-crop/width/360/height/450?cb=20170218155553&path-prefix=pl',
      'Naboo': 'https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C49%2C1560%2C780',
      'Tatooine': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Tatooinecity.jpg'
    }

    const vehicleImages = {
      'AT-AT': 'https://a.allegroimg.com/s1024/0c445f/0b3d8de94b49a7891fd757b35b14',
      'AT-ST': 'https://static4.redcart.pl/templates/images/thumb/10281/1500/1500/pl/0/templates/images/products/10281/8554945f49495bce1a1e5e69e6a1ae83.jpg',
      'Bantha-II cargo skiff': 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/Bantha-II_Cargo_Skiff_BG.png/revision/latest?cb=20161023211218',
      'Clone turbo tank': 'https://images-na.ssl-images-amazon.com/images/I/51DJSDTPCTL._AC_SX425_.jpg',
      'Imperial Speeder Bike': 'https://ae01.alicdn.com/kf/Hdf943dc21bdc405181526b28227465e4M/2017-NEW-321-452pcs-StarWars-Imperial-Storm-Scout-Speeder-Bike-Building-Block-75532-Brick-Toys.jpg',
      'Snowspeeder': 'https://f.allegroimg.com/s512/01e86b/4b69449a40c7b0cfec75bc9ff67f/REVELL-MODEL-DO-SKLEJANIA-STAR-WARS-SNOWSPEEDER',
      'Tribubble bongo': 'https://lumiere-a.akamaihd.net/v1/images/databank_gunganbongosubmarine_01_169_fc9286be.jpeg'
    }

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
      } else if (name === 'planets') {
        value = value.map(item => {
          if (planetImages.hasOwnProperty(item.name)) {
            return Object.assign({}, item, {
              imageUrl: planetImages[item.name]
            });
          }

          return item;
        });
      } else if (name === 'vehicles') {
        value = value.map(item => {
          if (vehicleImages.hasOwnProperty(item.name)) {
            return Object.assign({}, item, {
              imageUrl: vehicleImages[item.name]
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
