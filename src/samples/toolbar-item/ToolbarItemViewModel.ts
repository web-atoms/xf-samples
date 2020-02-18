import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "../../service/http/MovieService";

export default class ToolbarItemViewModel extends AtomViewModel {

    public movie: IMovie;

    public movies: IPagedList<IMovie>;

    @Inject
    private movieService: MovieService;

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init() {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }
}
