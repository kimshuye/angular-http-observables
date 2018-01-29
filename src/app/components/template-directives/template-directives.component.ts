import { Component, OnInit } from '@angular/core';
import { CommonModule, NgSwitch} from '@angular/common';

@Component({
  selector: 'app-template-directives',
  templateUrl: './template-directives.component.html',
  styleUrls: ['./template-directives.component.css']
})
export class TemplateDirectivesComponent implements OnInit {
  private showHeading;
  private leader;
  private names;
  private name;
  private colors;

  constructor() { }

  ngOnInit() {
    this.showHeading = true;
    this.leader = true;
    this.names = ['John','Sam','Jeff'];
    this.name = "Mike";
    this.colors =['Red','Blue','Green'];
  }

  clickF(e){
    this.showHeading = this.leader = e;
    console.log("Click : "+e);
  }
  inputBox(e){
    this.name = e;
    console.log("radio : "+e);
  }

}
