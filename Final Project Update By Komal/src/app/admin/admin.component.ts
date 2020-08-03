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
onstudent:boolean;
onstudentup:boolean;
onfees:boolean;
onreport:boolean;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.oncreate=false;
    this.onupdate=false;
    this.onstudent=false;
    this.onstudentup=false;
    this.onfees=false;
    this.onreport=false;
  }
  toggleScreen(flag)
  {
if(!flag) {
  this.onupdate = false;
  this.oncreate = true;
  this.onstudent=false;
  this.onstudentup=false;
  this.onfees=false;
  this.onreport=false;
} else if (flag == 1) {
  this.onupdate = true;
  this.onstudent=false;
  this.onstudentup=false;
  this.onfees=false;
  this.onreport=false;
} else if (flag == 2) {
   this.onupdate = false;
  this.oncreate = false;
  this.onstudent=true;
  this.onstudentup=false;
  this.onfees=false;
  this.onreport=false;
} else if (flag == 3) { 
  this.onupdate = false;
  this.oncreate = false;
  this.onstudent=false;
  this.onstudentup=true;
  this.onfees=false;
  this.onreport=false;
}
else if (flag == 4) {
  this.onupdate = false;
  this.oncreate = false;
  this.onstudent=false;
  this.onstudentup=false;
  this.onfees=true;
  this.onreport=false;
}
else if (flag == 5) {
  
  
  this.onupdate = false;
  this.oncreate = false;
  this.onstudent=false;
  this.onstudentup=false;
  this.onfees=false;
  this.onreport=true;
}

  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}