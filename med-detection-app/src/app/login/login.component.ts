import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/services/auth.service';
import { User} from '../shared/model/user.model';
import { UtilsService} from '../shared/services/utils.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
    private utils: UtilsService) { }
  item: User = new User();

  ngOnInit() {

  }
  login() {
    console.log(this.item)
    if (this.item.canSave() == false) {
      this.utils.notifyErrorMessage(this.item.getErrorMessage() , "Connexion")
    }
    this.auth.login(this.item).then((result) => {
      //this.utils.notifySuccessMessage('Utilisateur crée avec succès' , 'Inscription')
    })
    .catch((error) => {
      // Une erreur s'est produite lors de la création de l'utilisateur
    });

  }

  register(){
    if (this.item.canSave() == false) {
      this.utils.notifyErrorMessage(this.item.getErrorMessage() , "Inscription")
    }
    this.auth.login(this.item)
    .then((result) => {
      this.utils.notifySuccessMessage('Utilisateur crée avec succès' , 'Inscription')
    })
    .catch((error) => {

    });
  }

  logout() {
    this.auth.logout();
  }

}
