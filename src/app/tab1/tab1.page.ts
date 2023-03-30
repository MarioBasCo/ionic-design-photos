import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { NgFor } from '@angular/common';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, NgFor],
})
export class Tab1Page {
  data = [
    { 
      user: 'user1998',
      title: 'Nature',
      images: [
        {
          url: 'https://images.pexels.com/photos/5110959/pexels-photo-5110959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url: 'https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url: 'https://images.pexels.com/photos/219932/pexels-photo-219932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
      ]
    },
    { 
      user: 'Twinkle',
      title: 'Street Photography',
      images: [
        {
          url: 'https://images.pexels.com/photos/1655304/pexels-photo-1655304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url: 'https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url: 'https://images.pexels.com/photos/1529041/pexels-photo-1529041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11'
        },
        {
          url: 'https://images.pexels.com/photos/2224424/pexels-photo-2224424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          url: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
      ]
    }
  ];

  constructor() {}
}
