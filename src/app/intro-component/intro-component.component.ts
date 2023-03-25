import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-intro-component',
  templateUrl: './intro-component.component.html',
  styleUrls: ['./intro-component.component.css']
})
export class IntroComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faLinkedIn = faLinkedin
  faGithub = faGithub;
  faCode = faCode

}
