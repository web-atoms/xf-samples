import MenuService from "../../service/menu-service/MenuService";
import ButtonView from "../button/ButtonView";
import ImageButtonView from "../button/image-button/ImageButtonView";
import CheckBoxView from "../check-box/CheckBoxView";
import ComboBoxSample from "../combo-box/ComboBoxSample";
import DatePickerView from "../date-picker/DatePickerView";
import EditorView from "../editor/EditorView";
import EntryView from "../entry/EntryView";
import LabelView from "../label/LabelView";
import SearchBarView from "../search-bar/SearchBarView";
import SliderView from "../slider/SliderView";
import StepperView from "../stepper/StepperView";
import SimpleForm from "./simple/SimpleForm";

export default function addFormSamples(ms: MenuService) {
    const form = ms.addGroup("Form");
    form.addTabLink("Simple Form", SimpleForm);
    form.addTabLink("Label", LabelView);
    form.addTabLink("CheckBox", CheckBoxView);
    form.addTabLink("Entry", EntryView);
    form.addTabLink("Editor", EditorView);
    form.addTabLink("Button", ButtonView);
    form.addTabLink("Image Button", ImageButtonView);
    form.addTabLink("Search Bar", SearchBarView);
    form.addTabLink("Date Picker", DatePickerView);
    form.addTabLink("Slider", SliderView);
    form.addTabLink("Stepper", StepperView);
    form.addTabLink("ComboBox", ComboBoxSample);
}
