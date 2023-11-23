import { Component } from '@angular/core';
import { appConfig } from '../../assets/data/app.config'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    alert(appConfig.baseUrl)
  }

}
