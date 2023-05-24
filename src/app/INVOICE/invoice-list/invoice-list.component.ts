import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoiceList:any={}

  constructor(private api:ApiService, private snackBar:MatSnackBar){}
  ngOnInit(): void {
    this.invoiceCall()
  }

  invoiceCall(){
    this.api.invoiceList().subscribe({
      next:(result:any)=>{
        this.invoiceList=result
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Quantity','TotalBill','send'];

  openSnackBar() {
    this.snackBar.open('invoice sended', 'done',{
      duration: 3000,
    });
  }

  deleteInvoice(id:any){
    this.api.invoiceListDlt(id).subscribe({
      next:(result:any)=>{
        this.invoiceCall()
        setTimeout(()=>{
          alert('invoice  deleted')
        },500)
      }
    })
  }

}
