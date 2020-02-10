import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class CollectionViewSampleViewModel extends AtomViewModel {

    public list: IListModel[] = [];

    public group: IGroupModel[] = [];

    public layout: string = "";

    public orientation: string = "";

    public async init(): Promise<any> {
        super.init();

        for (let i = 0; i <= 6; i += 1) {
            const element: IListModel = {};
            element.image = "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Papio_anubis_%28Serengeti%2C_2009%29.jpg/200px-Papio_anubis_%28Serengeti%2C_2009%29.jpg";
            element.location = "location " + i;
            element.name = "name " + i;
            this.list.add(element);
        }

        this.group.addAll([
        {
            name: "Bears",
            list: [
            {
                name: "American Black Bear",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/08/01_Schwarzbär.jpg",
                location: "North America"
            },
            {
                name: "Asian Black Bear",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ursus_thibetanus_3_%28Wroclaw_zoo%29.JPG/180px-Ursus_thibetanus_3_%28Wroclaw_zoo%29.JPG",
                location: "Asia"
            }]
        },
        {
            name: "Monkeys",
            list: [
            {
                name: "Baboon",
                location: "Africa & Asia",
                image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Papio_anubis_%28Serengeti%2C_2009%29.jpg/200px-Papio_anubis_%28Serengeti%2C_2009%29.jpg"
            },
            {
                name: "Capuchin Monkey",
                location: "Central & South America",
                image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Capuchin_Costa_Rica.jpg/200px-Capuchin_Costa_Rica.jpg"
            },
            {
                name: "Blue Monkey",
                location: "Central and East Africa",
                image: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/BlueMonkey.jpg/220px-BlueMonkey.jpg"
            }]
        }]);
    }
}

interface IListModel {
    image?: string;
    name?: string;
    location?: string;
}
interface IGroupModel {
    name?: string;
    list?: IListModel[];
}
