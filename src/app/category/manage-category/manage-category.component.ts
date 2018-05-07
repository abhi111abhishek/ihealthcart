import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories = [];
  ngOnInit() {
    this.categoryService.getCategories().subscribe((response: any) => {
      if (response.status) {
        this.categories = response.categories;
      } else {
      }
    });
  }

}
