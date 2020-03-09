import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import TimePickerViewModel from "./TimePickerViewModel";

export default class TimePickerSample extends AtomXFContentPage {

    public viewModel: TimePickerViewModel;

    public create() {
        this.viewModel = this.resolve(TimePickerViewModel);

        this.render(
            <XF.ContentPage title="Time Picker Sample">
                <XF.StackLayout>
                    <XF.Entry placeholder = "Enter the event to be reminded of"/>
                    <XF.Label text = "Select the time below to be reminded at."/>
                    <XF.TimePicker time = "00.11:00:00" format = "T" />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
