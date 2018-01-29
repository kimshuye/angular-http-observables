import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { TemplateDirectivesComponent } from './components/template-directives/template-directives.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TemplateDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
