import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  constructor(private _ProductService:ProductService){}
  brandsData:Category[] = [];
  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(response)=>{
        // console.log(response);
        this.brandsData = response.data;
      }
    })
}
}
