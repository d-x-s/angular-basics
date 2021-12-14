import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingItemCreated = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(nameInput, amountInput) {
    console.log(nameInput)
    console.log(amountInput)
    this.shoppingItemCreated.emit({
      ingredientName: nameInput, 
      ingredientAmount: amountInput})
  }

}
