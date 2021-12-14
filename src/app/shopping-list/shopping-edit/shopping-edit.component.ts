import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  // @Output() shoppingItemCreated = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.ingredientAdded.emit(newIngredient);
  }

  // onAddClick(nameInput, amountInput) {
  //   console.log(nameInput)
  //   console.log(amountInput)
  //   this.shoppingItemCreated.emit({
  //     ingredientName: nameInput, 
  //     ingredientAmount: amountInput})
  // }

}
