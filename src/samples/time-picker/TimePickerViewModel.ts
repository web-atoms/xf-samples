import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class TimePickerViewModel extends AtomViewModel {

    public date: string = "11:00:00";

    public async init(): Promise<any> {
        super.init();
    }
}
