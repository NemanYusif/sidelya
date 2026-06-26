import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: {
      az: "Sidelya Qızıl Baklava",
      en: "Sidelya Gold Baklava",
      ru: "Сиделя Голд Пахлава"
    },
    description: {
      az: "Zərif şokolad kremi və tünd Belçika şokolad qlazuru ilə hazırlanmış premium tort.",
      en: "A premium cake layered with delicate chocolate cream and glazed with rich dark Belgian ganache.",
      ru: "Премиальный торт с нежным шоколадным кремом и глазурью из темного бельгийского ганаша."
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: "./assets/Images/1.jpeg"
  },
  {
    id: 2,
    name: {
      az: "Vişnəli Baklava",
      en: "Cherry Baklava",
      ru: "Вишнёвая пахлава"
    },
    description: {
      az: "Əsl kərə yağı, xüsusi şərbət və bol Antep püstəsi ilə hazırlanan milli üslublu paxlava.",
      en: "Traditional flaky pastry with pure butter, honey syrup, and rich premium Turkish pistachios.",
      ru: "Традиционная хрустящая пахлава с чистым сливочным маслом, медовым сиропом и отборными фисташками."
    },
    price: 48,
    weight: 2.5,
    unit: "kg",
    image: "./assets/Images/2.jpeg"
  },
  {
    id: 3,
    name: {
      az: "Klassik Baklava",
      en: "Classic Baklava",
      ru: "Классическая пахлава"
    },
    description: {
      az: "Badam unundan bişirilmiş, fərqli incə kremlərlə doldurulmuş məşhur fransız deserti.",
      en: "Famous French almond meringue cookies with smooth, premium gourmet fillings.",
      ru: "Знаменитое французское миндальное пиченье с нежными изысканными начинками."
    },
    price:48,
    weight: 2.5,
    unit: "kg",
    image: "./assets/Images/3.jpeg"
  },
  {
    id: 4,
    name: {
      az: "Midye Baklava",
      en: "Mussel-shaped baklava",
      ru: "Пахлава в форме мидии"
    },
    description: {
      az: "Həqiqi dağ balı qatları və zərif qaymaqlı xama kremi ilə hazırlanmış klassik desert.",
      en: "A classic dessert made with rich natural honey layers and delicate sour cream frosting.",
      ru: "Классический торт со слоями натурального горного меда и нежным сметанным кремом."
    },
    price: 75,
    weight: 2.6,
    unit: "kg",
    image: "./assets/Images/4.jpeg"
  },
  {
    id: 5,
    name: {
      az: "Cheesecake Baklava",
      en: "Cheesecake Baklava",
      ru: "Пахлава чизкейк"
    },
    description: {
      az: "Belçika şokoladından hazırlanan, üzəri xalis kakao ilə örtülmüş əl işi truffellər.",
      en: "Handcrafted truffles made of finest Belgian chocolate and dusted with premium dark cocoa.",
      ru: "Конфеты ручной работы из элитного бельгийского шоколада, обсыпанные чистым какао."
    },
    price: 24,
    weight: 300,
    unit: "g",
    image: "./assets/Images/5.jpeg"
  },
  {
    id: 6,
    name: {
      az: "Şöbiyet Baklava",
      en: "Shobiet baklava",
      ru: "Пахлава шобийет"
    },
    description: {
      az: "Qaymaqlı pendir bünövrəsi üzərində zərif şəkildə bişirilmiş klassik Nyu-York çizkeyki.",
      en: "Classic New York cheesecake baked to perfection on a buttery biscuit crust.",
      ru: "Классический чизкейк Нью-Йорк, выпеченный на песочной основе со сливочным сыром."
    },
    price: 65,
    weight: 2.6,
    unit: "kg",
    image: "./assets/Images/6.jpeg"
  },
  {
    id: 7,
    name: {
      az: "Kök Dilimi Baklava",
      en: "Carrot slice baklava",
      ru: "Пахлава «морковный ломтик"
    },
    description: {
      az: "İçi südlü bişmiş krem ilə doldurulmuş, üzəri badam dilimləri və şokoladlı ekler.",
      en: "Premium choux pastry filled with delicious vanilla custard cream, topped with roasted almonds.",
      ru: "Эклеры с заварным ванильным кремом, украшенные обжаренными лепестками миндаля."
    },
    price: 53,
    weight: 2.5,
    unit: "pcs",
    image: "./assets/Images/7.jpeg"
  },
  {
    id: 8,
    name: {
      az: "Milli Baklava",
      en: "National Baklava",
      ru: "Национальная пахлава"
    },
    description: {
      az: "İçi üyüdülmüş fındıq, hil və şəkər tozu ilə doldurulmuş, sənətkarlıqla naxışlanmış şəkərbura.",
      en: "Traditional Azerbaijani pastry, intricately hand-decorated and filled with cardamom-spiced hazelnuts.",
      ru: "Традиционная азербайджанская выпечка с начинкой из лесного ореха с сахаром и кардамоном."
    },
    price: 28,
    weight: 10,
    unit: "pcs",
    image: "./assets/Images/8.jpeg"
  },
  {
    id: 9,
    name: {
      az: "Çiyələkli Cheesecake",
      en: "Strawberry Cheesecake",
      ru: "Чизкейк с клубникой"
    },
    description: {
      az: "Təbii qaymaq və təzə moruq sousu ilə hazırlanan yüngül, soyuq italyan deserti.",
      en: "Light and creamy Italian gelatin dessert topped with fresh homemade raspberry sauce.",
      ru: "Легкий сливочный итальянский десерт с соусом из свежей лесной малины."
    },
    price: 3,
    weight: 140,
    unit: "g",
    image: "./assets/Images/10.jpeg"
  },
  {
    id: 9,
    name: {
      az: "Limonlu Cheesecake",
      en: "Lemon Cheesecake",
      ru: "Чизкейк с лимоном"
    },
    description: {
      az: "Təbii qaymaq və təzə moruq sousu ilə hazırlanan yüngül, soyuq italyan deserti.",
      en: "Light and creamy Italian gelatin dessert topped with fresh homemade raspberry sauce.",
      ru: "Легкий сливочный итальянский десерт с соусом из свежей лесной малины."
    },
    price: 16,
    weight: 4,
    unit: "pcs",
    image: "./assets/Images/9.jpeg"
  },
  {
    id: 10,
    name: {
      az: "San Sebastian Cheesecake",
      en: "San Sebastian Cheesecake",
      ru: "Чизкейк Сан-Себастьян"
    },
    description: {
      az: "Təbii qaymaq və təzə moruq sousu ilə hazırlanan yüngül, soyuq italyan deserti.",
      en: "Light and creamy Italian gelatin dessert topped with fresh homemade raspberry sauce.",
      ru: "Легкий сливочный итальянский десерт с соусом из свежей лесной малины."
    },
    price: 3,
    weight: 190,
    unit: "g",
    image: "./assets/Images/11.jpeg"
  },
  {
    id: 11,
    name: {
      az: "Şokoladlı San Sebastian",
      en: "Chocolate San Sebastian",
      ru: "Шоколадный Сан-Себастьян"
    },
    description: {
      az: "Təbii qaymaq və təzə moruq sousu ilə hazırlanan yüngül, soyuq italyan deserti.",
      en: "Light and creamy Italian gelatin dessert topped with fresh homemade raspberry sauce.",
      ru: "Легкий сливочный итальянский десерт с соусом из свежей лесной малины."
    },
    price: 16,
    weight: 4,
    unit: "pcs",
    image: "./assets/Images/12.jpeg"
  },
];

export const reviews = [
  {
    id: 1,
    name: "Tural Rzayev",
    rating: 5,
    comment: {
      az: "Tortlar həqiqətən əladır! Çox təzə idi, qonaqlarımız da çox bəyəndi. Hər kəsə tövsiyə edirəm.",
      en: "The cakes are absolutely amazing! Extremely fresh, and our guests loved them. Highly recommended to everyone.",
      ru: "Торты действительно потрясающие! Все было очень свежим, гости остались в восторге. Очень рекомендую."
    }
  },
  {
    id: 2,
    name: "Elena Petrova",
    rating: 5,
    comment: {
      az: "Bakıda yediyim ən gözəl makaron desertləri buradadır. Şəkərbura və paxlavaları da əsl milli daddadır.",
      en: "These are the best macarons I have ever eaten in Baku. The shekerbura and baklava taste genuinely traditional.",
      ru: "Это лучшие макароны, которые я пробовала в Баку. Шекербура и пахлава имеют истинно традиционный вкус."
    }
  },
  {
    id: 3,
    name: "Farid Mammadov",
    rating: 5,
    comment: {
      az: "Premium xidmət və yüksək keyfiyyət. WhatsApp ilə sifariş etmək çox rahat oldu, tez cavab yazdılar.",
      en: "Premium service and top quality. Ordering via WhatsApp was incredibly convenient, and they replied very quickly.",
      ru: "Премиальный сервис и высшее качество. Заказывать через WhatsApp очень удобно, ответили очень быстро."
    }
  }
];
