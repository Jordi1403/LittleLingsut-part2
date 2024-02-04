import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, MatIconModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
})
export class EditCategoryComponent {
  id: any;
  isCreationActive: boolean = false;
  editedCategory: any;

  displayValidationNameMessage: boolean = false;
  displayValidationPairMessage: boolean = false;
  displayValidationPairNullMessage: boolean = false;
  displayValidationOriginMessage: boolean = false;
  displayValidationTargetMessage: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.editedCategory = this.categoryService.get(this.id);
  }

  saveChanges() {
    const englishRegex = /^[A-Za-z]+$/;
    const hebrewRegex = /^[\u0590-\u05FF\s]+$/;

    this.displayValidationNameMessage = !this.editedCategory.name || this.editedCategory.name == '' || name == undefined;
    this.displayValidationPairNullMessage = !this.editedCategory.words.length

    this.editedCategory.words.some((el: any) => {
      this.displayValidationPairMessage = el.origin == '' || el.target == '';
      this.displayValidationOriginMessage = !englishRegex.test(el.origin) && !this.displayValidationPairMessage;
      this.displayValidationTargetMessage = !hebrewRegex.test(el.target) && !this.displayValidationPairMessage;
    });

    if (
      !this.displayValidationNameMessage &&
      !this.displayValidationPairNullMessage &&
      !this.displayValidationPairMessage &&
      !this.displayValidationOriginMessage &&
      !this.displayValidationTargetMessage
    ) {
      this.categoryService.update(this.editedCategory);
      this.router.navigate(['']);
    }
  }

  cancelEdit() {
    this.router.navigate(['']);
  }

  deletePair(i: number) {
    this.editedCategory.words.splice(i, 1);
  }

  OpenAddNewPair() {
    this.editedCategory.words.push({ origin: '', source: '' });
  }
}
