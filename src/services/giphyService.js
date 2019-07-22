import giphy from "./config";

function searchUrl(searchValue, offset) {
  return `${giphy.apiUrl}/${giphy.query[0]}?api_key=${
    giphy.apiKey
  }&q=${searchValue}&limit=${giphy.limit}&offset=${offset}&rating=G&lang=en`;
}

function trendingUrl(offset) {
  return `${giphy.apiUrl}/${giphy.query[1]}?api_key=${giphy.apiKey}&limit=${
    giphy.limit
  }&offset=${offset}&rating=G`;
}

function randomUrl() {
  return `${giphy.apiUrl}/${giphy.query[2]}?api_key=${
    giphy.apiKey
  }&tag=&rating=G`;
}

export async function getGifs(searchValue, offset) {
  try {
    let response = await fetch(searchUrl(searchValue, offset));
    if (!response.ok) {
      throw response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err);
  }
}

export async function getTrendingGifs(offset) {
  try {
    let response = await fetch(trendingUrl(offset));
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
