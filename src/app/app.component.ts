import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-app';
  directives = [
    'ng-style',
    'ng-class',
    'ng-if',
    'ng-for',
    'ng-for-form',
    'ng-switch',
    'ng-template',
    'ng-container',
    'ng-content',
];
  selectedDirective = '';
}