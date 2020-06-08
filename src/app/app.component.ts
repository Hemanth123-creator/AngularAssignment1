import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `<div>
                  <h2>{{title}}</h2>
                  <reviews></reviews>
               </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Employee1 Details';
}
