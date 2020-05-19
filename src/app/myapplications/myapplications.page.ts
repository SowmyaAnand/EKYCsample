import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.page.html',
  styleUrls: ['./myapplications.page.scss'],
})
export class MyapplicationsPage implements OnInit {
  slides = [
    {
      title: "Angular Ionic mobile application",
      description: "This is a simple app with <b>REST API</b> and <b>observables</b> to get information from the <b>Github API</b>.",
      image: "assets/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/ica-slidebox-img-2.png",
    },
    {
      title: "What is Angular?",
      description: "<b>Angular</b> is a framework for building client applications in HTML and TypeScript that compiles to JavaScript.",
      image: "assets/ica-slidebox-img-3.png",
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.slides.length);
  }

}
