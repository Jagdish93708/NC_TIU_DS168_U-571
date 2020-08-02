import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
oncreate: boolean;
onupdate: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.oncreate=false;
    this.onupdate=false;

  }
  toggleScreen(flag)
  {
if(!flag) {
  this.onupdate = false;
  this.oncreate = true;
} else if (flag == 1) {
  this.onupdate = true;
  this.oncreate = false;
  
}
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}