import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';// Assuming Leaflet is used in your project
import * as L from 'leaflet';
import '@raruto/leaflet-elevation';

// Declare the global variables or functions from index.js


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private map: any;

  ngOnInit() {
    console.log((L.control as any).elevation);
    this.setMapView();
  }

  setMapView() {
    this.map = L.map("map").setView([40.3211, -104.7347], 22);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
    var elevation_options = {

      // Default chart colors: theme lime-theme, magenta-theme, ...
      theme: "lightblue-theme",
  
      // Chart container outside/inside map container
      detached: true,
  
      // if (detached), the elevation chart container
      elevationDiv: "#elevation-div",
  
      // if (!detached) autohide chart profile on chart mouseleave
      autohide: false,
  
      // if (!detached) initial state of chart profile control
      collapsed: false,
      
      // if (!detached) control position on one of map corners
      position: "topright",
      
      // Toggle close icon visibility
      closeBtn: true,
  
      // Autoupdate map center on chart mouseover.
      followMarker: true,
  
      // Autoupdate map bounds on chart update.
      autofitBounds: true,
  
      // Chart distance/elevation units.
      imperial: false,
  
      // [Lat, Long] vs [Long, Lat] points. (leaflet default: [Lat, Long])
      reverseCoords: false,
  
      // Acceleration chart profile: true || "summary" || "disabled" || false
      acceleration: false,
  
      // Slope chart profile: true || "summary" || "disabled" || false
      slope: false,
  
      // Speed chart profile: true || "summary" || "disabled" || false
      speed: false,
  
      // Altitude chart profile: true || "summary" || "disabled" || false
      altitude: true,
  
      // Display time info: true || "summary" || false
      time: true,
  
      // Display distance info: true || "summary" || false
      distance: true,
  
      // Summary track info style: "inline" || "multiline" || false
      summary: 'multiline',
  
      // Download link: "link" || false || "modal"
      downloadLink: 'link',
  
      // Toggle chart ruler filter
      ruler: true,
  
      // Toggle chart legend filter
      legend: true,
  
      // Toggle "leaflet-almostover" integration
      almostOver: true,
  
      // Toggle "leaflet-distance-markers" integration
      distanceMarkers: false,
  
      // Toggle "leaflet-edgescale" integration
      edgeScale: false,
      
      // Toggle "leaflet-hotline" integration
      hotline: true,
  
      // Display track datetimes: true || false
      timestamps: false,
  
      // Display track waypoints: true || "markers" || "dots" || false
      waypoints: true,
  
      // Toggle custom waypoint icons: true || { associative array of <sym> tags } || false
      wptIcons: {
        '': L.divIcon({
          className: 'elevation-waypoint-marker',
          html: '<i class="elevation-waypoint-icon"></i>',
          iconSize: [30, 30],
          iconAnchor: [8, 30],
        }),
      },
  
      // Toggle waypoint labels: true || "markers" || "dots" || false
      wptLabels: true,
  
      // Render chart profiles as Canvas or SVG Paths
      preferCanvas: true,
      srcFolder:"http://localhost:4200/assets/leaflet-elevation/src/",
  
    }
    // Instantiate elevation control.
    var controlElevation = (L.control as any).elevation(elevation_options).addTo(this.map);
  
    // Load track from url (allowed data types: "*.geojson", "*.gpx", "*.tcx")
    controlElevation.load("https://raruto.github.io/leaflet-elevation/examples/via-emilia.gpx");
  
   }
  
}
