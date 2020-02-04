import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class SwitchViewModel extends AtomViewModel {

    public status: string = "Off";

    public status2: string = "Off";

    public async init(): Promise<any> {
        super.init();
    }

    public switchStatus() {
        this.status = this.status === "Off" ? "On" : "Off";
    }

    public switchStatus2() {
        this.status2 = this.status2 === "Off" ? "On" : "Off";
    }
}