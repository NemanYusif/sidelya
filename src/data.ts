import { Product } from './types';

const images = import.meta.glob<string>('../assets/Images/*.jpeg', {
  eager: true,
  import: 'default',
});

function productImage(filename: string): string {
  return images[`../assets/Images/${filename}`] ?? '';
}

export const products: Product[] = [
  {
    id: 1,
    name: {
      az: "Sidelya Qızıl Baklava",
      en: "Sidelya Gold Baklava",
      ru: "Сиделя Голд Пахлава"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: productImage('1.jpeg')
  },
  {
    id: 2,
    name: {
      az: "Vişnəli Baklava",
      en: "Cherry Baklava",
      ru: "Вишнёвая пахлава"
    },
    description: {
      az: "İncə Xəmir, Vişnə, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Cherries, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Вишня, Сливочное Масло, Сахарный Сироп "
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: productImage('2.jpeg')
  },
  {
    id: 3,
    name: {
      az: "Klassik Baklava",
      en: "Classic Baklava",
      ru: "Классическая пахлава"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: productImage('3.jpeg')
  },
  {
    id: 4,
    name: {
      az: "Midye Baklava",
      en: "Mussel-shaped Baklava",
      ru: "Пахлава в форме мидии"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 75,
    weight: 2.6,
    unit: "kg",
    image: productImage('4.jpeg')
  },
  {
    id: 5,
    name: {
      az: "Cheesecake Baklava",
      en: "Cheesecake Baklava",
      ru: "Пахлава чизкейк"
    },
    description: {
      az: "İncə Xəmir, Krem Pendir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Cream Cheese, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Крем-Сыр, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 45,
    weight: 2.5,
    unit: "kg",
    image: productImage('5.jpeg')
  },
  {
    id: 6,
    name: {
      az: "Şöbiyet Baklava",
      en: "Shobiyet Baklava",
      ru: "Пахлава шобийет"
    },
    description: {
      az: "İncə Xəmir, Krem, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Cream, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Крем, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 65,
    weight: 2.6,
    unit: "kg",
    image: productImage('6.jpeg')
  },
  {
    id: 7,
    name: {
      az: "Kök Dilimi Baklava",
      en: "Carrot Slice Baklava",
      ru: "Пахлава «морковный ломтик»"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 53,
    weight: 2.5,
    unit: "kg",
    image: productImage('7.jpeg')
  },
  {
    id: 8,
    name: {
      az: "Milli Baklava",
      en: "National Baklava",
      ru: "Национальная пахлава"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 15,
    weight: 1,
    unit: "kg",
    image: productImage('8.jpeg')
  },
  {
    id: 9,
    name: {
      az: "Çiyələkli Cheesecake",
      en: "Strawberry Cheesecake",
      ru: "Чизкейк с клубникой"
    },
    description: {
      az: "Krem Pendir, Çiyələk, Biskvit Baza, Qaymaq, Şəkər",
      en: "Cream Cheese, Strawberries, Biscuit Base, Cream, Sugar",
      ru: "Крем-Сыр, Клубника, Бисквитная Основа, Сливки, Сахар"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('10.jpeg')
  },
  {
    id: 10,
    name: {
      az: "Limonlu Cheesecake",
      en: "Lemon Cheesecake",
      ru: "Чизкейк с лимоном"
    },
    description: {
      az: "Krem Pendir, Limon, Biskvit Baza, Qaymaq, Şəkər",
      en: "Cream Cheese, Lemon, Biscuit Base, Cream, Sugar",
      ru: "Крем-Сыр, Лимон, Бисквитная Основа, Сливки, Сахар"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('9.jpeg')
  },
  {
    id: 11,
    name: {
      az: "San Sebastian Cheesecake",
      en: "San Sebastian Cheesecake",
      ru: "Чизкейк Сан-Себастьян"
    },
    description: {
      az: "Krem Pendir, Yumurta, Qaymaq, Şəkər, Un",
      en: "Cream Cheese, Eggs, Cream, Sugar, Flour",
      ru: "Крем-Сыр, Яйца, Сливки, Сахар, Мука"
    },
    price: 3,
    weight: 190,
    unit: "g",
    image: productImage('11.jpeg')
  },
  {
    id: 12,
    name: {
      az: "Şokoladlı San Sebastian",
      en: "Chocolate San Sebastian",
      ru: "Шоколадный Сан-Себастьян"
    },
    description: {
      az: "Krem Pendir, Şokolad, Yumurta, Qaymaq, Şəkər, Un",
      en: "Cream Cheese, Chocolate, Eggs, Cream, Sugar, Flour",
      ru: "Крем-Сыр, Шоколад, Яйца, Сливки, Сахар, Мука"
    },
    price: 3,
    weight: 190,
    unit: "g",
    image: productImage('12.jpeg')
  },{
    id: 13,
    name: {
      az: "Künefə",
      en: "Kunefe",
      ru: "Кюнефе"
    },
    description: {
      az: "Kadayıf, Yumşaq Pendir, Kərə Yağı, Şəkər Siropu, Fıstıq",
      en: "Kadayif, Soft Cheese, Butter, Sugar Syrup, Pistachios",
      ru: "Кадаиф, Мягкий Сыр, Сливочное Масло, Сахарный Сироп, Фисташки"
    },
    price: 2,
    weight: 140,
    unit: "g",
    image: productImage('13.jpeg')
  },{
    id: 14,
    name: {
      az: "Katmer",
      en: "Katmer",
      ru: "Катмер"
    },
    description: {
      az: "İncə xəmir, kərə yağı, qaymaq, şəkər, fıstıq ",
      en: "Thin dough, butter, clotted cream, sugar, pistachios",
      ru: "Тонкое тесто, сливочное масло, каймак, сахар, фисташки"
    },
    price: 12,
    weight: 250,
    unit: "g",
    image: productImage('14.jpeg')
  },{
    id: 15,
    name: {
      az: "Burger Baklava",
      en: "Burger Baklava",
      ru: "Бургер пахлава"
    },
    description: {
      az: "Qatlı xəmir, kərə yağı, fıstıq, şəkər siropu",
      en: "Layered phyllo dough, butter, pistachios, sugar syrup",
      ru: "Слоёное тесто, сливочное масло, фисташки, сахарный сироп"
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: productImage('15.jpeg')
  },{
    id: 16,
    name: {
      az: "Vulkan",
      en: "Volcano",
      ru: "Вулкан"
    },
    description: {
      az: "Xəmir, kərə yağı, fıstıq, şəkər siropu, kakao və ya şokolad kremi",
      en: "Dough, butter, pistachios, sugar syrup, cocoa or chocolate cream",
      ru: "Тесто, сливочное масло, фисташки, сахарный сироп, какао или шоколадный крем"
    },
    price: 3,
    weight: 165,
    unit: "g",
    image: productImage('16.jpeg')
  },{
    id: 17,
    name: {
      az: "Black Forest",
      en: "Black Forest",
      ru: "Чёрный Лес"
    },
    description: {
      az: "Şokolad biskviti, qaymaq kremi, albalı, şokolad qırıntıları",
      en: "Chocolate sponge cake, cream, cherries, chocolate shavings",
      ru: "Шоколадный бисквит, сливочный крем, вишня, шоколадная стружка"
    },
    price: 3,
    weight: 170,
    unit: "g",
    image: productImage('17.jpeg')
  },{
    id: 18,
    name: {
      az: "Tiramisu",
      en: "Tiramisu",
      ru: "Тирамису"
    },
    description: {
      az: "Savoiardi peçenyesi, mascarpone kremi, qəhvə, kakao tozu, şəkər",
      en: "Savoiardi biscuits, mascarpone cream, coffee, cocoa powder, sugar",
      ru: "Печенье савоярди, крем маскарпоне, кофе, какао-порошок, сахар"
    },
    price: 3,
    weight: 190,
    unit: "g",
    image: productImage('18.jpeg')
  },{
    id: 19,
    name: {
      az: "Ballı Tort",
      en: "Honey Cake",
      ru: "Медовый Торт"
    },
    description: {
      az: "Ballı biskvit layları, xama və ya qaymaq kremi, bal, şəkər",
      en: "Honey sponge layers, sour cream or cream filling, honey, sugar",
      ru: "Медовые коржи, сметанный или сливочный крем, мёд, сахар"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('19.jpeg')
  },{
    id: 20,
    name: {
      az: "Dubai Cheesecake",
      en: "Dubai Cheesecake",
      ru: "Дубайский Чизкейк"
    },
    description: {
      az: "Krem pendir, şokolad, fıstıq, biskvit baza, qaymaq",
      en: "Cream cheese, chocolate, pistachios, biscuit base, cream",
      ru: "Крем-сыр, шоколад, фисташки, бисквитная основа, сливки"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('20.jpeg')
  },{
    id: 21,
    name: {
      az: "Raspberry Cheesecake",
      en: "Raspberry Cheesecake",
      ru: "Малиновый Чизкейк"
    },
    description: {
      az: "Krem pendir, moruq, biskvit baza, qaymaq, şəkər",
      en: "Cream cheese, raspberries, biscuit base, cream, sugar",
      ru: "Крем-сыр, малина, бисквитная основа, сливки, сахар"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('21.jpeg')
  },{
    id: 22,
    name: {
      az: "Vişnəli Cheesecake",
      en: "Cherry Cheesecake",
      ru: "Вишнёвый Чизкейк"
    },
    description: {
      az: "Krem pendir, vişnə, biskvit baza, qaymaq, şəkər",
      en: "Cream cheese, cherries, biscuit base, cream, sugar",
      ru: "Крем-сыр, вишня, бисквитная основа, сливки, сахар"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('22.jpeg')
  },{
    id: 23,
    name: {
      az: "Oreo Cheesecake",
      en: "Oreo Cheesecake",
      ru: "Орео Чизкейк"
    },
    description: {
      az: "Krem pendir, Oreo peçenyesi, biskvit baza, qaymaq, yağ",
      en: "Cream cheese, Oreo cookies, biscuit base, cream, butter",
      ru: "Крем-сыр, печенье Oreo, бисквитная основа, сливки, масло"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('23.jpeg')
  },{
    id: 24,
    name: {
      az: "Dubai Baklava",
      en: "Dubai Baklava",
      ru: "Дубайская Пахлава"
    },
    description: {
      az: "Fıstıqlı qatlı xəmir, kərə yağı, şokolad kremi, şəkər siropu",
      en: "Pistachio layered phyllo dough, butter, chocolate cream, sugar syrup",
      ru: "Слоёное тесто с фисташками, сливочное масло, шоколадный крем, сахарный сироп"
    },
    price: 55,
    weight: 2.5,
    unit: "kg",
    image: productImage('24.jpeg')
  },{
    id: 25,
    name: {
      az: "Fıstıq Sarma",
      en: "Pistachio Roll",
      ru: "Фисташковый Рулет"
    },
    description: {
      az: "İncə xəmir, fıstıq, kərə yağı, şəkər siropu",
      en: "Thin phyllo dough, pistachios, butter, sugar syrup",
      ru: "Тонкое тесто, фисташки, сливочное масло, сахарный сироп"
    },
    price: 85,
    weight: 2.5,
    unit: "kg",
    image: productImage('25.jpeg')
  },{
    id: 26,
    name: {
      az: "Gül Baklava",
      en: "Rose Baklava",
      ru: "Розовая Пахлава"
    },
    description: {
      az: "İncə xəmir, fıstıq, kərə yağı, şəkər siropu",
      en: "Thin phyllo dough, pistachios, butter, sugar syrup",
      ru: "Тонкое тесто, фисташки, сливочное масло, сахарный сироп"
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: productImage('26.jpeg')
  },{
    id: 27,
    name: {
      az: "Südlü Baklava",
      en: "Milk Baklava",
      ru: "Молочная Пахлава"
    },
    description: {
      az: "İncə xəmir, kərə yağı, fıstıq, süd, şəkər siropu",
      en: "Thin phyllo dough, butter, pistachios, milk, sugar syrup",
      ru: "Тонкое тесто, сливочное масло, фисташки, молоко, сахарный сироп"
    },
    price: 48,
    weight: 2.8,
    unit: "kg",
    image: productImage('27.jpeg')
  },{
    id: 28,
    name: {
      az: "Şokoladlı Südlü Baklava",
      en: "Chocolate Milk Baklava",
      ru: "Шоколадная Молочная Пахлава"
    },
    description: {
      az: "İncə xəmir, kərə yağı, fıstıq, süd, şokolad, şəkər siropu",
      en: "Thin phyllo dough, butter, pistachios, milk, chocolate, sugar syrup",
      ru: "Тонкое тесто, сливочное масло, фисташки, молоко, шоколад, сахарный сироп"
    },
    price: 48,
    weight: 2.8,
    unit: "kg",
    image: productImage('28.jpeg')
  },{
    id: 29,
    name: {
      az: "Sütlaç",
      en: "Rice Pudding",
      ru: "Рисовый Пудинг"
    },
    description: {
      az: "Süd, düyü, şəkər, vanil, darçın",
      en: "Milk, rice, sugar, vanilla, cinnamon",
      ru: "Молоко, рис, сахар, ваниль, корица"
    },
    price: 1.6,
    weight: 230,
    unit: "g",
    image: productImage('29.jpeg')
  },{
    id: 30,
    name: {
      az: "Supangle",
      en: "Supangle",
      ru: "Супангле"
    },
    description: {
      az: "Süd, kakao, şokolad, şəkər, un və ya nişasta, kərə yağı",
      en: "Thin phyllo dough, butter, pistachios, milk, chocolate, sugar syrup",
      ru: "Молоко, какао, шоколад, сахар, мука или крахмал, сливочное масло"
    },
    price: 3,
    weight: 180,
    unit: "g",
    image: productImage('30.jpeg')
  },{
    id: 31,
    name: {
      az: "Magnolia",
      en: "Magnolia",
      ru: "Магнолия"
    },
    description: {
      az: "Süd, vanil kremi, biskvit, banan və ya çiyələk, şəkər",
      en: "Milk, vanilla cream, biscuits, banana or strawberry, sugar",
      ru: "Молоко, ванильный крем, печенье, банан или клубника, сахар"
    },
    price: 2,
    weight: 230,
    unit: "g",
    image: productImage('31.jpeg')
  },{
    id: 32,
    name: {
      az: "Fıstıqlı Künefə",
      en: "Pistachio Kunefe",
      ru: "Кюнефе с фисташками"
    },
    description: {
      az: "Kadayıf, yumşaq pendir, kərə yağı, şəkər siropu, fıstıq",
      en: "Kadayif, soft cheese, butter, sugar syrup, pistachios",
      ru: "Кадаиф, мягкий сыр, сливочное масло, сахарный сироп, фисташки"
    },
    price: 3,
    weight: 130,
    unit: "g",
    image: productImage('32.jpeg')
  },{
    id: 33,
    name: {
      az: "Hasır Künefə",
      en: "Hasir Kunefe",
      ru: "Хасыр Кюнефе"
    },
    description: {
      az: "Kadayıf, yumşaq pendir, kərə yağı, şəkər siropu",
      en: "Kadayif, soft cheese, butter, sugar syrup",
      ru: "Кадаиф, мягкий сыр, сливочное масло, сахарный сироп"
    },
    price: 2,
    weight: 125,
    unit: "g",
    image: productImage('33.jpeg')
  },{
    id: 34,
    name: {
      az: "Quş Südü Tortu",
      en: "Bird’s Milk Cake",
      ru: "Торт Птичье Молоко"
    },
    description: {
      az: "Biskvit, süd kremi, yumurta ağı köpüyü, şəkər, jelatin",
      en: "Sponge cake, milk cream, egg white foam, sugar, gelatin",
      ru: "Бисквит, молочный крем, белковый мусс, сахар, желатин"
    },
    price: 3.5,
    weight: 170,
    unit: "g",
    image: productImage('34.jpeg')
  },{
    id: 35,
    name: {
      az: "Şiş Künefə",
      en: "Skewer Kunefe",
      ru: "Кюнефе на шампуре"
    },
    description: {
      az: "Kadayıf, yumşaq pendir, kərə yağı, şəkər siropu",
      en: "Kadayif, soft cheese, butter, sugar syrup",
      ru: "Кадаиф, мягкий сыр, сливочное масло, сахарный сироп"
    },
    price: 6,
    weight: 135,
    unit: "g",
    image: productImage('35.jpeg')
  },{
    id: 36,
    name: {
      az: "Yufka",
      en: "Yufka",
      ru: "Юфка"
    },
    description: {
      az: "Un, su, duz",
      en: "Flour, water, salt",
      ru: "Мука, вода, соль"
    },
    price: 3.8,
    weight: 1,
    unit: "kg",
    image: productImage('36.jpeg')
  },{
    id: 37,
    name: {
      az: "Strawberry Marshmallow Cup",
      en: "Strawberry Marshmallow Cup",
      ru: "Стакан с клубникой и маршмеллоу"
    },
    description: {
      az: "Çiyələk, marshmallow, qaymaq, süd, biskvit, şəkər",
      en: "Strawberries, marshmallows, cream, milk, biscuits, sugar",
      ru: "Клубника, маршмеллоу, сливки, молоко, печенье, сахар"
    },
    price: 4,
    weight: 230,
    unit: "g",
    image: productImage('37.jpeg')
  },{
    id: 38,
    name: {
      az: "Hot Chocolate Lava Cup",
      en: "Hot Chocolate Lava Cup",
      ru: "Шоколадный Лавовый Десерт в Стакане"
    },
    description: {
      az: "Şokolad, süd, kakao, kərə yağı, şəkər, un",
      en: "Chocolate, milk, cocoa, butter, sugar, flour",
      ru: "Шоколад, молоко, какао, сливочное масло, сахар, мука"
    },
    price: 4,
    weight: 230,
    unit: "g",
    image: productImage('38.jpeg')
  },{
    id: 39  ,
    name: {
      az: "Marshmallow Brownie Cup",
      en: "Marshmallow Brownie Cup",
      ru: "Брауни с Маршмеллоу в Стакане"
    },
    description: {
      az: "Şokolad, un, yumurta, kərə yağı, şəkər, marshmallow",
      en: "Chocolate, flour, eggs, butter, sugar, marshmallows",
      ru: "Шоколад, мука, яйца, сливочное масло, сахар, маршмеллоу"
    },
    price: 4,
    weight: 230,
    unit: "g",
    image: productImage('39.jpeg')
  },{
    id: 40  ,
    name: {
      az: "Oreo Cup",
      en: "Oreo Cup",
      ru: "Орео Десерт в Стакане"
    },
    description: {
      az: "Oreo peçenyesi, süd, qaymaq, biskvit, şəkər",
      en: "Oreo cookies, milk, cream, biscuits, sugar",
      ru: "Печенье Oreo, молоко, сливки, бисквит, сахар"
    },
    price: 3.5,
    weight: 230,
    unit: "g",
    image: productImage('40.jpeg')
  },{
    id: 41,
    name: {
      az: "Vişnəli Cup",
      en: "Cherry Cup",
      ru: "Вишнёвый Десерт в Стакане"
    },
    description: {
      az: "Vişnə, qaymaq, süd, biskvit, şəkər",
      en: "Cherries, cream, milk, biscuits, sugar",
      ru: "Вишня, сливки, молоко, печенье, сахар"
    },
    price: 3.5,
    weight: 230,
    unit: "g",
    image: productImage('41.jpeg')
  },{
    id: 42,
    name: {
      az: "Brownie Cup",
      en: "Brownie Cup",
      ru: "Брауни в Стакане"
    },
    description: {
      az: "Şokolad, un, yumurta, kərə yağı, şəkər",
      en: "Chocolate, flour, eggs, butter, sugar",
      ru: "Шоколад, мука, яйца, сливочное масло, сахар"
    },
    price: 3.5,
    weight: 230,
    unit: "g",
    image: productImage('42.jpeg')
  },{
    id: 43,
    name: {
      az: "Dubai Cup",
      en: "Dubai Cup",
      ru: "Дубай Десерт в Стакане"
    },
    description: {
      az: "Fıstıq kremi, şokolad, biskvit, qaymaq, süd",
      en: "Pistachio cream, chocolate, biscuits, cream, milk",
      ru: "Фисташковый крем, шоколад, печенье, сливки, молоко"
    },
    price: 4.5,
    weight: 230,
    unit: "g",
    image: productImage('43.jpeg')
  },{
    id: 44,
    name: {
      az: "Lotus Cup",
      en: "Lotus Cup",
      ru: "Десерт Лотус в Стакане"
    },
    description: {
      az: "Lotus kremi, biskvit, qaymaq, süd, şəkər",
      en: "Lotus cream, biscuits, cream, milk, sugar",
      ru: "Крем Lotus, печенье, сливки, молоко, сахар"
    },
    price: 3.5,
    weight: 230,
    unit: "g",
    image: productImage('44.jpeg')
  },{
    id: 45,
    name: {
      az: "Diyarbakır Burma",
      en: "Diyarbakir Burma",
      ru: "Диарбекир Бурма"
    },
    description: {
      az: "İncə xəmir, kərə yağı, fıstıq, şəkər siropu",
      en: "Thin phyllo dough, butter, pistachios, sugar syrup",
      ru: "Тонкое тесто, сливочное масло, фисташки, сахарный сироп"
    },
    price: 38,
    weight: 3,
    unit: "kg",
    image: productImage('45.jpeg')
  },{
    id: 46,
    name: {
      az: "Fıstıqlı Kadayıf",
      en: "Pistachio Kadayif",
      ru: "Кадаиф с фисташками"
    },
    description: {
      az: "Kadayıf, fıstıq, kərə yağı, şəkər siropu",
      en: "Kadayif, pistachios, butter, sugar syrup",
      ru: "Кадаиф, фисташки, сливочное масло, сахарный сироп"
    },
    price: 26,
    weight: 2,
    unit: "kg",
    image: productImage('46.jpeg')
  },{
    id: 47,
    name: {
      az: "Cevizli Kadayıf",
      en: "Walnut Kadayif",
      ru: "Кадаиф с грецким орехом"
    },
    description: {
      az: "Kadayıf, qoz, kərə yağı, şəkər siropu",
      en: "Kadayif, walnuts, butter, sugar syrup",
      ru: "Кадаиф, грецкие орехи, сливочное масло, сахарный сироп"
    },
    price: 23,
    weight: 2,
    unit: "kg",
    image: productImage('47.jpeg')
  },{
    id: 48,
    name: {
      az: "Islak Kek",
      en: "Wet Cake",
      ru: "Мокрый Кекс"
    },
    description: {
      az: "Kakao, un, yumurta, şəkər, süd, kərə yağı, şokolad sousu",
      en: "Cocoa, flour, eggs, sugar, milk, butter, chocolate sauce",
      ru: "Какао, мука, яйца, сахар, молоко, сливочное масло, шоколадный соус"
    },
    price: 23,
    weight: 2,
    unit: "kg",
    image: productImage('48.jpeg')
  },{
    id: 49,
    name: {
      az: "Su Böreği",
      en: "Water Börek",
      ru: "Су Бёрек"
    },
    description: {
      az: "Yufka, yumurta, kərə yağı, ağ pendir, süd",
      en: "Yufka, eggs, butter, white cheese, milk",
      ru: "Юфка, яйца, сливочное масло, белый сыр, молоко"
    },
    price: 33,
    weight: 3,
    unit: "kg",
    image: productImage('49.jpeg')
  },{
    id: 50,
    name: {
      az: "Siqara Böreği",
      en: "Cigarette Borek",
      ru: "Сигара Бёрек"
    },
    description: {
      az: "Yufka, ağ pendir, cəfəri, kərə yağı, yumurta",
      en: "Yufka, white cheese, parsley, butter, eggs",
      ru: "Юфка, белый сыр, петрушка, сливочное масло, яйца"
    },
    price: 8,
    weight: 1,
    unit: "kg",
    image: productImage('50.jpeg')
  },{
    id: 51,
    name: {
      az: "Gül Böreği",
      en: "Rose Borek",
      ru: "Розочка Бёрек"
    },
    description: {
      az: "Yufka, ağ pendir, cəfəri, kərə yağı, yumurta",
      en: "Yufka, white cheese, parsley, butter, eggs",
      ru: "Юфка, белый сыр, петрушка, сливочное масло, яйца"
    },
    price: 1.5,
    weight: 200,
    unit: "g",
    image: productImage('51.jpeg')
  },{
    id: 52,
    name: {
      az: "Rafaello Cheesecake",
      en: "Rafaello Cheesecake",
      ru: "Чизкейк Рафаэлло"
    },
    description: {
      az: "Krem pendir, kokos, ağ şokolad, biskvit baza, qaymaq",
      en: "Cream cheese, coconut, white chocolate, biscuit base, cream",
      ru: "Крем-сыр, кокос, белый шоколад, бисквитная основа, сливки"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('52.jpeg')
  },{
    id: 53,
    name: {
      az: "Lotus Cheesecake",
      en: "Lotus Cheesecake",
      ru: "Чизкейк Лотус"
    },
    description: {
      az: "Krem pendir, Lotus kremi, Lotus peçenyesi, biskvit baza, qaymaq",
      en: "Cream cheese, Lotus spread, Lotus biscuits, biscuit base, cream",
      ru: "Крем-сыр, крем Lotus, печенье Lotus, бисквитная основа, сливки"
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: productImage('53.jpeg')
  },{
    id: 54,
    name: {
      az: "Lotus Cheesecake",
      en: "Lotus Cheesecake",
      ru: "Чизкейк Лотус"
    },
    description: {
      az: "Krem pendir, Lotus kremi, Lotus peçenyesi, biskvit baza, qaymaq",
      en: "Cream cheese, Lotus spread, Lotus biscuits, biscuit base, cream",
      ru: "Крем-сыр, крем Lotus, печенье Lotus, бисквитная основа, сливки"
    },
    price: 1,
    weight: 4,
    unit: "pcs",
    image: productImage('54.jpeg')
  },{
    id: 55,
    name: {
      az: "Taco Baklava",
      en: "Taco Baklava",
      ru: "Тако Пахлава"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Krem, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Cream, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Крем, Сахарный Сироп"
    },
    price: 17,
    weight: 1,
    unit: "kg",
    image: productImage('55.jpeg')
  },{
    id: 56,
    name: {
      az: "Roll Baklava",
      en: "Roll Baklava",
      ru: "Рулет Пахлава"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Сахарный Сироп"
    },
    price: 18,
    weight: 1,
    unit: "kg",
    image: productImage('56.jpeg')
  },{
    id: 57,
    name: {
      az: "Dondurmalı Baklava",
      en: "Ice Cream Baklava",
      ru: "Пахлава с Мороженым"
    },
    description: {
      az: "İncə Xəmir, Fıstıq, Kərə Yağı, Dondurma, Şəkər Siropu",
      en: "Thin Phyllo Dough, Pistachios, Butter, Ice Cream, Sugar Syrup",
      ru: "Тонкое Тесто, Фисташки, Сливочное Масло, Мороженое, Сахарный Сироп"
    },
    price: 17,
    weight: 1,
    unit: "kg",
    image: productImage('57.jpeg')
  },
];

export const reviews = [
  {
    id: 1,
    name: "Neman Yusif",
    rating: 5,
    comment: {
      az: "Tortlar həqiqətən əladır! Çox təzə idi, qonaqlarımız da çox bəyəndi. Hər kəsə tövsiyə edirəm.",
      en: "The cakes are absolutely amazing! Extremely fresh, and our guests loved them. Highly recommended to everyone.",
      ru: "Торты действительно потрясающие! Все было очень свежим, гости остались в восторге. Очень рекомендую."
    }
  },
  {
    id: 2,
    name: "Rana Abdullayeva",
    rating: 5,
    comment: {
      az: "Bakıda yediyim ən gözəl baklava buradadır. Şəkərbura və paxlavaları da əsl milli daddadır.",
      en: "These are the best baklavas I have ever eaten in Baku. The shekerbura and baklava taste genuinely traditional.",
      ru: "Это лучшая пахлава, которую я пробовала в Баку. Шекербура и пахлава имеют истинно традиционный вкус."
    }
  },
  {
    id: 3,
    name: "Nureddin İdrisov",
    rating: 5,
    comment: {
      az: "Premium xidmət və yüksək keyfiyyət. WhatsApp ilə sifariş etmək çox rahat oldu, tez cavab yazdılar.",
      en: "Premium service and top quality. Ordering via WhatsApp was incredibly convenient, and they replied very quickly.",
      ru: "Премиальный сервис и высшее качество. Заказывать через WhatsApp очень удобно, ответили очень быстро."
    }
  }
];
