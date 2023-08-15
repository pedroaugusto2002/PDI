import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ManagerService } from '../services/manager/manager.service';
import { IManager } from '../interfaces/manager/interface';

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
    this.createManager()
  }
  constructor(private fb: FormBuilder, private managerService: ManagerService) { }

  createManager() {
    console.log('fodase?')
    if(this.signUpForm.valid){
      const manager: IManager = {
        name: this.signUpForm.get('name')!.value,
        bio: this.signUpForm.get('bio')!.value,
        email: this.signUpForm.get('email')!.value,
        password: this.signUpForm.get('password')!.value
      }
      this.signUpForm.reset();
      this.managerService.createManager(manager).subscribe((res) => {
        console.log(res);
      })
    }
  }
}
