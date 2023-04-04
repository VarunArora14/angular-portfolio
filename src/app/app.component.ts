import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  totalSolved: number = 682;
  totalQuestions: number = 2539;
  acceptanceRate: number = 72.07;
  easySolved: number = 217;
  mediumSolved: number = 403;
  hardSolved: number = 62;
  ranking: number = 25538;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // async get request using observables
    this.httpClient
      .get('https://leetcode-stats-api.herokuapp.com/RDXV')
      .subscribe(
        (response) => {
          console.log(response);
          // this.totalSolved = response.totalSolved;
          this.totalSolved = response['totalSolved'];
          this.totalQuestions = response['totalQuestions'];
          this.easySolved = response['easySolved'];
          this.mediumSolved = response['mediumSolved'];
          this.hardSolved = response['hardSolved'];
          this.acceptanceRate = response['acceptanceRate'];
          this.ranking = response['ranking'];
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
