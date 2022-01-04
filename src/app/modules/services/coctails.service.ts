import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoctailApi } from 'src/app/apis/coctail.api';
import { coctailObject } from 'src/app/models/i-coctail-object';
import { sortBy } from 'lodash';
import {map} from 'rxjs/operators';
import { ICoctail } from 'src/app/models/i-coctail';

@Injectable({
  providedIn: 'root'
})

export class CoctailService {

  constructor(private _coctailApi: CoctailApi) { }


  public GetCoctailsByName(coctailName: string): Observable<coctailObject> {
    return this._coctailApi.GetByName(coctailName).pipe(map(coctail => {
      coctail.drinks = sortBy(coctail.drinks, "strDrink");
      return coctail;
    }))
  }

  public GetCoctailsByCategory(coctailCategory: string): Observable<coctailObject> {
    return this._coctailApi.GetByCategory(coctailCategory).pipe(map(coctail => {
      coctail.drinks = sortBy(coctail.drinks, "strDrink");
      return coctail;
    }))
  }

  public GetCoctailsByIngredient(coctailIngredient: string): Observable<coctailObject> {
    return this._coctailApi.GetByIngredient(coctailIngredient).pipe(map(coctail => {
      coctail.drinks = sortBy(coctail.drinks, "strDrink");
      return coctail;
    }))
  }

  public GetCoctailByID(drinkID: string): Observable<coctailObject> {
    return this._coctailApi.GetByID(drinkID)
  }

}
