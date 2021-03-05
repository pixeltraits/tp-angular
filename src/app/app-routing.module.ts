import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormResolver } from './core/resolvers/form.resolver';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
    resolve: { form: FormResolver }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
