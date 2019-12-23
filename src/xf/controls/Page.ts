import Document from "../document";

export interface IPage {
    title: string;
}

const Page = Document.prepare<IPage>("Page");

export default Page;
