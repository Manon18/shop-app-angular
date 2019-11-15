import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { defaultLocation } from 'src/app/core/interfaces/default-location';
import { locationProperties } from 'src/app/core/interfaces/location-properties';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  public currentLocation: defaultLocation;
  public mapProp: locationProperties;

  constructor() { }

  ngOnInit() {
    this.currentLocation = {
      lat: 49.840577,
      lng: 24.015570
    }

    this.mapProp = {
      center: new google.maps.LatLng(this.currentLocation),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);

    let marker = new google.maps.Marker({ position: this.mapProp.center });
    marker.setMap(this.map);

    let informationWindow = new google.maps.InfoWindow({
      content: 'You can find us here :)'
    })

    informationWindow.open(this.map, marker);
  }

}