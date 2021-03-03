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
  form : Form;

  constructor (private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.form = this.route.snapshot.data.form;
  }

  submitLoginForm() {
    console.log(this.form);
  }
}
