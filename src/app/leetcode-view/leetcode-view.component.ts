import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-leetcode-view',
  templateUrl: './leetcode-view.component.html',
  styleUrls: ['./leetcode-view.component.css']
})


export class LeetcodeViewComponent implements OnInit {

  @Input() totalSolved: number;
  @Input() totalQuestions: number;
  @Input() acceptanceRate: number;
  @Input() easySolved: number;
  @Input() mediumSolved: number;
  @Input() hardSolved: number
  @Input() ranking: number;

  // initialise the httpClient instance for use
  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {

  }
}
