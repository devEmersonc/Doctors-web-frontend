import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DoctorService } from 'src/app/services/doctor-service/doctor.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  doctors:User[] = [];

  constructor(private doctorService: DoctorService){}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    })
  }
}
