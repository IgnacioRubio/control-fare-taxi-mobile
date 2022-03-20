import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'work-report',
    pathMatch: 'full'
  },
  {
    path: 'work-report',
    loadChildren: () => import('./work-report/work-report.module').then( m => m.WorkReportPageModule)
  },
  {
    path: 'work-report/:workReportId/fare',
    loadChildren: () => import('./fare/fare.module').then( m => m.FarePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
