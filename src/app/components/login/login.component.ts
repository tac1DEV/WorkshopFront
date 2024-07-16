import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`app-login {
    .mat-mdc-text-field-wrapper {
      background-color: #272727;
    }
  }`
  ]
})
export class LoginComponent {
  logoImage: any = "../../../assets/img/logo.png";
  logoApple: any = "../../../assets/img/apple.png";
  logoFacebook: any = "../../../assets/img/facebook.png";
  logoGoogle: any = "../../../assets/img/google.png";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignUp():void{
    this.router.navigate(['signup']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
          },
          error: (err) => {
            alert("Email ou mot de passe incorrect.")
          }
        });
    }
  }

  protected readonly onclick = onclick;
}
