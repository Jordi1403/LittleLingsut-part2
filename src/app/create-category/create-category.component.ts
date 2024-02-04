import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../sheard/module/categories';
import { Language, TranslatedWord } from '../language';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, MatInputModule, MatFormFieldModule,MatButtonModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  displayValidationNameMessage: boolean = false;
  displayValidationPairMessage: boolean = false;
  displayValidationPairNullMessage: boolean = false;
  displayValidationOriginMessage: boolean = false;
  displayValidationTargetMessage: boolean = false;
  wordsPairs: any[] = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  createCategory(name: any, origin: any, target: any) {
    const englishRegex = /^[A-Za-z]+$/;
    const hebrewRegex = /^[\u0590-\u05FF\s]+$/;

    this.displayValidationNameMessage = !name || name == '' || name == undefined;
    this.displayValidationPairNullMessage = !this.wordsPairs.length

    this.wordsPairs.some((el: any) => {
      this.displayValidationPairMessage = el[0] == '' || el[1] == '';
      this.displayValidationOriginMessage = !englishRegex.test(el[0]) && !this.displayValidationPairMessage;;
      this.displayValidationTargetMessage = !hebrewRegex.test(el[1]) && !this.displayValidationPairMessage;;
    });

    if (
      !this.displayValidationNameMessage &&
      !this.displayValidationPairNullMessage &&
      !this.displayValidationPairMessage &&
      !this.displayValidationOriginMessage &&
      !this.displayValidationTargetMessage
    ) {
      const wordsMap: TranslatedWord[] = [];
      this.wordsPairs.forEach((el: any) => {
        wordsMap.push({ origin: el[0], target: el[1] });
      });

      const newCategory = {
        id: 0,
        name,
        origin,
        target,
        words: wordsMap,
        lastUpdateDate: new Date(),
      };
      this.categoryService.add(newCategory);
      this.router.navigate(['']);
    }
  }

  OpenAddNewPair() {
    this.wordsPairs.push(['', '']);
  }

  deletePair(i: number) {
    this.wordsPairs.splice(i, 1);
  }
}
