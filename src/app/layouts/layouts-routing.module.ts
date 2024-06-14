import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'demandes',
        loadChildren: () => import('../features/demandes/demandes.module').then(d => d.DemandesModule)
      },
      {
        path: 'agents',
        loadChildren: () => import('../features/agents/agents.module').then(d => d.AgentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
