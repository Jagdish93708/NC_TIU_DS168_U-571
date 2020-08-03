import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css']
})
export class ClerkComponent implements OnInit {
onstudent: boolean;
onstudentup: boolean;
ontc:boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.onstudent=false;
    this.onstudentup=false;
    this.ontc=false;

  }
  toggleScreen(flag)
  {
if(!flag) {
  this.onstudentup = false;
  this.onstudent = true;
  this.ontc = false;
} else if (flag == 1) {
  this.onstudentup = true;
  this.onstudent = false;
  this.ontc = false;
}else if (flag == 2) {
    this.onstudentup = false;
    this.onstudent = false;
    this.ontc = true;
}
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}