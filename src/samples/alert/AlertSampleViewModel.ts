import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class AlertSampleViewModel extends AtomViewModel {

    @Inject private navigationService: NavigationService;

    public async init(): Promise<void> {
        super.init();
    }

    public displayAlert() {
        this.navigationService.alert("This is an alert", "Alert");
    }

    public displayAlertQuestion() {
        this.navigationService.confirm("Would you like to save your data ?", "Save ?");
    }
}
