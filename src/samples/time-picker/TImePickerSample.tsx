import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import TimePickerViewModel from "./TimePickerViewModel";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class TimePickerSample extends AtomXFContentPage {

    public viewModel: TimePickerViewModel;

    public create() {
        this.viewModel = this.resolve(TimePickerViewModel);

        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                    <XF.Entry placeholder = "Enter the event to be reminded of"/>
                    <XF.Label text = "Select the time below to be reminded at."/>
                    <XF.TimePicker time = "12:00:00" format = "T"/>
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}