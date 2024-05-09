// Remove these imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
];

// Remove this NgModule declaration
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
