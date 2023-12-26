import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public isClassEnabled = false;
  showNotifications = false;
  items : MenuItem[];
  displaySidebar = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router){

  }

  ngOnInit() {

}


  efectos(){
    this.isClassEnabled = !this.isClassEnabled;
}

logout(){
  this.localStorageService.removeItem('userApiKey');
  setTimeout(() => this.router.navigateByUrl('/login'), 500);
}
}
