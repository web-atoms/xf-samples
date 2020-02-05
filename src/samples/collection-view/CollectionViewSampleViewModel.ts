import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class CollectionViewSampleViewModel extends AtomViewModel {

    public list: Array<string> = ["a", "b", "c", "d"];

    public async init(): Promise<any> {
        super.init();
    }
}