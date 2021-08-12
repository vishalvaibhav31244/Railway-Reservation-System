import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class TrainsinfoService {


getdata=[
{TrainNo: 2393, Trainname: 'Sampoorna Kranti Covid SF SPL',From: 'RAJENDRA NAGAR T',To:'NEW DELHI',Depart:'18:10', Arrival: '02.45',Availability: 'Yes'},
{TrainNo: 93240, Trainname: 'Kota Pnbe Express',From: 'Patna',To:'Kota',Depart: '11.50', Arrival: '15:25',Availability: 'Yes'},
{TrainNo: 2150, Trainname: 'DNR PUNE SPECIAL',From:'Danapur',To:'Pune',Depart: '10.50', Arrival: '05.30',Availability: 'Yes'},
{TrainNo: 2565, Trainname: 'Toofan Express',From:'Patna',To:'Lucknow',Depart: '11.31', Arrival: '09.05',Availability: 'Yes'},
{TrainNo: 2296, Trainname: 'Sanghamitra Express',From:'Danapur',To:'Vijayawada',Depart: '20.10', Arrival: '05.30',Availability: 'Yes'},
{TrainNo: 2214, Trainname: 'SHALIMAR  Express',From:'Patna',To:'Howrah',Depart: '1.30', Arrival: '00.30',Availability: 'Yes'},
{TrainNo: 2024, Trainname: 'Pnbe Hwh Special',From:'patna',To:'uttrakhand',Depart: '12.50', Arrival: '09.30',Availability: 'Yes'},
{TrainNo: 9046, Trainname: 'TAPTI GANGA SPL',From:'patna',To:'surat',Depart: '9.00', Arrival: ' 18.40',Availability: 'Yes'},
{TrainNo: 5956, Trainname: 'BRAHMPUTRA SPL',From:'patna',To:'Guwahati',Depart: '14.40', Arrival: '14.30',Availability: 'Yes'},
{TrainNo: 6514, Trainname: 'Bangalore Special',From:'Patna',To:'Bangaluru',Depart: '20:20', Arrival: '21:00',Availability: 'Yes'},
];


constructor(){} 
gettrain(){
  return this.getdata;
}
}
