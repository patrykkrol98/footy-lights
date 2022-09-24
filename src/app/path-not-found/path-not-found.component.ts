import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-not-found',
  template: `<div class='container'>
  <h1>404</h1>
  <h2>we are sorry, but the page you requested was not found</h2>
  </div>`,
  styles: ['.container { display: flex; flex-direction: column; align-items: center; height: 100vh; justify-content: center; margin: 24px;}']
})
export class PathNotFoundComponent {
  constructor() { }
}
