import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coctailObject } from "../models/i-coctail-object";

@Injectable({
    providedIn: 'root'
})
export class CoctailApi {
    public baseUrl: string = "";
    constructor(private _http: HttpClient) { }


    public GetByName(coctailName: string): Observable<coctailObject> {
        let url: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailName}`;
        return this._http.get(url) as Observable<coctailObject>;
    }

    public GetByCategory(coctailCategory: string): Observable<coctailObject> {
        let url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${coctailCategory}`;
        return this._http.get(url) as Observable<coctailObject>;
    }

    public GetByIngredient(coctailIngredient: string): Observable<coctailObject> {
        let url: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${coctailIngredient}`;
        return this._http.get(url) as Observable<coctailObject>;
    }

    public GetByID(drinkID): Observable<coctailObject> {
        let url: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
        return this._http.get(url) as Observable<coctailObject>;
    }

}