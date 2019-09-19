import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { ArticalsComponent } from './articals/articals.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'carrer',
    component: CareerComponent
  },
  {
    path: 'articals',
    component: ArticalsComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
