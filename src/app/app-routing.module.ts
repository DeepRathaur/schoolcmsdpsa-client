import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [    
    { path: '',  loadChildren: './front/front.module#FrontModule'},
    { path: 'secure-panel', loadChildren: './backend/backend.module#BackendModule'},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
