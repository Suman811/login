import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
constructor(private route: Router){}
logout(){
  localStorage.clear();
  this.route.navigate(["/"]);
}

}
