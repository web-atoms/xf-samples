import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class ComboBoxSampleViewModel extends AtomViewModel {

    public genderList = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
    ];

    public gender = "female";

}
