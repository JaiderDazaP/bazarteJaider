import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})
export class AuthenticatorComponent implements OnInit{
  state = AuthenticatorCompState.LOGIN;
  constructor(){}

  ngOnInit(): void {
    
  }

  onForgotPasswordClick(){
    this.state=AuthenticatorCompState.FORGOT_PASSWORD;
  }

  onCreateAccountClick(){
    this.state=AuthenticatorCompState.REGISTER;
  }

  onLoginClick(){
    this.state=AuthenticatorCompState.LOGIN;
  }

  isLoginState(){
    return this.state==AuthenticatorCompState.LOGIN;
  }

  isRegisterState(){
    return this.state==AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState(){
    return this.state==AuthenticatorCompState.FORGOT_PASSWORD;
  }
  
  getStateText(){
    switch(this.state){
      case AuthenticatorCompState.LOGIN:
        return "Inicia Sesion";
      case AuthenticatorCompState.REGISTER:
        return "Registrate";
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Olvidó su contraseña"
    }
  }
}


export enum AuthenticatorCompState{
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}