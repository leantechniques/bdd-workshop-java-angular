import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  firstName: FormControl;
  lastName: FormControl;
  group: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstName = this.formBuilder.control("", [Validators.required])
    this.lastName = this.formBuilder.control("", [Validators.required])
    this.group = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }


}
