import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

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
