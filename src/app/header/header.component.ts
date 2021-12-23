import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

name:string;
profile:string;


  userIsAuthenticated=false;
    private authListenerSubs : Subscription;
  currentpath: string;
    constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.autoAuthUser();

    this.currentpath=location.pathname;
    this.userIsAuthenticated=this.authService.getIsAuth();
    this.authListenerSubs=this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
    });
    this.name="Vismay Gamit";
    this.profile="https://pbs.twimg.com/profile_images/1237046307539128320/UVzyS8ry_400x400.jpg";
  }

  onLogout()
  {

    this.authService.logout();
  }
  ngOnDestroy()
  {
    this.authListenerSubs.unsubscribe();
  }

}
