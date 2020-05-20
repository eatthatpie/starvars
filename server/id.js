function urlToId(url) {
  const matches = url.match(/[0-9]+/gm);

  return matches[0]
}

function idToUrl(id, resource) {
  return 'http://swapi.dev/api/' + resource + '/' + id + '/'
}

module.exports = { urlToId, idToUrl };
