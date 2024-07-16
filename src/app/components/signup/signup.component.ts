import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('confirmPasswordInput') confirmPasswordInput!: ElementRef;

  logoImage: string = "../../../assets/img/logo.png";
  logoApple: string = "../../../assets/img/apple.png";
  logoFacebook: string = "../../../assets/img/facebook.png";
  logoGoogle: string = "../../../assets/img/google.png";
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.auth.signup(this.signUpForm.value)
        .subscribe({
          next: (res) => {
            this.signUpForm.reset();
            this.router.navigate(['dashboard']);
          },
          error: (err) => {
            console.log(err.message)
          }
        });
    }
  }
}
