import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class GroupingViewModel extends AtomViewModel {
    public get group() {
        const a = [];
        for (const iterator of this.items) {
            const list = iterator.list;
            (list as any).key = iterator;
            a.push(list);
        }
        return a;
    }

    public items = [
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
        }
    ];
}
