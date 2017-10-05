import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Id:number;
  constructor(private _route: ActivatedRoute,
              private _router: Router) {
   }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.Id = id;
  }

  onBack():void{
     this._router.navigate(['/products']);
  }

}
