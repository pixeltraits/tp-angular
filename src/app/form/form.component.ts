import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../core/models/form';

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: Form;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.route.snapshot.data.form;
    console.log(this.form);
  }

  submitLoginForm(): void {
    console.log(this.form);
  }
}
