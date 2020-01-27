import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import addFormSamples from "../samples/form/FormSamples";
import addListSamples from "../samples/list/ListSamples";
import addToggleButtonBar from "../samples/toggle-button-bar/addToggleButtonBar";
import MenuService from "../service/menu-service/MenuService";

@DISingleton({ globalVar: "bridge.navigationService"})
class CLRNavigationService {
    public async pushPageAsync(root, page) {
        return null;
    }
}

declare var bridge: any;

export default class AppHostViewModel extends AtomViewModel {

    public owner: any;

    @Inject
    public menuService: MenuService;

    @Inject
    public navigationService: NavigationService;

    @Inject
    public clrNavigation: CLRNavigationService;

    public message: string = "Tap on Hamburger to continue";

    public menus: any;

    public currentPage: any;

    @Load({ init: true })
    public async load() {

        this.registerDisposable(
            this.navigationService.registerNavigationHook( (url, options) => this.openPage(url, options) ));

        addFormSamples(this.menuService);
        addListSamples(this.menuService);

        addToggleButtonBar(this.menuService);

    }

    public async openPage(url: AtomUri, options: IPageOptions) {
        if (!options) { return; }
        if (options.target && options.target !== "root") { return; }

        const { view, disposables } =
            await AtomLoader.loadView<AtomXFControl>(url, this.app, true, () => new AtomWindowViewModel(this.app));
        const urlString = url.toString();
        (view as any)._$_url = urlString;

        this.currentPage = view;

        // tslint:disable-next-line: no-console
        console.log("Page created");

        await bridge.navigationService.pushPageAsync(this.owner.element, view.element, options.clearHistory || false);

        disposables.add(() => {
            if (this.currentPage === view) {
                this.currentPage = null;
            }
        });

        return view;
    }

}
