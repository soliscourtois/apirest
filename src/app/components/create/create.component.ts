import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public save_project:any = [];
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.title = "Crear proyecto";
    this.project = new Project ('', '', '', '', 2024, '', '');
  }

  onSubmit(form: any) {
   
    console.log(this.project);

    this._projectService.saveProject(this.project).subscribe(
        {
            next: (response) => {
                if(response.project){
                  

                  //Subir imagen
                  this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
                  .then((result:any) =>{
                    this.save_project = result.project;

                    this.status = 'success';
                    console.log(result);
                    form.reset();
                  });

                  
                }else{
                  this.status = 'failed';
                }
                },
                
            
            error: (error) => {
                console.log('Error al guardar los datos:', error);
            },
            complete: () => {
                console.info('La operación de guardar está completa');
            }
        }
    );
    
}

fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;
}
}

