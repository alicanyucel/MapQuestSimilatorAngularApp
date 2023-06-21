import { Component } from '@angular/core';

@Component({
  selector: 'app-map-similator',
  templateUrl: './map-similator.component.html',
  styleUrls: ['./map-similator.component.scss']
})
export class MapSimilatorComponent {
 map = L.map('map', {
  layers: MQ.mapLayer(),
  center: [35.791188, -78.636755],
  zoom: 12
});
  

  public runDirection(start:any, end:any) {
      
      // recreating new map layer after removal
     var map = L.map('map', {
          layers: MQ.mapLayer(),
          center: [35.791188, -78.636755],
          zoom: 12
      });
      
      var dir = MQ.routing.directions();

      dir.route({
          locations: [
              start,
              end
          ]
      });
  

    var  CustomRouteLayer = MQ.Routing.RouteLayer.extend({
          createStartMarker: (location:any) => {
              var custom_icon;
              var marker;

              custom_icon = L.icon({
                  iconUrl: 'img/red.png',
                  iconSize: [20, 29],
                  iconAnchor: [10, 29],
                  popupAnchor: [0, -29]
              });

              marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

              return marker;
          },

          createEndMarker: (location:any) => {
              var custom_icon;
              var marker;

              custom_icon = L.icon({
                  iconUrl: 'img/blue.png',
                  iconSize: [20, 29],
                  iconAnchor: [10, 29],
                  popupAnchor: [0, -29]
              });

              marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

              return marker;
          }
      });
      
      map.addLayer(new CustomRouteLayer({
          directions: dir,
          fitBounds: true
      })); 
  }


// function that runs when form submitted
submitForm(event:any) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
var start = document.getElementById("start").value;
var end = document.getElementById("destination").value;

var runDirection(start:any, end:any);
document.getElementById("form").reset();
}
const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
}
