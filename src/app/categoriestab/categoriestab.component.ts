import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../sheard/module/categories';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-categoriestab',
  imports: [
    RouterModule,
    MatIconModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ConfirmComponent
  ],
  standalone: true,
  templateUrl: './categoriestab.component.html',
  styleUrl: './categoriestab.component.css',
})
export class categoriestabComponent implements OnInit {
  displayDeleteConfirm = false;
  deleteCategoryId: any = null;
  displayMessage = ''
  allCategories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.allCategories = this.categoryService.list();
  }

  deleteCategory() {
    this.categoryService.delete(this.deleteCategoryId);
    this.allCategories = this.categoryService.list();
    this.hideConfirm();
  }

  editActive(id: number) {
    this.router.navigate(['category', id])
  }

  createCategory() {
    this.router.navigate(['create'])
  }

  displayConfirm(categoryName: string, categoryId: number){
    this.deleteCategoryId = categoryId;
    this.displayMessage = `are you sure you want to delete '${categoryName}' category`
    this.displayDeleteConfirm = true;
  }

  hideConfirm(){
    this.deleteCategoryId = null;
    this.displayDeleteConfirm = false;
  }
}
