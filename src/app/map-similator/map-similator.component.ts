import { Component } from '@angular/core';

@Component({
    selector: 'app-map-similator',
    templateUrl: './map-similator.component.html',
    styleUrls: ['./map-similator.component.scss']
})

export class MapSimilatorComponent {
    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [40.038463, 32.903356], // Pursaklar A Life Hastanesi
        zoom: 12
    });
   
     dir = MQ.routing.directions();
        dir.route({
            locations: [
                start,
                end
            ]
        });
     CustomRouteLayer = MQ.Routing.RouteLayer.extend({
            createStartMarker: (location: any) => {
                var custom_icon;
                var marker;
                custom_icon = L.icon({
                    iconUrl: 'img/red.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });
                marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
                return marker;
            },
            createEndMarker: (location: any) => {
                var custom_icon;
                var marker;
                custom_icon = L.icon({
                    iconUrl: 'img/blue.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });
                marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
                return marker;
            }
        });
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        }));
    }
    submitForm(event: any) {
        event.preventDefault();
        map.remove();
        var start = document.getElementById("start").value;
        var end = document.getElementById("destination").value;

        var runDirection(start: any, end: any);
        document.getElementById("form").reset();
    }
    const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
}
public runDirection(start: any, end: any) {
    var map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [35.791188, -78.636755],
        zoom: 12
    });
}
