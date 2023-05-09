import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from '../app.routing';
import { ComponentsModule } from '../components/components.module';

import { AppComponent } from '../app.component';

import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    //AppComponent,
    //AdminLayoutComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }

