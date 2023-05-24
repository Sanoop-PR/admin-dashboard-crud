import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodSchema } from 'src/models/foodSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  BASE_URL='https://restaurent-api-new.onrender.com'
  INVOICE = 'https://invoice-restuarent.onrender.com'

  // get all food details
  getFoodDetail(){
    return this.http.get(`${this.BASE_URL}/FoodDetails`)
  }

  // get one food details - see-foodDetails
  viewFood(id:any){
    return this.http.get(`${this.BASE_URL}/FoodDetails/${id}`)
  }

  // progress bar
  monthlyRevenue(){
    return this.http.get(`${this.BASE_URL}/monthlyRevenue`)
  }

  // monthly -table
  getWeeks(){
    return this.http.get(`${this.BASE_URL}/weeks`)
  }

  // addFoodForm
  addFoodForm(food:FoodSchema){
    return this.http.post(`${this.BASE_URL}/FoodDetails`,food)
  }

  deleteFood(id:any){
    return this.http.delete(`${this.BASE_URL}/FoodDetails/${id}`)
  }

  editFoodDetails(id:any,food:FoodSchema){
    return this.http.put(`${this.BASE_URL}/FoodDetails/${id}`,food)
  }

  getOrderList(){
    return this.http.get(`${this.BASE_URL}/orderList`)
  }


  // invoice
  invoiceDetails(){
    return this.http.get(`${this.INVOICE}/invoiceDetails`)
  }

  invoiceList(){
    return this.http.get(`${this.INVOICE}/invoiceList`)
  }

  invoiceListDlt(id:any){
    return this.http.delete(`${this.INVOICE}/invoiceList/${id}`)
  }

  socialActivity(){
    return this.http.get(`${this.INVOICE}/socialMedia`)
  }

  conversations(){
    return this.http.get(`${this.INVOICE}/conversations`)
  }



}
