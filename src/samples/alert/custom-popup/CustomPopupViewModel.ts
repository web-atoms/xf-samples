import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class CustomPopupViewModel extends AtomViewModel {

    public userName: string;

    public password: string;

    @Inject private navigationService: NavigationService;

    public async init(): Promise<void> {
        super.init();
    }

    public save() {
        this.navigationService
        .alert( "name: " + this.userName + " password: " + this.password);
    }
}
