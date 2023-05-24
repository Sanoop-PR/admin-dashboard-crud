import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FoodSchema } from 'src/models/foodSchema';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  food:FoodSchema={}

  stockOption = [
    {title : "In Stock",}, 
    {title : "Out of stock"}, 
  ];

  constructor(private acivatedRoute:ActivatedRoute, private api:ApiService, private navigate:Router,private snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.acivatedRoute.params.subscribe({
      next:(data:any)=>{
        const{id}=data
        this.api.viewFood(id).subscribe({
          next:(result:any)=>{
            this.food=result
          }
        })
      }
    })
  }

  editFood(id:any){
    this.api.editFoodDetails(id,this.food).subscribe({
      next:(response:any)=>{
        console.log(response)
        // this.navigate.navigateByUrl('Catalogue')
      }
    })
  }

  openSnackBar() {
    this.snackBar.open('updated successfully', 'done',{
      duration: 2000,
    });
  }


}
