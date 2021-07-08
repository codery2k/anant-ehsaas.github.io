import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss'],
})
export class InitiativesComponent implements OnInit {
  routes: Routes = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.populateRoutes();
  }

  populateRoutes() {
    this.router.config
      .find((r) => r.path === 'initiatives')
      .children.forEach((route) => {
        if (route.data) this.routes.push(route);
        // console.log(route);
      });
  }
}
