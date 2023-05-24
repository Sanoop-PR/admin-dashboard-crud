import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FoodSchema } from 'src/models/foodSchema';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  food:FoodSchema={}

  constructor(private api:ApiService, private navigate:Router,private snackBar:MatSnackBar){}

  stockOption = [
    {title : "In Stock",}, 
    {title : "Out of stock"}, 
  ];

  addFood(food:FoodSchema){
    this.api.addFoodForm(food).subscribe({
      next:(response:any)=>{
        this.openSnackBar()
       this.navigate.navigateByUrl('/Catalogue')
      }
    })
  }

  openSnackBar() {
    this.snackBar.open('new product is added', '',{
      duration: 2000,
    });
  }

}