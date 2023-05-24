import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  Highcharts=Highcharts
  SellsGraph={}
  TotalVisitors={}
  NewUsers={}
  TotalOrders={}
  TIMINGCHART={}

  constructor(private api:ApiService){
    this.SellsGraph={
      chart: {
        type: 'area',
        backgroundColor:'transparent',
        // width: 500,
        height: 200

    },
    title: {
        useHTML: true,
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: ''
        }
    },
    legend: {
        enabled:false
    },
    xAxis: {
      lineColor: 'white',
      tickWidth: 0,
      lineHeight: 0,
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,},
       visible: false,
    },
    yAxis: {
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,}
        
    },
    tooltip: {
        pointFormat: '',
        // split: true
    },
    plotOptions: {
        series: {
            pointStart: 2015
        },
        area: {
            stacking: '',
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        // name: 'India',
        data: [0.7, 0.7, 0.8, 0.8, 1.7, 1.8, 2,]
    }],
    credits:{
        enabled:false
    }
    }
    this.TotalVisitors={
      chart: {
        type: 'area',
        backgroundColor:'transparent',
        // width: 500,
        height: 200

    },
    title: {
        useHTML: true,
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: ''
        }
    },
    legend: {
        enabled:false
    },
    xAxis: {
      lineColor: 'white',
      tickWidth: 0,
      lineHeight: 0,
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,},
       visible: false,
    },
    yAxis: {
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,}
        
    },
    tooltip: {
        pointFormat: '',
        // split: true
    },
    plotOptions: {
        series: {
            pointStart: 2015
        },
        area: {
            stacking: '',
            marker: {
                enabled: false
            }
        }
    },
    series: [{
      name: '',
      data: []
  },
  {
        name: 'India',
        data: [0.7, 1, 0.8, 1.3, 1.7, .5, 2,]
    }],
    credits:{
        enabled:false
    }
    }
    this.NewUsers={
      chart: {
        type: 'area',
        backgroundColor:'transparent',
        // width: 500,
        height: 200

    },
    title: {
        useHTML: true,
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: ''
        }
    },
    legend: {
        enabled:false
    },
    xAxis: {
      lineColor: 'white',
      tickWidth: 0,
      lineHeight: 0,
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,},
       visible: false,
    },
    yAxis: {
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,}
        
    },
    tooltip: {
        pointFormat: '',
        // split: true
    },
    plotOptions: {
        series: {
            pointStart: 2015
        },
        area: {
            stacking: '',
            marker: {
                enabled: false
            }
        }
    },
    series: [{
      name: '',
      data: []
  },
  {
    name: '',
    data: []
  },
  {
        name: 'India',
        data: [2, 0.7, 1, 0.8, 1.7, 1.8, 1,]
    }],
    credits:{
        enabled:false
    }
    }
    this.TotalOrders={
      chart: {
        type: 'area',
        backgroundColor:'transparent',
        // width: 500,
        height: 200

    },
    title: {
        useHTML: true,
        text: '',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    accessibility: {
        point: {
            valueDescriptionFormat: ''
        }
    },
    legend: {
        enabled:false
    },
    xAxis: {
      lineColor: 'white',
      tickWidth: 0,
      lineHeight: 0,
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,},
       visible: false,
    },
    yAxis: {
      categories: [''],
      title: {
          text: null
      },
      labels: {
       enabled:false,}
        
    },
    tooltip: {
        pointFormat: '',
        // split: true
    },
    plotOptions: {
        series: {
            pointStart: 2015
        },
        area: {
            stacking: '',
            marker: {
                enabled: false
            }
        }
    },
    series: [{
      name: '',
      data: []
  },{
    name: '',
    data: []
},{
  name: '',
  data: []
},{
        name: '',
        data: [0.7, 0.7, 1, 2, 1.7, 1.8, 2,]
    }],
    credits:{
        enabled:false
    }
    }
    this.TIMINGCHART={
        chart: {
            type: 'column'
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
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {value}%.'
            }
        },
        xAxis: [{
            reversed: false,
            accessibility: {
                description: ''
            },
            categories: [
                '12 AM',
                '2 AM',
                '4 AM',
                '6 AM',
                '8 AM',
                '10 AM',
                '12 PM',
                '2 PM',
                '4 PM',
                '6 PM',
                '8 PM',
                '10 PM'
            ],
        }],
        yAxis: {
            title: {
                text: null
            },
            accessibility: {
                description: 'Percentage population',
                rangeDescription: 'Range: 0 to 5%'
            }
        },
    
        plotOptions: {
            series: {
                stacking: 'normal',
            }
        },
        series: [{
            name: 'NEW ORDER',
            color: '#00000',
            data: [
                -2.98, -5.52, -4.65,0, -4.85,
                -3.71, -2.76, 0, -1.70, -1.47,
                -1.22, -3.99
            ]
        }, {
            name: 'REPEAT ORDER',
            color: '#FF0000'  ,
            data: [
                8.84, 7.42, 6.57, 5.68, 4.83,
                3.74, 2.80, 4.14, 5.79, 7.59,
                5.34, 8.06
            ]
        }],
        credits:{
            enabled:false
        }
    }
    // graph end
  }

    //-----recent food start
    recentFood:any=[]

    ngOnInit(): void {
        this.get_data()
        this.getYear()
        this.weeksData()
    }

    get_data(){
        this.api.getFoodDetail().subscribe({
            next:(response:any)=>{
                this.recentFood=response
            }
        })
    }

    // recent food table  
        recentFoodColumns: string[] = ['ID', 'name', 'price'];
    // recent food table end  
    //---------recent food end


    // MONTHLY REVENUE
    getMonth:any=[]

    getYear(){
        this.api.monthlyRevenue().subscribe({
            next:(response:any)=>{
                // console.log(response)
                this.getMonth=response
            }
        })
    }

    // MONTHLY REVENUE start
    weekOne?:number
    weekTwo?:number
    weekThree?:number
    weekFour?:number


    changeMonth(event:any){
        this.weekOne=event.weekOne
        this.weekTwo=event.weekTwo
        this.weekThree=event.weekThree
        this.weekFour=event.weekFour
    }
    // MONTHLY REVENUE end


    // monthly REVENUE start
    mondayData:any
    tuesdayData:any
    wednesdayData:any
    thursdayData:any
    fridayData:any
    weeksData(){
        this.api.getWeeks().subscribe({
            next:(response:any)=>{
                this.mondayData=response.monday
                this.tuesdayData=response.tuesday
                this.wednesdayData=response.wednesday
                this.thursdayData=response.thursday
                this.fridayData=response.friday
            }
        })
    }
    // monthly REVENUE end


    //  monday
    weekColumns: string[] = [ 'name','Qty', 'Orders', 'Profit'];


}
