import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private collectionName: string = "patients";
  private itemsCollection: AngularFirestoreCollection<Patient>

  constructor(private firestore: AngularFirestore) { 
    this.itemsCollection = this.firestore.collection<Patient>(this.collectionName, ref => ref.orderBy("created_at", "desc"));
  }
  //transform data
  transformData(dataFb: any): any[]{

    let finalData: any[] = [];

    dataFb.forEach((data:any) =>{
      let created_at: any = data.payload.doc.data()['created_at'];
      let title: any = data.payload.doc.data()['title'];
      let description: any = data.payload.doc.data()['description'];
      let imageUrl: any = data.payload.doc.data()['imageUrl'];
      let views: any = data.payload.doc.data()['views'];
      let item: any = {created_at: created_at, title: title, description: description,  imageUrl: imageUrl, views: views, };
      finalData.push(item);
      // return dataList;
    })


    return finalData;

  }//end transformData




  //cree un cours
  createPatient(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .add(data)
        .then((res:any) => {}, (err:any) => reject(err));
    });
  }//end createEvents

  //met a jour un cours
  updatePatient(data: any) {

    //console.log(data); 
    
    return this.firestore
      .collection(this.collectionName)
      .doc(data.id)
      .set(data, { merge: true });
  }//end updateEvents

  //recupere la liste des cours
  getPatientList() {
    return this.itemsCollection.snapshotChanges();
    //return  this.firestore.collection(this.collectionName).snapshotChanges(['added', 'removed', 'modified']);
    
  }//end getEventsList
  
  //supprimer les cpurs
  deletePatient(data:any) {
    return this.firestore
      .collection(this.collectionName)
      .doc(data.payload.doc.id)
      .delete();
  }//end deleteEvents
}
