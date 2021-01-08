import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyworksComponent} from './myworks/myworks.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {CommentComponent} from './comment/comment.component';


const routes: Routes = [
  {
    path: 'works',
    component: MyworksComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'comment',
    component: CommentComponent,
  },
  {
    path: '',
    component: AboutComponent,
  },
  {path: '**', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
