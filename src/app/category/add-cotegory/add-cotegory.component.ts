import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-cotegory',
  templateUrl: './add-cotegory.component.html',
  styleUrls: ['./add-cotegory.component.css']
})
export class AddCotegoryComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  category = {
    category_group_id: '',
    category_name: '',
    meta_tag_title: '',
    meta_tag_keywords: '',
    category_description: '',
    meta_tag_description: ''
  };
  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {

    }
  }
  onSubmit() {

    this.category.category_group_id = this.form.value.category_group_id;
    this.category.category_name = this.form.value.category_name;
    this.category.meta_tag_title = this.form.value.meta_tag_title;
    this.category.meta_tag_keywords = this.form.value.meta_tag_keywords;
    this.category.category_description = this.form.value.category_description;
    this.category.meta_tag_description = this.form.value.meta_tag_description;
    console.log(this.category);
    this.categoryService.addCategory(this.category).subscribe((response: any) => {
        console.log(response);
        if (response.status) {
          this.router.navigate(['dashboard/category/index']);
        }
      }
    );
  }
}
