import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class SwitchViewModel extends AtomViewModel {

    public status: boolean = false;

    public status2: boolean = false;

    public async init(): Promise<any> {
        super.init();
    }

    public switchStatus() {
        this.status = !this.status;
    }

    public switchStatus2() {
        this.status2 = !this.status2;
    }
}