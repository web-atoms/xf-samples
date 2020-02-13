import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import addLayoutSample from "../samples/absolute-layout/LayoutSample";
import addAlertSample from "../samples/alert/AlertSamplePage";
import addBox from "../samples/box/BoxViewSample";
import addCarouselPage from "../samples/carousel/carousel-page/CarouselPageSample";
import addCarousel from "../samples/carousel/carousel-view/CarouselSample";
import addCollectionViewSample from "../samples/collection-view/CollectionViewSamplePage";
import addDatePicker from "../samples/date-picker/DatePickerSample";
import addEditor from "../samples/editor/EditorSample";
import addEntry from "../samples/entry/EntrySample";
import addFormSamples from "../samples/form/FormSamples";
import addFrameSample from "../samples/frame/FrameSamplePage";
import addGrid from "../samples/grid/GridSample";
import addImage from "../samples/image/ImageSample";
import addLabelSample from "../samples/label/LabelSample";
import addListSamples from "../samples/list/ListSamples";
import addMenuItem from "../samples/menu-item/MenuSample";
import addScrollView from "../samples/scroll-view/Sample";
import addSwitchSample from "../samples/switch/SwitchSamplePage";
import addTabbedPage from "../samples/tabbed-page/TabbedPageSample";
import addTableView from "../samples/table-view/TableViewSamplePage";
import addTimePicker from "../samples/time-picker/TimePickerSamplePage";
import addToggleButtonBar from "../samples/toggle-button-bar/addToggleButtonBar";
import addToolbarItem from "../samples/toolbar-item/ToolbarItemSample";
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

        // addLabelSample(this.menuService);
        // addEntry(this.menuService);
        // addEditor(this.menuService);
        addCarouselPage(this.menuService);
        addTabbedPage(this.menuService);
        addFormSamples(this.menuService);
        addLayoutSample(this.menuService);
        // addDatePicker(this.menuService);
        // addGrid(this.menuService);
        addImage(this.menuService);
        addListSamples(this.menuService);
        addMenuItem(this.menuService);
        addCarousel(this.menuService);
        addScrollView(this.menuService);
        addBox(this.menuService);
        addToggleButtonBar(this.menuService);
        addSwitchSample(this.menuService);
        addTimePicker(this.menuService);
        addAlertSample(this.menuService);
        addFrameSample(this.menuService);
        addCollectionViewSample(this.menuService);
        addToolbarItem(this.menuService);
        addTableView(this.menuService);
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
