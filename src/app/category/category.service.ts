import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()

export class CategoryService {
  constructor(private http: Http) {}

  addCategory(category: any) {
    console.log("catge",category);
    return this.http.post('http://localhost/ihealthcartbackend/frontend/web/index.php?r=category/create', category);
  }
  getCategories() {
    return this.http.get('http://localhost/ihealthcartbackend/frontend/web/index.php?r=category/index')
      .map((response: Response) => {
          const data = response.json();
          return data;
      });
  }
}
