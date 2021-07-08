import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advocacy',
  templateUrl: './advocacy.component.html',
  styleUrls: ['./advocacy.component.css']
})
export class AdvocacyComponent implements OnInit {

  slides = [
    {
      image: 'assets/img/photo-showcase.png',
    },
    {
      image: 'assets/img/landing.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
