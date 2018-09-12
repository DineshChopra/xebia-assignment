import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    this.loginService.login(username, password).subscribe(response => {
      if (response) {
        this.router.navigate(['/planet']);
      }
    });
  }
}
