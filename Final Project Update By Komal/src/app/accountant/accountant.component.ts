import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  onfees: boolean;
  onreport: boolean;
  
    constructor(private authService: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.onfees=false;
      this.onreport=false;
  
    }
    toggleScreen(flag)
    {
  if(!flag) {
    this.onreport = false;
    this.onfees = true;
  } else if (flag == 1) {
    this.onreport = true;
    this.onfees = false;
    
  }
    }
    logout(){
      this.authService.logout();
      this.router.navigateByUrl('/login');
    }
  
  }
