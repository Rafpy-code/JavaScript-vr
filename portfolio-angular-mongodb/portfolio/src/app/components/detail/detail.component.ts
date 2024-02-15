import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})

export class DetailComponent {
  public url: string | undefined;
  public project!: Project;
  public confirm: boolean | undefined;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    });
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe({
      next: response => {
        this.project = response.project;
      },
      error: error => {
        console.log(<any>error);
      }
    })
  }

  setConfirm(confirm: boolean | undefined) {
    this.confirm = confirm;
  }

  deleteProject(id: string) {
    this._projectService.deleteProject(id).subscribe({
      next: response => {
        if (response.project) {
          this._router.navigate(['/proyectos']);
        }
      },
      error: error => {
        console.log(<any>error);
      }
  });
  }

}
