import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import DateTime from "@web-atoms/date-time/dist/DateTime";
import AtomXFCalendar from "@web-atoms/xf-controls/dist/calendar/AtomXFCalendar";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class Calendar extends AtomXFContentPage {

    @BindableProperty
    public date: DateTime;

    public create() {

        this.date = DateTime.today;

        this.render(<XF.ContentPage title="Calendar">
            <XF.Grid>
                <XF.Grid.rowDefinitions>
                    <XF.RowDefinition/>
                    <XF.RowDefinition height="Auto"/>
                    <XF.RowDefinition />
                </XF.Grid.rowDefinitions>
                <AtomXFCalendar
                    selectedDate={Bind.twoWays(() => this.date)}
                    />
                <XF.Label
                    { ... XF.Grid.row(1) }
                    text={Bind.oneWay(() => this.date.toLocaleDateString())}
                />
            </XF.Grid>
        </XF.ContentPage>);
    }

}
