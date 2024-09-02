import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { Category } from 'src/app/core/interfaces/category';
import { product } from 'src/app/core/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CuttextPipe , CarouselModule , RouterLink , SearchPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _ProductService:ProductService , private _CartService:CartService , 
    private _ToastrService:ToastrService , private _Renderer2:Renderer2 ,
  private _WishlistService:WishlistService){}
products:product[] = [];
categories:Category[]= [];
wishList:string[] = [];
term:string = '';

  ngOnInit(): void {
      this._ProductService.getProducts().subscribe({
        next:(response)=>{
          console.log("products",response.data);
          this.products = response.data;
        },
      });


      this._ProductService.getCategories().subscribe({
        next:(response)=>{
          console.log("categories",response);
          this.categories = response.data;
        },
      });

      this._WishlistService.getWiwhList().subscribe({
        next:(response)=>{
          const newData = response.data.map((item:any)=> item._id); 
          this.wishList = newData;
        },
      });
  }

  addProduct(id:string , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element ,'disabled' );
        this._CartService.cartNum.next(response.numOfCartItems);
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element ,'disabled' );
      }
    })
  }

  addFav(prodId:string):void{
    this._WishlistService.addToWishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishList = response.data;
        this._WishlistService.wishListNum.next(this.wishList.length);
      }
    })
  }

  removeFav(prodId:string):void{
    this._WishlistService.removeWishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this.wishList = response.data;
        this._WishlistService.wishListNum.next(this.wishList.length);
      }
    })
  }


  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
  }


  mainSlidOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navText: ['', ''],
    items:1,
    nav: false,
  }
}
