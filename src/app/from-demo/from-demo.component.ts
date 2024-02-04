import { Component } from '@angular/core';

@Component({
  selector: 'app-from-demo',
  standalone: true,
  imports: [],
  templateUrl: './from-demo.component.html',
  styleUrl: './from-demo.component.css'
})
export class FromDemoComponent {
saveCategory() {
throw new Error('Method not implemented.');

}


  categories: Category[] = [
    { name: 'Fruits', mr: 'Mr', words: ['Apple', 'Banana', 'Orange'] },
    { name: 'Animals', mr: 'Mr', words: ['Dog', 'Cat', 'Elephant'] },
    { name: 'Colors', mr: 'Mr', words: ['Black', 'Yellow'] }
  ];

  editedCategory: Category = { name: '', mr: '', words: [] };

 
}

interface Category {
  name: string;
  mr: string;
  words: string[];
}

