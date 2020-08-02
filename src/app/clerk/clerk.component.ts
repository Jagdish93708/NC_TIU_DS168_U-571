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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.onstudent=false;
    this.onstudentup=false;

  }
  toggleScreen(flag)
  {
if(!flag) {
  this.onstudentup = false;
  this.onstudent = true;
} else if (flag == 1) {
  this.onstudentup = true;
  this.onstudent = false;
  
}
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}