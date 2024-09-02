import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router , private _CartService:CartService , private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
  ){}

  @ViewChild('navBar')  navElement!:ElementRef;

  @HostListener('window:scroll')
  onScroll():void{
    if(scrollY > 400) {
      this._Renderer2.addClass(this.navElement.nativeElement , 'py-3');
      this._Renderer2.addClass(this.navElement.nativeElement , 'shadow');
    }else{
      this._Renderer2.removeClass(this.navElement.nativeElement , 'py-3');
      this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow');
    }
    
 }

  cartNum:number = 0;
  wishListNum:number = 0;

ngOnInit(): void {
    this._CartService.cartNum.subscribe({
      next:(data)=>{
        // console.log(data);
        this.cartNum = data;
      }
    });

    this._CartService.getCartUser().subscribe({
      next:(response)=>{
        this.cartNum = response.numOfCartItems;
      }
    })

    this._WishlistService.wishListNum.subscribe({
      next:(data)=>{
        // console.log("nav ",data); 
        this.wishListNum = data;
      }
    })

    this._WishlistService.getWiwhList().subscribe({
      next:(response)=>{
        this.wishListNum = response.data.length;
      }
    })
};

  

  signOut():void{
    localStorage.removeItem("eToken");
    this._Router.navigate(['/login']);
  }
}
