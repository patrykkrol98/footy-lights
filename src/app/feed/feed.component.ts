import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHighlight } from './highlight';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  $highlights!: Observable<IHighlight[]>;
  offset: number = 5;

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    this.$highlights = this.highlightService.getHighlights();
  }

  getVideoUrl(element: string){
    const div = document.createElement('div')
    div.innerHTML = element
    return div.querySelector('iframe')?.src ?? ''
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight - 10;
    if (pos >= max) {
      this.offset = this.offset + 5;
    }
  }

}
