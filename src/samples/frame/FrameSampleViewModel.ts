import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class FrameSampleViewModel extends AtomViewModel {

    public async init(): Promise<any> {
        super.init();
    }

    public changeFrame(): string {
        return "";
    }
}
