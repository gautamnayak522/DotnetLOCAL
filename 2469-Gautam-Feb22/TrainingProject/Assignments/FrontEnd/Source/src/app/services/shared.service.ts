import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';    
import {Observable} from 'rxjs';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = environment.APIUrl;  

  constructor(private http: HttpClient) {}  
    
    getProdList(): Observable < any[] > {  
        return this.http.get < any > (this.APIUrl + '/Product/GetProductMaster');  
    }
    getCategory(): Observable < any[] > {  
      return this.http.get < any > (this.APIUrl + '/Category/CategorywithSubcategory');  
    }
    getsubCategory(): Observable < any[] > {  
      return this.http.get < any > (this.APIUrl + '/Subcategory');  
    }
    getProductMainImages(): Observable < any > {  
      return this.http.get < any > (this.APIUrl+ '/ProductImage/getmainimages');    
    }
    GetProductMainImage(prodID:number):Observable < any > {  
      return this.http.get < any > (this.APIUrl+ '/ProductImage/'+prodID+'/GetProductMainImage');    
    }

}
