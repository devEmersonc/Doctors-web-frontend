import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = "http://localhost:8080/api/patient"

  constructor(private http: HttpClient) { }

  registerPatient(patient: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/register`, patient).pipe(
      catchError(e => {
        if(e.status == 400){
          return throwError(() => e);
        }

        Swal.fire(e.error.message, e.error.error, "error");
        return throwError(() => e);
      })
    )
  }
}
