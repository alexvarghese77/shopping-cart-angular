import { Ingredients } from './../../../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[]=[
    new Ingredients('Apple',5),
    new Ingredients('Orange',6),
  ];
  constructor() { }

  ngOnInit() {
  }

}
