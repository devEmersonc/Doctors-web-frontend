import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DoctorService } from 'src/app/services/doctor-service/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit{

  doctors:User[] = [];
  addDoctors:User[] =[];

  constructor(private doctorService: DoctorService){}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      for(var doc of this.doctors){
        if(doc.specialty != null){
          this.addDoctors.push(doc);
          if(doc.sex == 'Mujer'){
            doc.specialty.name = doc.specialty.name.substring(0, doc.specialty.name.length -1);
            doc.specialty.name = doc.specialty.name.concat('a');
          }
        }
      }      
    })
  }
}
