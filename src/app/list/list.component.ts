import { Component , OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(public  _shared :SharedService){
  }
  ngOnInit(): void {
    
  }
 


}
