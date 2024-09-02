import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetailes.component.html',
  styleUrls: ['./categorydetailes.component.scss']
})
export class CategorydetailesComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService){}
  categoryId:string|null = '';
  categoryDetailes:Category = {} as Category;

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.categoryId = params.get('id')
        }
      })

      this._ProductService.getCategoryDetailes(this.categoryId).subscribe({
        next:(response)=>{
          this.categoryDetailes = response.data;
        },
      })
  }

}
