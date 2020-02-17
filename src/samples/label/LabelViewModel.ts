import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class LabelViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public labelClick() {
        this.navigationService.alert("Label clicked");
    }
}
