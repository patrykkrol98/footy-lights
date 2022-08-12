import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-not-found',
  template: `<div class='container'><h1>404</h1>
  <h2>Page Not Found</h2>
  <p>The Page you are looking for doesn't exist or an other error occured</p></div>`,
  styles: ['.container { display: flex; flex-direction: column; align-items: center }']
})
export class PathNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
