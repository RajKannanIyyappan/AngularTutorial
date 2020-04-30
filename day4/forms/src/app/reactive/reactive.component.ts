import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  cars = ['volvo', 'Audi', 'Tata'];
  form = new FormGroup({
    login: new FormGroup({
      username: new FormControl('united', [Validators.required, this.validateName],
        this.validateNameAsnyc),
      password: new FormControl('', [Validators.required, this.validateName])
    }),
    cars: new FormControl('', Validators.required)
  });

  constructor() {
  }

  ngOnInit() {
  }


  validateNameAsnyc(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value.toString().startsWith('h')) {
          resolve({nameError: true});
        } else {
          resolve(null);
        }
      }, 5000);
    });
  }

  validateName(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().startsWith('a')) {
      return {nameError: true};
    } else {
      return null;
    }
  }
}
