import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.scss']
})
export class CounsellingComponent implements OnInit {

  constructor() { }

  Calendly:any

  @ViewChild('container') container: ElementRef;
    
  ngOnInit() {
    this.Calendly.initInlineWidget({
      url: 'https://calendly.com/trpakistan/al-tijaarat-al-raabehah-counselling',
      parentElement: this.container.nativeElement
    });
  }

}
