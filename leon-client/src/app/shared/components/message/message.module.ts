import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [MessageComponent],
  entryComponents: [MessageComponent]
})
export class MessageModule {}
