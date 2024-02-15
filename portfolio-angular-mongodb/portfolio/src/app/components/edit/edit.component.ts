import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "src/app/models/project";
import { Global } from "src/app/services/global";
import { ProjectService } from "src/app/services/project.service";
import { UploadService } from "src/app/services/upload.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project | any;
  public save_project: any;
  public status: string = "";
  public filesToUpload: Array<File> = [];
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar proyecto";
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params["id"];

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
    });
  }

  onSubmit(): void {
    this._projectService.updateProject(this.project).subscribe({
      next: (response) => {
        if (response.project) {
          // Actualizar la imagen, compruebo que exista algún contenido.
          if (this.filesToUpload.length >= 1) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.save_project = result.project;
                this.status = 'success';
              });
          } else {
            this.save_project = response.project;
            this.status = 'success';
          }
        } else {
          this.status = 'failed';
        }
      },
      error: error => {
        console.log(<any>error);
      }
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
