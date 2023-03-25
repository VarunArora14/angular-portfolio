import { Component, OnInit } from '@angular/core';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faGithub = faGithub;
  faExternalLink = faExternalLinkAlt

}

