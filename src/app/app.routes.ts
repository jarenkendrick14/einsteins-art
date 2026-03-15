import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { EmployeeDirectoryComponent } from './pages/employee-directory/employee-directory';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'employees', component: EmployeeDirectoryComponent },
  { path: '**', component: NotFoundComponent } // Wildcard for 404
];