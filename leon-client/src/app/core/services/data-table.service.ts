import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Interfaces
import { IPaginatorParamters, IPerson, IRequestPersons } from 'src/app/interfaces';
// Global
import { API_URL} from '../../global';


@Injectable()
export class DataTableService {

  constructor(private http: HttpClient) { }

  getPersons(params: IPaginatorParamters): Observable<IRequestPersons> {
   const {page, size} = params;
    return this.http.get<IRequestPersons>(API_URL.PERSONS.GET.PERSONS, {
      params: {
        page,
        size
      }
    })
  };

  deletePerson(person: IPerson): Observable<IPerson> {
    return this.http.delete<IPerson>(API_URL.PERSONS.DELETE.PERSONS, {body: {person}});
  }

  addPerson(person: IPerson): Observable<IPerson> {
    return this.http.post<IPerson>(API_URL.PERSONS.POST.PERSONS, person); 
  };

  editPerson(person: IPerson): Observable<IPerson> {
    return this.http.patch<IPerson>(API_URL.PERSONS.PATCH.PERSONS, person);
  }
}
