import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {

  constructor(private api:ApiService,private snackBar:MatSnackBar){}

  getAllFoods:any=[]
  searchKey:string='';
  isLoading:boolean=true


  ngOnInit(): void {
    this.getFood()
    // console.log(this.stockItem)
  }

  getFood(){
    this.api.getFoodDetail().subscribe({
      next:(response:any)=>{
        // setTimeout(() => {
          this.getAllFoods=response
          this.isLoading=false
        // }, 1000);
      },
      error:(err:any)=>{
        this.isLoading = false
      }
    })
  }

  deleteFood(id:any){
    this.api.deleteFood(id).subscribe({
      next:(response:any)=>{
       this.getFood()
       this.openSnackBar()
      }
    })
  }

  openSnackBar() {
    this.snackBar.open('Deleted Successfully', '',{
      duration: 2000,
    });
  }

}