import { Component } from "@angular/core";
import { IProduct } from "./Products";
import { ProductService } from "../../service/product.service";


@Component({
    selector: 'app-lad',
    templateUrl: './lad.component.html',
    styleUrls: ['./lad.component.css']
})
export class LadComponent{
    title:string;
    show: boolean =true;
    filter:string = 'cart';
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage:string;

    constructor(private _productsService: ProductService) {

    }

    toggleShow():void{
        this.show = !this.show;
    }

    _listFilter: string;

    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) :  this.products;
    }

    performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct)=>
        product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }
    onStarsClicked(msg: string):void{
        this.title = msg;
    }

    ngOnInit(){
        this._productsService.getProducts()
            .subscribe(products => {
                            this.products = products
                            this.filteredProducts = this.products;
                      },error => this.errorMessage = <string> error);
        this.title = 'Title for Lad component';
    }
}