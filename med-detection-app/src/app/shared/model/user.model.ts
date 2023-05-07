// Chat users
export class User {
  id?: number
  last_name?: string
  first_name?: string
  telephone?: string
  password?: string
  email?:string

  private errorMessage: string;

  constructor(){
    this.errorMessage = "";
  }
  
  //get error message
  getErrorMessage(): string {
    return this.errorMessage;
  }//end getErrorMessage
  
    //check for save
    canSave(): boolean {
    
      //nom
      if(this.last_name === undefined || this.last_name === null ){
        this.errorMessage = "Veuillez saisir votre nom"; return false;
      }
    
      //longitude
      if(this.first_name === undefined || this.first_name === null ){
      this.errorMessage = "Veuillez saisir votre prenom"; return false;
    }
    //email
    if(this.email === undefined || this.email === null ){
      this.errorMessage = "Veuillez saisir votre email"; return false;
    }
      //latitude
      if(this.telephone === undefined || this.telephone === null ){
      this.errorMessage = "Veuillez saisir votre téléphone"; return false;
    }
    //mot de passe
    if(this.password === undefined || this.password === null ){
      this.errorMessage = "Veuillez saisir un mot de passe"; return false;
    }

    
      return true;
    }//end canSave


    //check for edit
    canEdit(): boolean {
    
      //nom
      if(this.last_name === undefined || this.last_name === null || this.last_name.trim() === ""){
        this.errorMessage = "Veuillez saisir votre nom"; return false;
      }
    
      //longitude
      if(this.first_name === undefined || this.first_name === null || this.first_name.trim() === ""){
      this.errorMessage = "Veuillez saisir votre prenom"; return false;
    }
      //latitude
      if(this.telephone === undefined || this.telephone === null || this.telephone.trim() === ""){
      this.errorMessage = "Veuillez saisir votre téléphone"; return false;
    }


    
      return true;
    }//end canEdit
 
}

