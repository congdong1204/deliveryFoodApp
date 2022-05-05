export const icons = {
    cutlery: require("../icons/cutlery.png"),
    search: require("../icons/search.png"),
    like: require("../icons/like.png"),
    user: require("../icons/user.png"),
    nearby: require("../icons/nearby.png"),
    shopping: require("../icons/shopping-basket.png"),
    back: require("../icons/back.png"),
    car: require("../icons/car.png"),
    donut: require("../icons/donut.png"),
    drink: require("../icons/drink.png"),
    fire: require("../icons/fire.png"),
    fries: require("../icons/fries.png"),
    hamburger: require("../icons/hamburger.png"),
    hotdog: require("../icons/hotdog.png"),
    list: require("../icons/list.png"),
    location: require("../icons/location.png"),
    master_card: require("../icons/mastercard.png"),
    nearby: require("../icons/nearby.png"),
    noodle: require("../icons/noodle.png"),
    pin: require("../icons/pin.png"),
    pizza: require("../icons/pizza.png"),
    red_pin: require("../icons/red-pin.png"),
    rice_bowl: require("../icons/rice-bowl.png"),
    salad: require("../icons/salad.png"),
    search: require("../icons/search.png"),
    basket: require("../icons/shopping-basket.png"),
    star: require("../icons/star.png"),
    sushi: require("../icons/sushi.png")
}


const avatar_1 = require("../images/avatar-1.jpg");
const avatar_2 = require("../images/avatar-2.jpg");
const avatar_3 = require("../images/avatar-3.jpg");
const avatar_4 = require("../images/avatar-4.jpg");
const avatar_5 = require("../images/avatar-5.jpg");
const baked_fries = require("../images/baked-fries.jpg");
const burger_restaurant_1 = require("../images/burger-restaurant.jpg");
const burger_restaurant_2 = require("../images/burger-restaurant-2.jpg");
const chicago_hot_dog = require("../images/chicago-hot-dog.jpg");
const crispy_chicken_burger = require("../images/crispy-chicken-burger.jpg");
const fries_restaurant = require("../images/fries-restaurant.jpg");
const hawaiian_pizza = require("../images/hawaiian-pizza.jpg");
const honey_mustard_chicken_burger = require("../images/honey-mustard-chicken-burger.jpg");
const hot_dog_restaurant = require("../images/hot-dog-restaurant.jpg");
const ice_kacang = require("../images/ice-kacang.jpg");
const japanese_restaurant = require("../images/japanese-restaurant.jpg");
const kek_lapis_shop = require("../images/kek-lapis-shop.jpg");
const kek_lapis = require("../images/kek-lapis.jpg");
const kolo_mee = require("../images/kolo-mee.jpg");
const nasi_briyani_mutton = require("../images/nasi-briyani-mutton.jpg");
const nasi_lemak = require("../images/nasi-lemak.jpg");
const noodle_shop = require("../images/noodle-shop.jpg");
const pizza_restaurant = require("../images/pizza-restaurant.jpg");
const pizza = require("../images/pizza.jpg");
const salad = require("../images/salad.jpg");
const sarawak_laksa = require("../images/sarawak-laksa.jpg");
const sushi = require("../images/sushi.jpg");
const teh_c_peng = require("../images/teh-c-peng.jpg");
const tomato_pasta = require("../images/tomato-pasta.jpg");

export const COLORS = {
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray
    white: "#FFFFFF"
}

// Dummy Datas
export const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922
    }
}

export const categoryData = [
    {
        id: 1,
        name: "Rice",
        icon: icons.rice_bowl,
        selected: true
    },
    {
        id: 2,
        name: "Noodles",
        icon: icons.noodle,
        selected: false
    },
    {
        id: 3,
        name: "Hot Dogs",
        icon: icons.hotdog,
        selected: false
    },
    {
        id: 4,
        name: "Salads",
        icon: icons.salad,
        selected: false
    },
    {
        id: 5,
        name: "Burgers",
        icon: icons.hamburger,
        selected: false
    },
    {
        id: 6,
        name: "Pizza",
        icon: icons.pizza,
        selected: false
    },
    {
        id: 7,
        name: "Snacks",
        icon: icons.fries,
        selected: false
    },
    {
        id: 8,
        name: "Sushi",
        icon: icons.sushi,
        selected: false
    },
    {
        id: 9,
        name: "Desserts",
        icon: icons.donut,
        selected: false
    },
    {
        id: 10,
        name: "Drinks",
        icon: icons.drink,
        selected: false
    },

]

// price rating
export const affordable = 1
export const fairPrice = 2
export const expensive = 3

export const restaurantData = [
    {
        id: 1,
        name: "Hilton Burger",
        rating: 4.8,
        categories: [5, 7],
        priceRating: affordable,
        photo: burger_restaurant_1,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "Hilton Pizza",
        rating: 3.8,
        categories: [2, 4, 6],
        priceRating: expensive,
        photo: pizza_restaurant,
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: pizza,
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                photo: tomato_pasta,
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: salad,
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
    {
        id: 3,
        name: "Hilton Hotdogs",
        rating: 5.0,
        categories: [3],
        priceRating: expensive,
        photo: hot_dog_restaurant,
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            avatar: avatar_3,
            name: "James"
        },
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                photo: chicago_hot_dog,
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },
    {
        id: 4,
        name: "Hilton Sushi",
        rating: 4.4,
        categories: [8],
        priceRating: expensive,
        photo: japanese_restaurant,
        duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            avatar: avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                photo: sushi,
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        name: "Hilton Cuisine",
        rating: 3.9,
        categories: [1, 2],
        priceRating: affordable,
        photo: noodle_shop,
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            avatar: avatar_4,
            name: "Muthu"
        },
        menu: [
            {
                menuId: 10,
                name: "Kolo Mee",
                photo: kolo_mee,
                description: "Noodles with char siu",
                calories: 200,
                price: 5
            },
            {
                menuId: 11,
                name: "Sarawak Laksa",
                photo: sarawak_laksa,
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
            },
            {
                menuId: 12,
                name: "Nasi Lemak",
                photo: nasi_lemak,
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 8
            },
            {
                menuId: 13,
                name: "Nasi Briyani with Mutton",
                photo: nasi_briyani_mutton,
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 8
            },

        ]
    },
    {

        id: 6,
        name: "Hilton Dessets",
        rating: 4.7,
        categories: [9, 10],
        priceRating: affordable,
        photo: kek_lapis_shop,
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            avatar: avatar_1,
            name: "Jessie"
        },
        menu: [
            {
                menuId: 12,
                name: "Teh C Peng",
                photo: teh_c_peng,
                description: "Three Layer Teh C Peng",
                calories: 100,
                price: 2
            },
            {
                menuId: 13,
                name: "ABC Ice Kacang",
                photo: ice_kacang,
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 3
            },
            {
                menuId: 14,
                name: "Kek Lapis",
                photo: kek_lapis,
                description: "Layer cakes",
                calories: 300,
                price: 20
            }
        ]

    }


]