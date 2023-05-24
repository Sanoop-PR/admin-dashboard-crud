import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-see-food-details',
  templateUrl: './see-food-details.component.html',
  styleUrls: ['./see-food-details.component.css']
})
export class SeeFoodDetailsComponent implements OnInit {

  foodDetail:any=[]

  constructor(private api:ApiService, private viewRoute:ActivatedRoute){}

  ngOnInit(): void {
    // get id from url
    this.viewRoute.params.subscribe((data:any)=>{
      const{id}=data
      
      // get the food details form the id
      this.api.viewFood(id).subscribe({
        next:(response:any)=>{
          this.foodDetail = response
        }
      })
    })
  }

}
