import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  private title;
  private imageLink;
  private note;

  constructor() {

   }

  ngOnInit() {
    this.title = 'Hello World';
    this.imageLink = 'http://lorempixel.com/400/200';
    this.note = "";
  }

  runClick(){
    console.log('You Clicked...');
  }

  saySomething(e){
    console.log(e);
  }

}
