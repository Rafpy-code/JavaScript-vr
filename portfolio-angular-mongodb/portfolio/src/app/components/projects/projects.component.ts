import { Component } from '@angular/core';

import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent {
  public  pagina: number = 1;
  public projects: Project[] | any;
  public url: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe({
      next: response => {
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      error: error => {
        console.log(<any>error);
      }
    });
  }

}
