import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fresno State Pool Management System';

  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
     this.titleService.setTitle(title);
  }

  
}
