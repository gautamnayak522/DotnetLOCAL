import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from 'src/app/file-upload';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {

  constructor(private adminservice: AdminService, private formbuilder: FormBuilder,private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  products: any = [];
  categories: any = [];
  subcategories: any = [];
  brands: any = [];
  editmode = false;
  myid: any;
  productSearch: any;
  p: number = 1;
  productid: any;
  categoryid : any;
  subcategoryid : any;
  brandid : any;
  newquantity:any;
  availabledata:any;
  private basePath :any;


  changestatusbutton(productid: any,availablequantity:any) {
    this.myid = productid;
    this.newquantity = availablequantity;
    this.products.forEach((element: any) => {
      if (element.productId == productid) {
        element.editmode = true;
      }
      else {
        element.editmode = false;
      }
    });
  }
  savestatus() {
    console.log(this.myid+' '+this.newquantity);
    
    this.adminservice.changequantity(this.myid,this.newquantity)
    .subscribe((arg: any) => {
      console.log(arg)
      this.availabledata = arg;
      this.availabledata.qty = this.newquantity;

      this.adminservice.putquantity(this.availabledata.prodInvId,this.availabledata).subscribe((arg: any) => {
        console.log(arg)
     })
    })
   window.location.reload();
  }
  cancel() {
    window.location.reload();
  }

  categoryform = this.formbuilder.group({
    catName: ['', Validators.required],
    description: ['', Validators.required],
    thumbnail: ['', Validators.required]
  })

  subcategoryform = this.formbuilder.group({
    catID: ['', Validators.required],
    subcatName: ['', Validators.required],
    description: ['', Validators.required],
    thumbnail: ['', Validators.required]
  })

  brandform = this.formbuilder.group({
    brandName: ['', Validators.required],
    description: ['', Validators.required],
    thumbnail: ['', Validators.required]
  })

  productform = this.formbuilder.group({

    productName: ['', Validators.required],
    catID: ['', Validators.required],
    brandID: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],

    productsInventories: this.formbuilder.array([
      this.formbuilder.group({
        qty: ['']
      })]),

    productImages: this.formbuilder.array([
      this.formbuilder.group({
        imageUrl: ['']
      })])
  })

  get images() {
    return this.productform.get('productImages') as FormArray;
  }
  get invs() {
    return this.productform.get('productsInventories') as FormArray;
  }

  addimage() {
    this.images.push(
      this.formbuilder.group({
        imageUrl: ['']
      })
    )
  }
  removeimage(i: any) {
    this.images.removeAt(i);
  }


  editproduct(item: any) {
    console.log(item);
    this.productid = item.productId;
    this.productform.controls["productName"].setValue(item.productName);
    this.subcategories.map((a: any) => {
      if (a.subcatName == item.subCatName) {
        this.productform.controls["catID"].setValue(a.subcatId);
      }
    })
    this.brands.map((a: any) => {
      if (a.brandName == item.brandName) {
        this.productform.controls["brandID"].setValue(a.brandId);
      }
    })
    this.productform.controls["description"].setValue(item.description);
    this.productform.controls["price"].setValue(item.price);
  }

  editcategory(item:any){
    console.log(item);
    this.categoryid = item.catId;
    this.categoryform.controls["catName"].setValue(item.catName)
    this.categoryform.controls["description"].setValue(item.description)
    this.categoryform.controls["thumbnail"].setValue(item.thumbnail)
  }

  editsubcategory(item:any){
    console.log(item);
    this.subcategoryid = item.subcatId;
    this.subcategoryform.controls["catID"].setValue(item.catId)
    this.subcategoryform.controls["subcatName"].setValue(item.subcatName)
    this.subcategoryform.controls["description"].setValue(item.description)
    this.subcategoryform.controls["thumbnail"].setValue(item.thumbnail)
  }

  editbrand(item:any){
    console.log(item);
    this.brandid = item.brandId;
    this.brandform.controls["brandName"].setValue(item.brandName)
    this.brandform.controls["description"].setValue(item.description)
    this.brandform.controls["thumbnail"].setValue(item.thumbnail)
  }


  addCategory() {
    console.log(this.categoryform.value);
    this.adminservice.postcategory(this.categoryform.value).subscribe((arg: any) => console.log(arg));
    window.location.reload();
  }

  addsubcategory() {
    console.log(this.subcategoryform.value);
    this.adminservice.postsubcategory(this.subcategoryform.value).subscribe((arg: any) => console.log(arg));
    window.location.reload();
  }

  addbrand() {
    console.log(this.brandform.value);
    this.adminservice.postbrand(this.brandform.value).subscribe((arg: any) => console.log(arg));
    window.location.reload();
  }

  addproduct() {
    console.log(this.productform.value);
    // this.adminservice.postproduct(this.productform.value).subscribe((arg: any) => console.log(arg));
    // window.location.reload();

    this.basePath =  '/uploads/Products';
  }

  updateproduct() {
    let putstring = {
      productId : this.productid,
      productName : this.productform.controls['productName'].value,
      catId : this.productform.controls['catID'].value,
      brandId : this.productform.controls['brandID'].value,
      description : this.productform.controls['description'].value,
      price : this.productform.controls['price'].value,
      
    }
    console.log(putstring);
    this.adminservice.putproduct(putstring).subscribe((arg: any) => console.log(arg));
    window.location.reload();
  }

  updateCategory(){
    let putcatstring = {
      catId : this.categoryid,
      catName : this.categoryform.controls["catName"].value,
      description : this.categoryform.controls["description"].value,
      thumbnail : this.categoryform.controls["thumbnail"].value,
    }
    console.log(putcatstring);
    this.adminservice.putcategory(putcatstring).subscribe((arg: any) => console.log(arg));
    window.location.reload();
    
  }

  updatesubCategory(){
    let putsubcatstring = {
      subcatId : this.subcategoryid,
      catId : this.subcategoryform.controls["catID"].value,
      subcatName : this.subcategoryform.controls["subcatName"].value,
      description : this.subcategoryform.controls["description"].value,
      thumbnail : this.subcategoryform.controls["thumbnail"].value,
    }
    console.log(putsubcatstring);
    this.adminservice.putsubcategory(putsubcatstring).subscribe((arg: any) => console.log(arg));
    window.location.reload();
    console.log(this.subcategoryform.value);
  }

  updatebrand(){
    let putbrandstring = {
      brandId : this.brandid,
      brandName : this.brandform.controls["brandName"].value,
      description : this.brandform.controls["description"].value,
      thumbnail : this.brandform.controls["thumbnail"].value,
    }
    console.log(putbrandstring);
    this.adminservice.putbrand(putbrandstring).subscribe((arg: any) => console.log(arg));
    window.location.reload();
  }

  deleteproduct(productid:any){
    if(window.confirm('Are sure you want to Delete this Product ?')){
    this.adminservice.deleteproduct(productid).subscribe((arg: any) => console.log(arg));
    window.location.reload();
    }
  }

  deletecategory(categoryid:any){
    if(window.confirm('Are sure you want to Delete this Category ?')){
    this.adminservice.deletecategory(categoryid).subscribe((arg: any) => console.log(arg));
    window.location.reload();
    }
  }

  deletesubcategory(subcategoryid:any){
    if(window.confirm('Are sure you want to Delete this SubCategory ?')){
    this.adminservice.deletesubcategory(subcategoryid).subscribe((arg: any) => console.log(arg));
    window.location.reload();
    }
  }
  deletebrand(brandid:any){
    if(window.confirm('Are sure you want to Delete this Brand ?')){
      this.adminservice.deletebrand(brandid).subscribe((arg: any) => console.log(arg));
      window.location.reload();
      }
  }

  ngOnInit(): void {
    this.adminservice.getProdList()
      .subscribe((response: any) => {
        this.products = response;
        console.log(this.products);

      });

    this.adminservice.getCategory()
      .subscribe((response: any) => {
        this.categories = response;
        console.log(this.categories);
      });

    this.adminservice.getsubCategory()
      .subscribe((response: any) => {
        this.subcategories = response;
        console.log(this.subcategories);
      });

    this.adminservice.getbrands()
      .subscribe((response: any) => {
        this.brands = response;
        console.log(this.brands);
      });
  }
}
