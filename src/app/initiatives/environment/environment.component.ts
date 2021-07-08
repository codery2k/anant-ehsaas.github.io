import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css'],
})
export class EnvironmentComponent implements OnInit {
  slides = [
    {
      image: 'assets/img/how-can-you-help.png',
    },
    {
      image: 'assets/img/photo-showcase.png',
    },
    {
      image: 'assets/img/landing.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
