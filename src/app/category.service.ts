import { Injectable } from '@angular/core';
import { Category } from './sheard/module/categories';
import { Language } from './language';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Map<number, Category> = new Map<number, Category>();
  private nextId: number = 1;

  constructor() {}

  list(): Category[] {
    return Array.from(this.categories.values());
  }

  get(id: number): Category | undefined {
    return this.categories.get(Number(id));
  }

  add(newCategoryData: Category): void {
    newCategoryData.id = this.nextId;
    this.categories.set(newCategoryData.id, newCategoryData);
    this.nextId++;
  }

  update(category: Category): void {
    this.categories.set(category.id, category)
  }

  delete(existingCategoryId: number): void {
    this.categories.delete(existingCategoryId);
  }
}
