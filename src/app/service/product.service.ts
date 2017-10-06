import { Injectable } from '@angular/core';
import { IProduct } from '../products/Products';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService{

    private _productUrl = '../assets/products/products.json';

    constructor(private _http: HttpClient){
    }

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
                .do(data => console.log('All:' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
