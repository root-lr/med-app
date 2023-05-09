// Chat users
export class User {
  id?: number
  username?: string
  password?: string  
  email?:string
  phone?:string

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
    
      
    //email
    if(this.email === undefined || this.email === null ){
      this.errorMessage = "Veuillez saisir votre email"; return false;
    }
    //mot de passe
    if(this.password === undefined || this.password === null ){
      this.errorMessage = "Veuillez saisir un mot de passe"; return false;
    }

    //mot de passe
    if(this.phone === undefined || this.phone === null ){
      this.errorMessage = "Veuillez saisir un téléphone"; return false;
    }

    
      return true;
    }//end canSave


    //check for edit
    canEdit(): boolean {
    
     


    
      return true;
    }//end canEdit
 
}

