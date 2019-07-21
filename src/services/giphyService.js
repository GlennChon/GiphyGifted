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

export async function getGifs(searchValue) {
  try {
    let response = await fetch(searchUrl(searchValue));
    if (!response.ok) {
      throw response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err);
  }
}

export async function getTrendingGifs() {
  try {
    let response = await fetch(trendingUrl());
    if (!response.ok) {
      throw response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err);
  }
}

export async function getRandomGif() {
  try {
    let response = await fetch(randomUrl());
    if (!response.ok) {
      throw response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err);
  }
}
