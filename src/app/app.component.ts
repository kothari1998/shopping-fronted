import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userIsAuthenticated=false;
    private authListenerSubs : Subscription;
  constructor(private authService: AuthService,private router:Router) {}
  title = 'shoppingdemo';
  login: string;
  check1: any;
  currentpath:string;
  ngOnInit()
  {
    this.authService.autoAuthUser();
    this.currentpath=location.pathname;
    console.log(this.currentpath);
    if(this.currentpath=="/")
    {
      this.router.navigate(['dashboard']);
    }
    this.userIsAuthenticated=this.authService.getIsAuth();
    this.authListenerSubs=this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
    });
    // this.check();
  }
  // check()
  // {

  //   if(this.currentpath!='/login' && this.currentpath!='/signup')
  //   {
  //     this.login='<!-- <app-sidebar></app-sidebar> -->' ;
  //   }
  //   else
  //   {
  //     this.login='';
  //   }


  // }

  ngOnDestroy()
  {
    this.authListenerSubs.unsubscribe();
  }

}
