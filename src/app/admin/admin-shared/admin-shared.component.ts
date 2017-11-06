import { Component, OnInit, Injectable, CanActivate, ActivatedRouteSnapshot } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Injectable
export class AdminSharedComponent implements CanActivate {
  userLoggedIn: boolean = false;

  constructor(private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot), state: RouterStateSnapshot):boolan{]
    let url:string =state.url}

  ngOnInit() {
  }

}
