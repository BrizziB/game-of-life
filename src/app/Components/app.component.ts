import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// la classe del componente principale che contiene tutti gli altri, non fa niente, imposta solo il titolo
export class AppComponent implements OnInit {
  title = 'Conway GameOfLife';



  ngOnInit() {

  }

}
