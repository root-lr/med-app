import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Rdv } from '../model/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

 
  private collectionName: string = "rdv";
  private itemsCollection: AngularFirestoreCollection<Rdv>

  constructor(private firestore: AngularFirestore) { 
    this.itemsCollection = this.firestore.collection<Rdv>(this.collectionName, ref => ref.orderBy("created_at", "desc"));
  }
  //transform data
  transformData(dataFb: any): any[]{

    let finalData: any[] = [];

    dataFb.forEach((data:any) =>{
      let created_at: any = data.payload.doc.data()['created_at'];
      let title: any = data.payload.doc.data()['date_rdv'];
      let description: any = data.payload.doc.data()['heure_rdv'];
      let imageUrl: any = data.payload.doc.data()['patient'];
      let views: any = data.payload.doc.data()['note'];
      let item: any = {created_at: created_at, title: title, description: description,  imageUrl: imageUrl, views: views, };
      finalData.push(item);
      // return dataList;
    })


    return finalData;

  }//end transformData



  //cree un cours
  createRdv(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .add(data)
        .then((res:any) => {}, (err:any) => reject(err));
    });
  }//end createEvents

  //met a jour un cours
  updateRdv(data: any) {

    //console.log(data); 
    
    return this.firestore
      .collection(this.collectionName)
      .doc(data.id)
      .set(data, { merge: true });
  }//end updateEvents

  //recupere la liste des cours
  getRdvList() {
    return this.itemsCollection.snapshotChanges();
    //return  this.firestore.collection(this.collectionName).snapshotChanges(['added', 'removed', 'modified']);
    
  }//end getEventsList
  
  //supprimer les cpurs
  deleteRdv(data:any) {
    return this.firestore
      .collection(this.collectionName)
      .doc(data.payload.doc.id)
      .delete();
  }//end deleteEvents
}
