import { product } from 'src/app/core/interfaces/product';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CommonModule , CarouselModule],
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService:ProductService,
    private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService
  ){}

  productId!:string  |null;
  productDetailes:any = null;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.productId = params.get('id');
          // console.log(this.productId);
          
        }
      });

    this._ProductService.getProductDetailes(this.productId!).subscribe({
      next:({data})=>{
        this.productDetailes = data;
        // console.log(data);
        
      }
    })  
  }


  productDetailesOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    items:1,
    nav: false,
  }

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
  }
}
