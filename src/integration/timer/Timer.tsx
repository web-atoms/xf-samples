import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import TimerViewModel from "./TimerViewModel";

export default class Timer extends AtomXFContentPage {

    public viewModel: TimerViewModel;

    public create() {

        this.viewModel = this.resolve(TimerViewModel);

        this.render(<XF.ContentPage padding={10}>

            <XF.StackLayout>

                <XF.Label
                    text={Bind.oneWay(() => this.viewModel.model)}
                    />

                <XF.Button
                    text={Bind.oneWay(() => this.viewModel.registration ? "Stop" : "Start")}
                    command={Bind.event((s, e) => this.viewModel.registration
                        ? this.viewModel.stop()
                        : this.viewModel.start() )}
                    />

            </XF.StackLayout>

        </XF.ContentPage>);
    }

}
