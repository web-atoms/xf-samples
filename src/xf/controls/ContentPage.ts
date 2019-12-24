import Document from "../document";

export interface IPage {
    title: string;
}

const ContentPage = Document.prepare<IPage>("ContentPage");

export default ContentPage;
