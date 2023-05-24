import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-social-activity',
  templateUrl: './social-activity.component.html',
  styleUrls: ['./social-activity.component.css']
})
export class SocialActivityComponent implements OnInit {

  socialActivity:any={}
  conversations:any={}

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.socialActivity().subscribe({
      next:(result:any)=>{
        this.socialActivity = result
      }
    })

    this.api.conversations().subscribe({
      next:(result:any)=>{
        this.conversations = result
      }
    })

  }

  displayedColumns: string[] = ['Source', 'ConValue', 'cV1', 'cV2','sess','sess1','avg'];

}
