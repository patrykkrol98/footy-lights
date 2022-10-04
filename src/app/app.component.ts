import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'footy-lights'
  screenWidth = window.innerWidth;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.auth.autoLogin()  
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
