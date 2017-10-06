import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1){
      alert('Invalid product number!');
      return false;
    }
    return true;
  }

}
