import { Routes } from '@angular/router';
import { categoriestabComponent } from './categoriestab/categoriestab.component';
import { FromDemoComponent } from './from-demo/from-demo.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

export const routes: Routes = [
  { path: 'category/:id', component: EditCategoryComponent },
  { path: 'create', component: CreateCategoryComponent },
  { path: 'newcategory', component: FromDemoComponent },
  { path: '', component: categoriestabComponent },
  { path: 'catgories', component: categoriestabComponent },
];
