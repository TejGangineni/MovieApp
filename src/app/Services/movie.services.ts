import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { Movie } from '../Models/Movie'
@Injectable(
  {
providedIn: 'root'
  }
)
 export class MovieService {

    private apiKey = "?api_key=304839882a8415e6ff5a8def7fec9ec1";
    private apiUrl:string = "https://api.themoviedb.org/3/movie/";
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    
    constructor(private http: HttpClient) { 
      
    }

    // getPopularMovies(total: number = 5, region: string = 'CA'): Observable {
    //   const url = `${this.apiUrl}&region=${region}`;
  
    //   return range(1, total).pipe(
    //     mergeMap(page => {
    //       return this.http.get(`${url}&page=${page}`)
    //         .pipe(
    //           map(res => res.results),
    //           retry(3), // retry a failed request up to 3 times
    //           catchError(this.handleError) // then handle the error
    //         );
    //     }),
    //   );
    // }

   getTopRatedMovies():Observable<Movie> {
    return this.http.get<Movie>(this.apiUrl+ "top_rated" + this.apiKey, this.httpOptions)    
   };
   
   getUpComingMovies():Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl+ "upcoming" + this.apiKey, this.httpOptions); 
   };

 }