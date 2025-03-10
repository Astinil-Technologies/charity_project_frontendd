import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ProjectComponent } from './project/project.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
    
    {path:'about', component:AboutComponent},
    {path:'donate', component:DonateComponent},
    {path:'contact', component:ContactComponent},
    {path:'sponsorship', component:SponsorshipComponent},
    {path:'project', component:ProjectComponent},
    {path:'volunteer', component:VolunteerComponent},
    {path:'faq', component:FaqComponent}

];
