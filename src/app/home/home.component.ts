import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title='Enter World';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.title='Enter The Comic World', 3000);
  }

}
