import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IHighlight } from '../highlight';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  $highlights!: Observable<IHighlight[]>;
  offset: number = 5;

  constructor(private highlightService: HighlightService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.$highlights = this.highlightService.getHighlights();
  }

  sanitizeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getIframeSrc(iframeString: string) {
    const div = document.createElement('div')
    div.innerHTML = iframeString
    let url = div.querySelector('iframe')
    return this.sanitizeVideoUrl(url!.src)
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      this.offset = this.offset + 5;
    }
  }

}
