import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/books"

  constructor(private httpClient: HttpClient) { }

  private getListURL = "http://localhost:8080/books1"
  getBookList(userId:number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.getListURL}/${userId}`);
  }

  createBook(userId:number,book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${userId}`, book);
  }

  
  getBookByBookId(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }
  

  private getListByIdURL = "http://localhost:8080/books2"
  getBookListByUserId(userId:number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.getListByIdURL}/${userId}`);
  }

  //Book Delete by Id
  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }

  //Book Update by Id
  private updateBookByIdURL = "http://localhost:8080/books3"
  updateBook(bookId:number,book:Book):Observable<Object>{
    return this.httpClient.put(`${this.updateBookByIdURL}/${bookId}`,book);
  }
}
