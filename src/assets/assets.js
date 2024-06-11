import Asun from "./Asun.png";
import Baobab_Juice from "./Baobab_Juice.png";
import Egusi_Soup from "./Egusi_Soup.png";
import Fura_da_Nono from "./Fura_da_Nono.png";
import Hibiscus_Tea from "./Hibiscus_Tea.png";
import kelewele from "./kelewele.png";
import Snoek_Pâté from "./Snoek_Pâté.png";
import tagine from "./tagine.png";
import Waakye from "./Waakye.png";

import rating_starts from "./rating_starts.png"

export  const assets = {
    rating_starts,
} 

export const food_list = [
    {
        _id: "1",
        name: "Kelewele",
        image: kelewele,
        price: 2,
        description: "A Ghanaian dish made of fried plantains seasoned with spices like ginger and chili",
        category: "Appetizers"
    },
    {
        _id: "2",
        name: "Snoek_Pâté",
        image: Snoek_Pâté,
        price: 3,
        description: " A South African appetizer made from smoked snoek fish blended with cream cheese, lemon juice, and spices. ",
        category: "Appetizers"
    },
    {
        _id: "3",
        name: "Asun",
        image: Asun,
        price: 4,
        description: "A mouth-watering Nigerian appetizer bursting with flavor of spicy grilled goat meat.",
        category: "Appetizers"
    },
    {
        _id: "4",
        name: "Tagine",
        image: tagine,
        price: 6,
        description: "A Morocco  dish named after the earthenware pot in which it's cooked. It's made with meat  vegetables, and a variety of spices.",
        category: "Main Course"
    },
    {
        _id: "5",
        name: "Waakye",
        image: Waakye,
        price: 7,
        description: " Ghanaian dish made  of  rice and beans cooked together with dried millet leaves, which give the dish its distinctive color.",
        category: "Main Course"
    },
    {
        _id: "6",
        name: "Egusi Soup",
        image: Egusi_Soup,
        price: 10,
        description: "Nigeria soup made with melon, served with a variety of starchy sides such as pounded yam, eba , fufu, or semovita.",
        category: "Main Course"
    },
    {
        _id: "7",
        name: "Fura da Nono",
        image: Fura_da_Nono,
        price: 2,
        description: "A traditional Northern Nigerian drink made from fermented milk (nono) mixed with ground millet (fura). Its served cold",
        category: "Beverages"
    },
    {
        _id: "8",
        name: "Hibiscus Tea",
        image: Hibiscus_Tea,
        price: 3,
        description: "Made from dried hibiscus petals, that is refreshing and slightly tart, sweetened with sugar and flavored with ginger, pineapple, or cloves.",
        category: "Beverages"
    },
    {
        _id: "9",
        name: "Baobab Juice",
        image: Baobab_Juice,
        price: 3,
        description: "Made from the fruit of the baobab tree, this juice is rich in vitamin C and has a tangy, citrus-like flavor. It’s often mixed with water and sweetened.",
        category: "Beverages"
    },
]

// import food_1 from './food_1.png'
