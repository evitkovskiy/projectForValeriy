import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';

// Components
import { AppComponent } from './app.component';
import { MessageComponent } from './shared/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent // Don't bind *ngIf in messageModile
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
