import { Component, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {

  @Input() deleteCategoryId: any;
  @Input() message: any;


  constructor(private categoryService: CategoryService, private router: Router){}

  deleteCategory() {
    this.categoryService.delete(this.deleteCategoryId);
    this.router.navigate([''])
  }

  hideConfirm(){
    this.router.navigate([''])
  }

}

