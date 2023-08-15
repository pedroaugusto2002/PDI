import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  acceptTerms = false;
  hide = true;
  signUpForm = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    bio: [''],
    email:['', [ Validators.required, Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });

  changeAcceptTerms(event: any) {
    this.acceptTerms = event.checked;
  }

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe((value) => {
      let password = this.signUpForm.get('password');
      let confirmPassword = this.signUpForm.get('confirmPassword');

      if (password?.value && confirmPassword?.value){
        if (password.value !== confirmPassword.value){
          confirmPassword?.setErrors({passwordMatch: true});
        } else {
          console.log('mec')
          confirmPassword?.setErrors(null);
        }
        console.log(confirmPassword)
      }
    });
  }
  onSubmit() {
    
  }
  constructor(private fb: FormBuilder) { }
}
