import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  screenWidth = window.innerWidth;
  private userSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
    })
  }

  toLogin(){
    this.router.navigate(['/auth'])
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
