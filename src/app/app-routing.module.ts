import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalougeComponent } from './menu-components/catalouge/catalouge.component';
import { MenuGridComponent } from './menu-components/menu-grid/menu-grid.component';
import { SeeFoodDetailsComponent } from './menu-components/see-food-details/see-food-details.component';
import { FoodEditComponent } from './menu-components/food-edit/food-edit.component';
import { AddProductComponent } from './menu-components/add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceDetailComponent } from './INVOICE/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './INVOICE/invoice-list/invoice-list.component';
import { SocialActivityComponent } from './social-activity/social-activity.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:'Catalogue',component:CatalougeComponent
  },
  {
    path:"menuGrid",component:MenuGridComponent
  },
  {
    path:"see-Food/:id",component:SeeFoodDetailsComponent
  },
  {
    path:'edit-food/:id',component:FoodEditComponent
  },
  {
    path:'add-Food',component:AddProductComponent
  },
  {
    path:'orders',component:OrdersComponent
  },
  {
    path:'invoiceDetails',component:InvoiceDetailComponent
  },
  {
    path:'invoiceList',component:InvoiceListComponent
  },
  {
    path:'socialActivity',component:SocialActivityComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
