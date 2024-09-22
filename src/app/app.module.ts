import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from "@angular/material/button"
import { MatBottomSheetModule } from "@angular/material/bottom-sheet"
import { MatCardModule } from "@angular/material/card";
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AddProductComponent } from './tools/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    InventoryComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
