import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
    this.title = "Jose Luis";
    this.subtitle = "Desarrollador web";
    this.web = "jlcsscs.com"
  }

}
