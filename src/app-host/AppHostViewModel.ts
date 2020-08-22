import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import addAlertSample from "../samples/alert/AlertSamplePage";
import addBox from "../samples/box/BoxViewSample";
import addCalendarSamples from "../samples/calendar/calendarSamples";
import addCarouselPage from "../samples/carousel/carousel-page/CarouselPageSample";
import addCarousel from "../samples/carousel/carousel-view/CarouselSample";
import addCollectionViewSample from "../samples/collection-view/CollectionViewSamplePage";
import addDatabaseSamples from "../samples/database/addDatabaseSamples";
import addFormSamples from "../samples/form/FormSamples";
import addImage from "../samples/image/ImageSample";
import addLayoutSample from "../samples/layout/multiple-content/LayoutSample";
import addSingleContentSample from "../samples/layout/single-content/Sample";
import addListSamples from "../samples/list/ListSamples";
import addMenuItem from "../samples/menu-item/MenuSample";
import addPopupSample from "../samples/popup/PopupSample";
import addRefreshSample from "../samples/refresh-view/RefreshViewSample";
import addSwitchSample from "../samples/switch/SwitchSamplePage";
import addTabbedPage from "../samples/tabbed-page/TabbedPageSample";
import addTableView from "../samples/table-view/TableViewSamplePage";
import addTimePicker from "../samples/time-picker/TimePickerSamplePage";
import addToggleButtonBar from "../samples/toggle-button-bar/addToggleButtonBar";
import addToolbarItem from "../samples/toolbar-item/ToolbarItemSample";
import addWebViewSample from "../samples/web-view/WebViewSample";
import MenuService from "../service/menu-service/MenuService";
import Home from "./home/Home";
import addBrushSamples from "../samples/brushes/addBrushSamples";

@DISingleton({ globalVar: "bridge.navigationService"})
class CLRNavigationService {
    public async pushPageAsync() {
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
            this.navigationService.registerNavigationHook( (url, options) => {
                if (!options || !options.target || (options.target && options.target !== "app")) { return; }
                return this.openPage(url, options);
            } ));

        const homeGroup = this.menuService.addGroup("Home");
        homeGroup.addTabLink("Home", Home);

        addFormSamples(this.menuService);
        addDatabaseSamples(this.menuService);
        addCalendarSamples(this.menuService);
        addBrushSamples(this.menuService);
        addSingleContentSample(this.menuService);
        addLayoutSample(this.menuService);
        addListSamples(this.menuService);
        addRefreshSample(this.menuService);
        addCarouselPage(this.menuService);
        addTabbedPage(this.menuService);
        addImage(this.menuService);
        addMenuItem(this.menuService);
        addCarousel(this.menuService);
        addBox(this.menuService);
        addToggleButtonBar(this.menuService);
        addSwitchSample(this.menuService);
        addTimePicker(this.menuService);
        addAlertSample(this.menuService);
        addCollectionViewSample(this.menuService);
        addToolbarItem(this.menuService);
        addTableView(this.menuService);
        addWebViewSample(this.menuService);
        addPopupSample(this.menuService);
    }

    public async openPage(url: AtomUri, options: IPageOptions) {

        const { view, disposables } =
            await AtomLoader.loadView<AtomXFControl>(url, this.app, true, () => new AtomWindowViewModel(this.app));
        const urlString = url.toString();
        (view as any)._$_url = urlString;

        this.currentPage = view;

        await bridge.navigationService.pushPageAsync(this.owner.element, view.element, options.clearHistory || false);

        disposables.add(() => {
            if (this.currentPage === view) {
                this.currentPage = null;
            }
        });

        return view;
    }

}
