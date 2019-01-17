/*
* 设置元素高度指令
* [appHeight] = "'200px'";
* */
import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective implements OnInit {
  @Input ('appHeight') inputHeight: any;
  constructor(public element: ElementRef) {
  }
  ngOnInit () {
    this.element.nativeElement.style.height = this.inputHeight;
  }
}
