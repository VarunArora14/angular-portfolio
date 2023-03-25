import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  totalSolved: number = 0;
  totalQuestions: number = 0;
  acceptanceRate: number = 0
  easySolved: number = 0;
  mediumSolved: number = 0
  hardSolved: number = 0;
  ranking: 0

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // async get request using observables
    this.httpClient.get('https://leetcode-stats-api.herokuapp.com/').subscribe(
      (response) => {
        console.log(response);
        // this.totalSolved = response.totalSolved;
        this.totalSolved = response["totalSolved"]
        this.totalQuestions = response["totalQuestions"]
        this.easySolved = response["easySolved"]
        this.mediumSolved = response["mediumSolved"]
        this.hardSolved = response["hardSolved"]
        this.acceptanceRate = response["acceptanceRate"]
        this.ranking = response["ranking"]
      }, (error) => {
        console.log(error);

      }

    )
  }
}
