import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class DataService {
    constructor(private http: HttpClient){

    }
    baseUrl : String = 'http://localhost:3000';
    

    create(data:Object): Observable<Object>{
        return this.http.post(this.baseUrl+'/create',data)

    }
    getData(): Observable<Object>{
        return this.http.get(this.baseUrl+'/getDemo')

    }
}
