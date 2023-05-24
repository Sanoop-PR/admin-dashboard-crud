import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  getOrder:any={}

  Highcharts=Highcharts
  SellsGraph={}

  constructor(private api:ApiService){
    this.SellsGraph={
      chart: {
        type: 'pie'
    },
    title: {
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Biriyani',
                    y: 61.04,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Burger',
                    y: 30.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Pizza',
                    y: 15.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Alfam',
                    y: 8.15,
                    drilldown: 'Firefox'
                }
            ]
        }
    ],credits:{
      enabled:false
  }
    }
  }

  ngOnInit(): void {
    this.api.getOrderList().subscribe({
      next:(result:any)=>{
        this.getOrder=result
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','time','price'];
  // dataSource = new MatTableDataSource<this.getOrder>();

  // @ViewChild(MatPaginator) paginator: MatPaginator | any;

  // ngAfterViewInit() {
  //   this.getOrder.paginator = this.paginator;
  // }


}
