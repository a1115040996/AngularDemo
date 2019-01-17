import {Directive, OnInit, Input, OnChanges, Output, EventEmitter, DoCheck} from '@angular/core';

@Directive({
  selector: '[bind]',
})
export class BindDirective implements  OnInit , DoCheck {

  constructor() {
    console.log('指令初始化，输入的初始数据为');
  }
  @Input('bind') bindMsg: string;


  ngOnInit () {
  }

  ngDoCheck () {
    console.log('指令数据发生变化',this.bindMsg)
  }
}
