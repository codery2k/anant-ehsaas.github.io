import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  routes: Routes = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.populateRoutes();
  }

  populateRoutes() {
    this.router.config
      .find((r) => r.path === 'about-us')
      .children.forEach((route) => {
        this.routes.push(route);
        // console.log(route);
      });
  }
}
