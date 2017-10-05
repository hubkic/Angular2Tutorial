import { Injectable } from "@angular/core";
import { IProduct } from "../lad/Products";

@Injectable()
export class ProductService{
    constructor(){

    }

    getProducts():IProduct[]{
        return [{
            "productId":1,
            "productName": "Prod Name-1",
            "price": 34.34,
            "date": "March 18, 2016",
            "stars" :4
        },
        {
            "productId":2,
            "productName": "Prod Name-2",
            "price": 3,
            "date": "April 03, 2018",
            "stars":3
        }];
    }
}