import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie.services'

@Component({
    selector: 'app-topmovie-list',
    templateUrl: './topmovie-list.component.html',
    styleUrls: ['./topmovie-list.component.css']
})
export class TopMovieListComponent implements OnInit {
    topMovieList:any;
    topMovieListData:any;
    constructor(private movieService:MovieService) { }
    
    ngOnInit() {
        this.getUpComingMovieList();
    }
    
    getUpComingMovieList(){
        this.movieService.getTopRatedMovies().subscribe((res: any) => {
            let movieList = res.results.filter(result => {
                return result;
            })
            this.success(movieList) 
        });        
    }

    // Get top movie list success
    success(data){
        this.topMovieListData = data;       
    }    
}