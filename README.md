This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Neighborhood Map
FEND final project!

Neighborhood Map is an app that lets you find the best cafes in Wroclaw, Poland.
Here you can see their location on the map, search for particular ones and check their exact adress!

## Attribution
#### Google Maps API:
The app uses a Google Map, Markers and infoWindow.
You can add your own Google Maps API key here (MapContainer.js, line 35):
`componentDidMount() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=YOURAPIKEY&v=3&callback=initMap")
    window.initMap = this.initMap
  }`

#### Fourssquare API:
Cafes adress shown in InfoWindow is fetched from Foursquare.

## How to run
You can use this link:
https://stackblitz.com/edit/neighborhood-map?embed=1&file=README.md&view=preview

Or simply... 
- download the project 
- run command line
- change directory to the project directory
- `npm install`
- `npm run`
