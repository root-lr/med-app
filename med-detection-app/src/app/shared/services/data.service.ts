import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private collectionName: string = "events";
  private itemsCollection: AngularFirestoreCollection<Event>

  constructor(private firestore: AngularFirestore) { 
    this.itemsCollection = this.firestore.collection<Event>(this.collectionName, ref => ref.orderBy("created_at", "desc"));
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


  //transform data to slider format
  transformDataToSliderFormat(dataFbSlider: any): any[]{

    let finalDataSlider: any[] = [];

    dataFbSlider.forEach((data:any) =>{
      let title: any = data.payload.doc.data()['title'];
      //let description: string = "";
      let imageUrl: any = data.payload.doc.data()['imgUrl'];
      //let views: any = [];
      let itemSlider: any = {title: title,  imageUrl: imageUrl, views: [], alt: title, thumbImage: imageUrl };
      finalDataSlider.push(itemSlider);
      // return dataList;
    })


    return finalDataSlider;

  }//end transformDataToSliderFormat




  //cree un cours
  createEvents(data:any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collectionName)
        .add(data)
        .then((res:any) => {}, (err:any) => reject(err));
    });
  }//end createEvents

  //met a jour un cours
  updateEvents(data: any) {

    //console.log(data); 
    
    return this.firestore
      .collection(this.collectionName)
      .doc(data.id)
      .set(data, { merge: true });
  }//end updateEvents

  //recupere la liste des cours
  getEventsList() {
    return this.itemsCollection.snapshotChanges();
    //return  this.firestore.collection(this.collectionName).snapshotChanges(['added', 'removed', 'modified']);
    
  }//end getEventsList
  
  //supprimer les cpurs
  deleteEvents(data:any) {
    return this.firestore
      .collection(this.collectionName)
      .doc(data.payload.doc.id)
      .delete();
  }//end deleteEvents

}
