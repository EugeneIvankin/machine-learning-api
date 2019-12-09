import { Injectable } from '@nestjs/common';

import { Product } from '../contracts';

@Injectable()
export class HomepageService {
  public bestFoodProducts: Product[] = [
    {
      id: '286310',
      name: 'Виноград синий, 1 кг.',
      packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
      country: 'Молдова',
      weight: '1 кг',
      cost: '2.99',
      nutritionalValue: [
        {name: 'Белки', value: '0.72 г'},
        {name: 'Жиры', value: '0.16 г'},
        {name: 'Углеводы', value: '18.1 г'},
        {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
      ],
      description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
      pop: '4.34',
      image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
    },
    {
      id: '286310',
      name: 'Виноград синий, 1 кг.',
      packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
      country: 'Молдова',
      weight: '1 кг',
      cost: '2.99',
      nutritionalValue: [
          {name: 'Белки', value: '0.72 г'},
          {name: 'Жиры', value: '0.16 г'},
          {name: 'Углеводы', value: '18.1 г'},
          {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
      ],
      description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
      pop: '4.34',
      image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
    },
    {
      id: '286310',
      name: 'Виноград синий, 1 кг.',
      packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
      country: 'Молдова',
      weight: '1 кг',
      cost: '2.99',
      nutritionalValue: [
          {name: 'Белки', value: '0.72 г'},
          {name: 'Жиры', value: '0.16 г'},
          {name: 'Углеводы', value: '18.1 г'},
          {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
      ],
      description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
      pop: '4.34',
      image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
    },
    {
      id: '286310',
      name: 'Виноград синий, 1 кг.',
      packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
      country: 'Молдова',
      weight: '1 кг',
      cost: '2.99',
      nutritionalValue: [
          {name: 'Белки', value: '0.72 г'},
          {name: 'Жиры', value: '0.16 г'},
          {name: 'Углеводы', value: '18.1 г'},
          {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
      ],
      description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
      pop: '4.34',
      image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
    },
    {
      id: '286310',
      name: 'Виноград синий, 1 кг.',
      packing: 'фасовка 1&nbsp;-&nbsp;1.2 кг',
      country: 'Молдова',
      weight: '1 кг',
      cost: '2.99',
      nutritionalValue: [
          {name: 'Белки', value: '0.72 г'},
          {name: 'Жиры', value: '0.16 г'},
          {name: 'Углеводы', value: '18.1 г'},
          {name: 'Энергетическая ценность', value: '69 ккал/ 288 кДж'},
      ],
      description: 'Сорт: Кодрянка, класс 1. Урожай: 2019 г.',
      pop: '4.34',
      image: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/6310/00286310/norm/thumbs/00286310.n_1_1000x1000_w.png.jpg?1569911418',
    },
  ];

  getPopProducts(): Product[] {
    return this.bestFoodProducts;
  }

  getRecommendedProduct(): Product[] {
    return this.bestFoodProducts;
  }
}
