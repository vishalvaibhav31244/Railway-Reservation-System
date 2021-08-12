import { Component, OnInit } from '@angular/core'; 
import {TrainsinfoService} from '../trainsinfo.service'

@Component({
selector: 'app-trainlist',
templateUrl: './trainlist.component.html',
styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent implements OnInit {
displayedColumns: 
string[] =['TrainNo','Trainname','From','To','Depart','Arrival','Availability'];


constructor(private info:TrainsinfoService) { }
 trains=[];

ngOnInit() { 
  this.trains=this.info.gettrain();
console.log(this.trains);

}
}
