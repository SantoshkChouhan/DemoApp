import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pageLists/home/home.component';
import { AboutusComponent } from './pageLists/aboutus/aboutus.component';
import { JobsComponent } from './pageLists//jobs/jobs.component';
import { ClientsComponent } from './pageLists/clients/clients.component';
import { EmployersComponent } from './pageLists/employers/employers.component';
import { ContectusComponent } from './pageLists/contectus/contectus.component';
import { NavbarComponent } from './homePages/navbar/navbar.component';
import { HeroesComponent } from './homePages/heroes/heroes.component';
import { FooterComponent } from './homePages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    JobsComponent,
    ClientsComponent,
    EmployersComponent,
    ContectusComponent,
    NavbarComponent,
    HeroesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
      {
        path: '', component: HomeComponent
      },
      {
        path: 'aboutus', component: AboutusComponent
      },
      {
        path: 'jobs', component: JobsComponent
      },
      {
        path: 'clients', component: ClientsComponent
      },
      {
        path: 'employers', component: EmployersComponent
      },
      {
        path: 'contectus', component: ContectusComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
