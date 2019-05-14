import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public cellSpacing: number[] = [10, 10];
  public panels: any = [
  { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
  { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 0, "col": 4, content: '<div class="content">2</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
  { "sizeX": 1, "sizeY": 1, "row": 1, "col": 4, content: '<div class="content">4</div>' },
  ]
}
