# GIFt'ed - GiphySearch

##--------------------------------------------------

Search gifs using the Giphy API endpoints.<br>
Users can choose to search between their choice of search terms,
see the latest trending gifs, or find a gif at random.<br><br>

##--------------------------------------------------

# Basic Available Scripts & Setup

In the project directory, you can run:<br>

### `npm i`

installs node modules if needed<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`

Launches the test runner using Jest framework.<br>

### `npm test -- -u`

Launches Jest tests but updates the snapshots. Use this if for some reason
the snapshots are not available or need to be updated.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the
best performance.
`
##--------------------------------------------------

## Framework

App: React.js
Testing: Jest

##Features

Search: Use term(s) to search Giphy API using search endpoint<br>
Trending: Get trending gifs using Giphy API trending endpoint<br>
Random: Get a single random gif using Giphy API random endpoint<br>
Play/Pause: Can play and pause gifs<br>
Pagination: Can page through gifs using initial limit as offset<br>

##--------------------------------------------------

## Components Overview

### gif.jsx

Description:<br>
gif.jsx returns a React Fragment of <GifPlayer> a functional library that allows
pausing and playing of gifs.<br>

Initially I had attempted to write my own but due to time concerns I opted to
find an already available library.<br><br>

### singleGif.jsx

Description:<br>
singleGif.jsx returns a React Fragment of a single autoplaying gif using the gif.jsx
components with a fixed height for the random API endpoint.<br><br>

### gifList.jsx

Description:<br>
gifList.jsx maps each of the json array object items received from giphyService
to the the gif.jsx component. The iAautoPlay flag is set to false in order to
increase speed of first view.<br>

The resulting React Fragment is rendered with css flex display to show a grid
populated in wrapping row format.<br><br>

### searchBar.jsx

Description:<br>
searchBar returns a search input and button which simply handle the change of the
search value and handleSearchClick.<br><br>

##--------------------------------------------------

## Services Overview

### giphyService.js

Located: ./src/services<br>

Description:<br>
Pulls API base url, APIkey, query types, and gif request limit from config.js folder.
Ideally we'd use an environment variable to store the API key but I'm not too worried about
a free account on Giphy.<br>

giphyService exports async functions for each of the query types {search, trending, random}
and takes a value and offset if required. It then creates the appropriate api endpoint with
the info passed in and returns the response as an error or json object.<br><br>

##--------------------------------------------------

# Extra Works

This whole project was a learning project for me as I've just started teaching myself
React, Node.js, and MongoDB. (about 1 month progress on tutorials). Unfortunately,
I did not have the time to implemet extra features as most of that time went to learning
as I was doing.<br><br>

##--------------------------------------------------

## Ideas for the future

Buttons:<br>
I'd like to refactor out the btns into their own separate components so that they can be
used on other pages if I were to pursue creating other pages for this app.<br><br>

Pagination:<br>
I would have also liked to have refactored out the pagination to it's own component as well
for the same reasons as the buttons.<br><br>

Play/Pause:<br>
I didn't get a chance to attempt playing and pausing all the gifs on the page at once with a
slider. I would have liked to see that on the page.<br><br>

Style:<br>
Just more time spent with spacing, color-scheme, and font-styles. I kind of just evolved it
inbetween writing code to give myself little code breaks instead of planning the visual design aspects out first.

##--------------------------------------------------

## Dependencies

"dependencies":
{
"react": "^16.8.6",
"react-dom": "^16.8.6",
"react-gif-player": "^0.4.2",
"react-scripts": "3.0.1"
},
"devDependencies":
{
"@babel/preset-react": "^7.0.0",
"enzyme": "^3.10.0",
"enzyme-adapter-react-16": "^1.14.0",
"enzyme-to-json": "^3.3.5",
"identity-obj-proxy": "^3.0.0",
"react-test-renderer": "^16.8.6"
},
