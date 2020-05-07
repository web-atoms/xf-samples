import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import CheckBoxSampleViewModel from "./CheckBoxSampleViewModel";

export default class CheckBoxView extends AtomXFContentPage {

    public viewModel: CheckBoxSampleViewModel;

    public create() {
        this.viewModel = this.resolve(CheckBoxSampleViewModel);
        this.render(
            <XF.ContentPage title="CheckBox Sample">
                <XF.StackLayout padding="10">
                    <XF.Label text=""></XF.Label>
                    <XF.Label fontSize="16">
                        <XF.Label.formattedText>
                            <XF.FormattedString>
                                <XF.Span textColor="black" text="Check to indicate that you have read and agree to the terms of "/>
                                <XF.Span text="XF Software Agreement"
                                    textColor="blue"/>
                            </XF.FormattedString>
                        </XF.Label.formattedText>
                    </XF.Label>
                    <XF.StackLayout orientation="Horizontal">
                        <XF.CheckBox isChecked={Bind.twoWays(() => this.viewModel.isAgree)} />
                        <XF.Label text="Agree the terms and condition"
                            verticalTextAlignment="Center" />
                    </XF.StackLayout>
                    <XF.Label textColor="Maroon" text={Bind.oneWay(() => "You have " + (this.viewModel.isAgree ? "agreed terms and condition" : "disagreed terms and condition"))}
 />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
