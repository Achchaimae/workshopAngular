import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent  implements OnInit {
  
  hero ={
    name :'' ,
    power : 0,
    imageUrl : ''
  }
 
  ajout(){
   this._shared.heros.push(this.hero);
    this.hero ={
      name :'' ,
      power : 0,
      imageUrl : ''
    }
    
    
  }
  constructor( public _shared : SharedService){

  }
  ngOnInit(): void {
    
  }

}
