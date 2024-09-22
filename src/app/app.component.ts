import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private loginDialog: MatDialog){}

  ngOnInit(): void {
    
  }

  title = 'bazarte';

  onAccessClick(){
    this.loginDialog.open(AuthenticatorComponent, {
      width: '400px',  // Puedes ajustar el tamaño a lo que desees
      panelClass: 'custom-dialog-container'
    });
  }
}
