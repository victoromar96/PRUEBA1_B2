import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  fechaNac="1996-05-22";
  edadActual;

  CalcularEdad(){
    if(this.fechaNac){
      const convertAge = new Date(this.fechaNac);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edadActual = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

}
