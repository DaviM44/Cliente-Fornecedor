import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  url = "http://localhost:3001/fornecedor";
  constructor(private http: HttpClient) { }

  getFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url);
  }

save(fornecedor: Fornecedor): Observable<Fornecedor>{
  return this.http.post<Fornecedor>(this.url, fornecedor);

}

update(fornecedor: Fornecedor): Observable<Fornecedor>{
  return this.http.put<Fornecedor>(`${this.url}/${fornecedor.id}`, fornecedor);
}

delete(fornecedor: Fornecedor): Observable<void>{
  return this.http.delete<void>(`${this.url}/${fornecedor.id}`);

}

}
