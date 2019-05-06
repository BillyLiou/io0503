import { Component } from '@angular/core';
// import { NavController } from '@ionic/angular';

declare let cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  execute() {
    // alert('恭喜您點擊成功');
    // cordova.plugins.testCor1.coolMethod('成功', result => alert(result),error => alert(error));
    cordova.plugins.testCor1.functionA();
  }


  execute2() {
    cordova.plugins.testCor1.coolMethod('成功', result => alert(result),error => alert(error));
  }

  method1() {
    cordova.plugins.TestPlugin.coolMethod('成功了！！！', result => alert(result),error => alert(error));
  }

}
