import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';



// @Injectable
 export class AdminSharedComponent implements CanActivate {
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     throw new Error('Method not implemented.');
     // const url: string = state.url
   }
//   userLoggedIn: boolean = false;

  constructor(private router: Router) { }


  // ngOnInit() {
  // }

}
