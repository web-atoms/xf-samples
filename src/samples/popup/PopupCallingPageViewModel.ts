import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import PopupView from "./PopupView";

export default class PopupCallingPageViewModel extends AtomViewModel {

    @Inject
    private navigationService: NavigationService;

    public clickEvent(str: string) {
        this.navigationService.openPage(
            PopupView,
            {},
            {clearHistory: false}
        );
    }
}
