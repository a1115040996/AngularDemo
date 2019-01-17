import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './m-input.component.html',
  styleUrls: ['./m-input.component.less']
})
export class MInputComponent implements OnInit {
  @Input () model;
  @Output () modelChange = new EventEmitter();
  mInputTemp = '';
  constructor() {

  }

  ngOnInit() {
    this.mInputTemp = this.model;
  }
  changeInput () {
    console.log('change', this.mInputTemp)
    this.model = this.mInputTemp;
    this.modelChange.emit(this.model);
  }

}
