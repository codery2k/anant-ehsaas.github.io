import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  slides=[
    {
      image:"../../../assets/img/landing.jpg"
    },
    {
      image:"../../../assets/img/how-can-you-help.png"
    },
    {
      image:"../../../assets/img/photo-showcase.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
