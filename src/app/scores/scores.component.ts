import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './models/match';
import { MatchService } from './services/match.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  showFiller = false;
  matches$!: Observable<Match[]>;
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matches$ = this.matchService.getMatchList()
  }

}
