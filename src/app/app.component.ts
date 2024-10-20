import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showPresent: boolean = true;

  public advantages = [
    {
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов.Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      number: '2',
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ]

  public products = [
    {
      image: 'menu1.png',
      title: 'Макарун с малиной',
      price: 1.70,
    },
    {
      image: 'menu2.png',
      title: 'Макарун с манго',
      price: 1.80,
    },
    {
      image: 'menu3.png',
      title: 'Макарун с ванилью',
      price: 1.90,
    },
    {
      image: 'menu4.png',
      title: 'Макарун с фисташками',
      price: 2.10,
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберете ваш макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Введите ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите ваш номер');
      return;
    }
    alert('Заказ успешно оформлен');
    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }
}
