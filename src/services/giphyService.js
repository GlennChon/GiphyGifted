import giphy from "./config";

function searchUrl(searchValue) {
  return `${giphy.apiUrl}/${giphy.query[0]}?api_key=${
    giphy.apiKey
  }&q=${searchValue}&limit=${giphy.limit}&offset=${
    giphy.offset
  }&rating=G&lang=en`;
}

function trendingUrl() {
  return `${giphy.apiUrl}/${giphy.query[1]}?api_key=${giphy.apiKey}&limit=${
    giphy.limit
  }&offset=${giphy.offset}&rating=G`;
}

function randomUrl() {
  return `${giphy.apiUrl}/${giphy.query[2]}?api_key=${
    giphy.apiKey
  }&tag=&rating=G`;
}

export function getGifs(searchValue) {
  return fetch(searchUrl(searchValue)).then(response => response.json());
}

export function getTrendingGifs() {}

export function getRandomGif() {}
