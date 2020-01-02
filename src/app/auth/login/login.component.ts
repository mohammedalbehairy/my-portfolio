import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage = null;
  public returnTo: string;


  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.returnTo = params['return'] || '/admin';
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

  }

  login() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((res) => {

      this.auth.setToken(res.bearer);
      this.auth.setInfo(res.name, res.email);
      
      this.router.navigate([this.returnTo]).then().catch();

    },
      err => {
        console.log(err);
      })
  }
}
