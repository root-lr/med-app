import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
var today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

@Injectable({
  providedIn: 'root'
})
export class DataServices {

  public observer: Subscriber<{}>;
 

  constructor(private http: HttpClient) { }

  /*------------------START GET METHODE-------------------*/ 

   // get type intervention
   getTypeIntervention(): Observable<any>{
    return this.http.get(environment.apiUrl + 'params/listing-type-interventions');
   }

  // get moyen appel
  getMoyenApel(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

  // get moyen appel
  getHopital(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

   // get groupement
  getGroupement(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

  // get compagnie
  getCompagnie(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

  // get caserne
  getCaserne(): Observable<any>{
   return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

   // get victimes menu statistiques
   getVictimes(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
   }

   // get vehicule
   getVehicule(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
   }

  // get profil
  getProfil(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

  // get victime menu operation
  getVictime(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

    // get intervention
  getIntervention(): Observable<any>{
    return this.http.get( environment.apiUrl + 'getAllBusinesses');
  }

   /*------------------END GET METHODE-------------------*/ 


   /*------------------START POST METHODE-------------------*/   
   /*------------------END POST METHODE-------------------*/ 



  

}
