import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from './core/models/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
