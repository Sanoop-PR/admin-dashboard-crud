import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoice:any={}

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.invoiceDetails().subscribe({
      next:(result:any)=>{
        this.invoice=result
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','total'];

}
