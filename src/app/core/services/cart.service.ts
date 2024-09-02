import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`;

  cartNum:BehaviorSubject<number> = new BehaviorSubject(0);


  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `cart` , 
        {
          productId: id,
      }
     )
  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `cart` )
  }
  removeCartItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `cart/${prodId}`)
  }

  updateCartCount(productId:string , countNum:number):Observable<any>{
    return this._HttpClient.put(this.baseUrl + `cart/${productId}` , 
      {
        count: countNum,
    } )
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `cart` )
  }

  checkOut(cartId:string|null , orderId:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 
      `orders/checkout-session/${cartId}?url=http://localhost:4200` , 

      {
        shippingAddress:orderId,
    }
    )
  }
}
