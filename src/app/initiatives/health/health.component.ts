import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

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
