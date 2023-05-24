import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-catalouge',
  templateUrl: './catalouge.component.html',
  styleUrls: ['./catalouge.component.css']
})
export class CatalougeComponent implements OnInit {

  constructor(private api:ApiService){}
  isLoading:boolean=true
  searchKey:string='';
  getAllFoods:any=[]

  ngOnInit(): void {
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
}
