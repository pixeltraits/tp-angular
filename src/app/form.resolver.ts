import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IndicateurAmbitionProjetResolver {

  constructor(private formService: FormService) {
  }

  public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Form> {
    return await this.formService.getForm().toPromise();
  }
}
