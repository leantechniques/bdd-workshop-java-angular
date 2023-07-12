import {Component, OnInit} from '@angular/core';
import {BddWorkshopService} from "./services/bdd-workshop.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  states = [];
  group: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  address: FormControl;
  state: FormControl;
  zip: FormControl;

  constructor(private service: BddWorkshopService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.service.getStates().subscribe(x => this.states = x)
    this.firstName = this.formBuilder.control('', [Validators.required])
    this.lastName = this.formBuilder.control('', [Validators.required])
    this.address = this.formBuilder.control('', [Validators.required])
    this.state = this.formBuilder.control('', [Validators.required])
    this.zip = this.formBuilder.control('', [Validators.required])
    this.group = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      state: this.state,
      zip: this.zip
    })
  }

  onChange(event: Event){
    console.log(event.target['value'])
  }
}
