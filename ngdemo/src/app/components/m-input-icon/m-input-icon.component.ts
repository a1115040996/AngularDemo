import {Component, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MInputComponent} from '../m-input/m-input.component';

@Component({
  selector: 'app-input-icon',
  templateUrl: './m-input-icon.component.html',
  styleUrls: ['./m-input-icon.component.less']
})
export class MInputIconComponent{
  @Input () icon;
  constructor () {
  }
}
