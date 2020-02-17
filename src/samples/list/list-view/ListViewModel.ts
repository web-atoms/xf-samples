import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "../../../service/http/MovieService";

export default class ListViewModel extends AtomViewModel {

    public movie: IMovie;

    public movies: IPagedList<IMovie>;

    public isListRefreshing: boolean = false;

    @Inject
    private movieService: MovieService;

    @Inject
    private navigationService: NavigationService;

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init() {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }

    // edit and delete methods are used in MenuItem
    public async edit() {
        await this.navigationService.alert("Edit clicked");
    }

    public async delete() {
        await this.navigationService.alert("Delete clicked");
    }

    // refresh method is used RefreshView page
    public async refresh() {
        this.movies.value.replace(this.movies.value.reverse());
        this.isListRefreshing = false;
    }
}
