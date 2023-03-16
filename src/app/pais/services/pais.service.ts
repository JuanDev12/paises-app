import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(private http: HttpClient) {}

  buscarPaisPorNombre(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPaisByCodigo(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarPaisesByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
