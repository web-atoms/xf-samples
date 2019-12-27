import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import MenuService from "../service/menu-service/MenuService";

export default class AppHostViewModel extends AtomViewModel {

    @Inject
    public menuService: MenuService;

    @Inject
    public navigationService: NavigationService;

    public currentPage: any;

    @Load({ init: true })
    public async load() {

        this.registerDisposable(
            this.navigationService.registerNavigationHook( (url, options) => this.openPage(url, options) ));

        this.menuService.add("Alert", () => null);
    }

    public async openPage(url: AtomUri, options: IPageOptions) {
        if (!options) { return; }
        if (options.target && options.target !== "root") { return; }

        const { view, disposables } =
            await AtomLoader.loadView<AtomXFControl>(url, this.app, true, () => new AtomWindowViewModel(this.app));
        const urlString = url.toString();
        (view as any)._$_url = urlString;

        this.currentPage = view;

        disposables.add(() => {
            if (this.currentPage === view) {
                this.currentPage = null;
            }
        });
    }

}
