import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie.services'

@Component({
    selector: 'app-upmovie-list',
    templateUrl: './upmovie-list.component.html',
    styleUrls: ['./upmovie-list.component.css']
})
export class UpMovieListComponent implements OnInit {
    upMovieList:any;
    upMovieListData:any;
    constructor(private movieService:MovieService) { }
    
    ngOnInit() {
        this.getUpComingMovieList();
    }
    
    getUpComingMovieList(){
        this.movieService.getUpComingMovies().subscribe((res: any) => {
            let movieList = res.results.filter(result => {
                return result;
            })
            this.success(movieList) 
        });        
    }

    // Get student list success
    success(data){
        this.upMovieListData = data;       
    }    
}