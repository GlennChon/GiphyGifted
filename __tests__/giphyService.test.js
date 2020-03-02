import React from "react";
import {
  searchUrl,
  trendingUrl,
  randomUrl,
  getGifs,
  getTrendingGifs,
  getRandomGif
} from "../src/services/giphyService";

const searchTerm = "Test";
const offset = 0;

describe("GiphyService", () => {
  it("searchUrl generation", () => {
    const result =
      "https://api.giphy.com/v1/gifs/search?api_key=yEPB1jxWE2H8hLDxtGti3UudgWNSjUSh&q=" +
      searchTerm +
      "&limit=25&offset=" +
      offset +
      "&rating=G&lang=en";
    expect(searchUrl(searchTerm, offset)).toBe(result);
  });

  it("trendingUrl generation", () => {
    const result =
      "https://api.giphy.com/v1/gifs/trending?api_key=yEPB1jxWE2H8hLDxtGti3UudgWNSjUSh&limit=25&offset=" +
      offset +
      "&rating=G";
    expect(trendingUrl(offset)).toBe(result);
  });

  it("randomUrl generation", () => {
    const result =
      "https://api.giphy.com/v1/gifs/random?api_key=yEPB1jxWE2H8hLDxtGti3UudgWNSjUSh&tag=&rating=G";
    expect(randomUrl()).toBe(result);
  });

  // mock data and async call?
});
