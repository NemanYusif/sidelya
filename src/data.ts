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
      az: "Antep püstəsi və xüsusi şərbət ilə hazırlanmış premium qızıl baklava.",
      en: "Premium gold baklava layered with Antep pistachios and special syrup.",
      ru: "Премиальная золотая пахлава с фисташками из Антепа и особым сиропом."
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
      az: "Təzə vişnə aroması və incə xəmirdən hazırlanmış xüsusi paxlava.",
      en: "Delicate pastry with a fresh cherry aroma and traditional flaky layers.",
      ru: "Нежная пахлава с ароматом свежей вишни и тонкими слоями теста."
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
      az: "Ənənəvi üsulla bişirilmiş klassik paxlava, bol fındıq və badam ilə.",
      en: "Classic baklava baked the traditional way with rich hazelnuts and almonds.",
      ru: "Классическая пахлава по традиционному рецепту с фундуком и миндалём."
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
      az: "Midye formasında hazırlanmış incə xəmirdən baklava, püstə və şərbətli.",
      en: "Flaky mussel-shaped baklava filled with pistachios and honey syrup.",
      ru: "Хрустящая пахлава в форме мидии с фисташками и медовым сиропом."
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
      az: "Pendir kremi və paxlava xəmirinin unikal birləşməsi.",
      en: "A unique fusion of creamy cheesecake filling and classic baklava layers.",
      ru: "Уникальное сочетание сливочного чизкейка и классической пахлавы."
    },
    price: 24,
    weight: 300,
    unit: "g",
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
      az: "Xüsusi şöbiyet formasında hazırlanmış incə və şərbətli baklava.",
      en: "Fine syrup-soaked baklava crafted in the distinctive shobiyet shape.",
      ru: "Нежная пропитанная сиропом пахлава в фирменной форме шобийет."
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
      az: "Kök dilimi formasında kəsilmiş, qat-qat xəmirli klassik baklava.",
      en: "Layered classic baklava cut into elegant carrot-slice shapes.",
      ru: "Многослойная классическая пахлава, нарезанная в форме морковного ломтика."
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
      az: "Azərbaycanın milli şirniyyəti — ənənəvi üsulla hazırlanmış paxlava.",
      en: "Traditional Azerbaijani baklava prepared using authentic national recipes.",
      ru: "Традиционная азербайджанская пахлава по аутентичному национальному рецепту."
    },
    price: 28,
    weight: 10,
    unit: "pcs",
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
      az: "Təzə çiyələk ilə bəzədilmiş yüngül və qaymaqlı pendir tortu.",
      en: "Light and creamy cheesecake topped with fresh strawberries.",
      ru: "Лёгкий сливочный чизкейк с украшением из свежей клубники."
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
      az: "Limon aromalı, yüngül və təravətli pendir tortu.",
      en: "Refreshing lemon cheesecake with a bright citrus flavor.",
      ru: "Освежающий лимонный чизкейк с ярким цитрусовым вкусом."
    },
    price: 16,
    weight: 4,
    unit: "pcs",
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
      az: "İspan üslubunda yandırılmış qabığı olan qaymaqlı pendir tortu.",
      en: "Spanish-style burnt Basque cheesecake with a creamy center.",
      ru: "Испанский чизкейк Сан-Себастьян с карамелизированной корочкой."
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
      az: "Belçika şokoladı ilə hazırlanmış San Sebastian pendir tortu.",
      en: "San Sebastian cheesecake enriched with premium Belgian chocolate.",
      ru: "Чизкейк Сан-Себастьян с добавлением бельгийского шоколада."
    },
    price: 16,
    weight: 4,
    unit: "pcs",
    image: productImage('12.jpeg')
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
