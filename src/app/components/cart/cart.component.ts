import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   constructor(private _CartService:CartService , private _Renderer2:Renderer2){}

  cartDetailes:any = null;

  ngOnInit(): void {
      this._CartService.getCartUser().subscribe({
        next:(response)=>{
          console.log(response.data);
          this.cartDetailes = response.data;
        }
      })
  }


  removeItem(id:string , element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        // console.log(response.data);
        this.cartDetailes = response.data;
        this._Renderer2.removeAttribute(element , 'disabled');
        this._CartService.cartNum.next(response.numOfCartItems);
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }
    })
  }


  changeCount(count:number , id:string , elm1:HTMLButtonElement , elm2:HTMLButtonElement):void{
    this._Renderer2.setAttribute(elm1 , 'disabled' , 'true');
    this._Renderer2.setAttribute(elm2 , 'disabled' , 'true');
      this._CartService.updateCartCount(id,count).subscribe({
        next:(response)=>{
          // console.log(response.data);
          this.cartDetailes = response.data;
          this._Renderer2.removeAttribute(elm1 , 'disabled');
          this._Renderer2.removeAttribute(elm2 , 'disabled');
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(elm1 , 'disabled');
          this._Renderer2.removeAttribute(elm2 , 'disabled');
        }
       });
    
  
    
  }


  clear(element:HTMLButtonElement):void{
    this._Renderer2.setAttribute(element , 'disabled' , 'true');
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        // console.log(response);
        if(response.message === "success"){
          this.cartDetailes = null;
          this._Renderer2.removeAttribute(element , 'disabled');
          this._CartService.cartNum.next(0);
        };   
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element , 'disabled');
      }
    })
  }
}
