import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import { AtomUri } from "@web-atoms/core/dist/core/AtomUri";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import addBox from "../samples/box/BoxViewSample";
import addCarousel from "../samples/carousel-view/CarouselSample";
import addDatePicker from "../samples/date-picker/DatePickerSample";
import addEditor from "../samples/editor/EditorSample";
import addEntry from "../samples/entry/EntrySample";
import addFormSamples from "../samples/form/FormSamples";
import addGrid from "../samples/grid/GridSample";
import addImage from "../samples/image/ImageSample";
import addLabelSample from "../samples/label/LabelSample";
import addListSamples from "../samples/list/ListSamples";
import addToggleButtonBar from "../samples/toggle-button-bar/addToggleButtonBar";
import MenuService from "../service/menu-service/MenuService";
import addSwitchSample from "../samples/switch/SwitchSamplePage";
import addTimePicker from "../samples/time-picker/TimePickerSamplePage";
import addAlertSample from "../samples/alert/AlertSamplePage";
import addFrameSample from "../samples/frame/FrameSamplePage";

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
        addFormSamples(this.menuService);
        // addDatePicker(this.menuService);
        addGrid(this.menuService);
        addImage(this.menuService);
        addListSamples(this.menuService);
        addCarousel(this.menuService);
        addBox(this.menuService);
        addToggleButtonBar(this.menuService);
        addSwitchSample(this.menuService);
        addTimePicker(this.menuService);
        addAlertSample(this.menuService);
        addFrameSample(this.menuService);
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
