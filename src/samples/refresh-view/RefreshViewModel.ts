import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "../../service/http/MovieService";

export default class RefreshViewModel extends AtomViewModel {

    public movie: IMovie;

    public movies: IPagedList<IMovie>;

    public isListRefreshing: boolean = false;

    @Inject
    private movieService: MovieService;

    public async init() {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }

    public async refresh() {
        this.movies.value.replace(this.movies.value.reverse());
        this.isListRefreshing = false;
    }
}
