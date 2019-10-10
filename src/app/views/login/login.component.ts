import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service';
import {LoginPayload} from '../../models/login-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  private username: string;
  private password: string;
  private meghaMessage: string = "It is free, and would always be";
  constructor(private loginService: LoginService,
    private router: Router) {}
  login() {
    const post: LoginPayload = {
      userName: this.username,
      password: this.password
    }
    this.loginService.login(post).subscribe(
      result=> {this.router.navigate(['user'])}
    );
  }
  register() {
    this.router.navigate(['register']);
  }
  fatMeghaEvaluator(str: string) {
    if(this.username.includes('megha')) {
      this.meghaMessage = "Hi Megha, You are fat";
    } else {
      this.meghaMessage = "It is free, and would always be";
    }

  }
}
