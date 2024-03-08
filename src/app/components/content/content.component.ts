import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { DoctorService } from 'src/app/services/doctor-service/doctor.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  doctors:User[] = [];
  addDoctors:User[] = [];
  doc: User = new User();

  constructor(private doctorService: DoctorService, public auth: AuthService){}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      for(var doctor of this.doctors){
        if(doctor.specialty != null){
          if(doctor.email == 'daniela@gmail.com' || doctor.email == 'pedro@gmail.com' || doctor.email == 'antonia@gmail.com' || doctor.email == 'antonio@gmail.com' || doctor.email == 'jose@gmail.com' || doctor.email == 'maria@gmail.com' || doctor.email == 'francisco@gmail.com' || doctor.email == 'francisca@gmail.com' || doctor.email == 'andres@gmail.com'){
            this.addDoctors.push(doctor);
            if(doctor.sex == "Femenino"){
              doctor.specialty = doctor.specialty.substring(0, doctor.specialty.length -1);
              doctor.specialty = doctor.specialty.concat('a');
            }
          }
        }
      }
    })
  }
}
