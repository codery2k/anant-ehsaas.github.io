import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  slides = [
    {
      image: 'assets/img/how-can-you-help.png',
    },
    {
      image: 'assets/img/landing.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
