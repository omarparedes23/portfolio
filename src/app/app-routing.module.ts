import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: 'PortfolioComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
