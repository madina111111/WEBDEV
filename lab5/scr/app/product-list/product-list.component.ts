import { Component } from '@angular/core';

import {Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  selectedFilter: String = "None";
  itemList: Product[] = products;
  filteredItems = [...products];
  onDeleteItem(id:Number){
    this.itemList = this.itemList.filter((x) => x.id !== id);
    this.filterItems();
  }

  ngOnInit():void{
  }

  changeFilter(filter: string) {
    this.selectedFilter = filter;    
    this.filterItems();
  }

  filterItems() {
    if(this.selectedFilter === "None") {
      this.filteredItems = this.itemList
    } else {
      this.filteredItems = this.itemList.filter(p => p.category == this.selectedFilter);
    }
  }






  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/