import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Form } from '../models/form';
import { FormService } from '../services/form.service';

@Injectable()
export class FormResolver {

  constructor(private formService: FormService) {
  }

  public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Form> {
    return await this.formService.getForm().toPromise();
  }
}
