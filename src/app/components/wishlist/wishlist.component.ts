import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { product } from 'src/app/core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule ,RouterLink , CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private _WishlistService:WishlistService , private _ToastrService:ToastrService,
    private _Renderer2:Renderer2 , private _CartService:CartService,
  ){}
  products:product[] = [];
  wishList:string[] = [];

  ngOnInit(): void {
      this._WishlistService.getWiwhList().subscribe({
        next:(response)=>{
          this.products = response.data;
          const newData = response.data.map((item:any)=> item._id); 
          this.wishList = newData;
        },
      });
  };
  

  addProduct(id:string , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element ,'disabled' );
        this._CartService.cartNum.next(response.numOfCartItems)
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element ,'disabled' );
      }
    })
  };


  addFav(prodId:string):void{
    this._WishlistService.addToWishList(prodId).subscribe({
      next:(response)=>{
        console.log( "add",response);
        this._WishlistService.wishListNum.next(response.data.length);
        this._ToastrService.success(response.message);
        this.wishList = response.data;
      }
    })
  };

  removeFav(prodId:string):void{
    this._WishlistService.removeWishList(prodId).subscribe({
      next:(response)=>{
        console.log("remove",response);
        // console.log(response.data.length);
        this._ToastrService.success(response.message);
        this.wishList = response.data;
        const newProductData = this.products.filter((item:any) => this.wishList.includes(item._id) )
        this.products = newProductData;
        let num = response.data.length;
        console.log(num);
        
        this._WishlistService.wishListNum.next(num);
        //?   ANOTHER SOLUTION
        // this._WishlistService.getWiwhList().subscribe({
        //   next:(response) =>{
        //     this.products = response.data;
        //   }
        // })
      }
    })
  };


}
