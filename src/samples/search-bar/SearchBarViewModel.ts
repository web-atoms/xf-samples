import { Inject } from "@web-atoms/core/dist/di/Inject";
import { AtomViewModel, Watch } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "../../service/http/MovieService";

export default class SearchBarViewModel extends AtomViewModel {

    public movie: IMovie;

    public movies: IPagedList<IMovie>;

    public searchFromList: IMovie[];

    public searchText: string = "";

    @Inject
    private movieService: MovieService;

    public async init() {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
        this.searchFromList = this.movies.value.map((x) => x);
    }

    public search() {
        this.movies.value.replace(this.searchFromList.filter((x) => x.name.toLowerCase().search(this.searchText.toLowerCase()) > -1
            || this.searchText === ""));
    }

    @Watch
    private watchSearch() {
        if (this.searchText || this.searchText === "") {
            this.search();
        }
    }
}
