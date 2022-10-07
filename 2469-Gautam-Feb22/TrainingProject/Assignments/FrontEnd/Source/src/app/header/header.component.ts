import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { UserroleService } from '../services/userrole.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice :CartService,public authservice : AuthService,public userroleservice : UserroleService) { }

  public totalItem : number = 0;
  public searchTerm !: string;

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe((res:any)=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }
  logout() {
    this.authservice.logout();
  }
}
