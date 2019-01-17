import { Component , OnInit , OnChanges , SimpleChanges, DoCheck} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnChanges , OnInit , DoCheck {
  title = 'ngdemo';
  isShow = true;
  userList = [
    {
      name: 'zhangsan'
    },
    {
      name:'lisi'
    },
    {
      name: 'wangwu'
    }
  ]
  sendMsgFather () {
  }

  ngOnChanges (changes: SimpleChanges) {
    console.log('change', changes)
  }

  ngOnInit () {
    console.log('components is ready')
  }

  ngDoCheck () {
  }

  changeMsg (event) {
    console.log(event)
  }
  clickMe() {
    console.log('click')
    this.userList.push({
      name: 'new User'
    })
  }
}
