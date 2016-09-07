import {Component, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ValuesService} from '../../common/services/values.service';

@Component({
  selector: 'home-page',
  styleUrls: [],
  templateUrl: 'app/pages/home/home.html'
})
export default class HomeComponent {

  isOpen = false;

  groups: Observable<any>;

  removeDynamic() {
    //this.groups.pop();
  }


  constructor(private values : ValuesService) {
    this.groups = this.values.getValuesToGenerateValuesArray();
  }
}
