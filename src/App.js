import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import { Items } from './components/Items';

class App extends React.Component {
  constructor(proos) {
    super(proos);
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: 'Стул cерый',
          img: 'f2.jpg',
          desc: 'Стул кухонный AksHome Sky - это стильное и функциональное решение для вашего интерьера. ',
          category: 'Стулья и табуреты',
          price: '104'
        },
        {  
          id: 2,
          title: 'Стул Mоншау',
          img: 'f3.jpg',
          desc: 'Стул на металлокаркасе Моншау станет настоящим украшением интерьера в стиле модерн или лофта. Благодаря четырем металлическим ножкам модель устойчива, надежна и не смотрится громоздко, а мягкая велюровая обивка делает посадку комфортной. Особенность дизайна стула – полукруглая низкая спинка, переходящая в подлокотники и декорированная изящными складками.',
          category: 'Стулья и табуреты',
          price: '315'
        },
        {
          id: 3,
          title: 'Стул AksHome Darren',
          img: 'f4.jpg',
          desc: 'Кухонный стул AksHome Darren - это идеальное решение для создания комфортного и стильного интерьера вашей кухни.',
          category: 'Стулья и табуреты',
          price: '188'
        },
        {
          id: 4,
          title: 'Стул AksHome Orly (велюр)',
          img: 'f5.jpg',
          desc: 'АksHome Orly (велюр) - это элегантный кухонный стул, который будет отлично смотреться в любом интерьере. ',
          category: 'Стулья и табуреты',
          price: '257'
        },
        {
          id: 5,
          title: 'Стул UTFC ИЗО BL',
          img: 'f6.jpg',
          desc: 'Офисное кресло UTFC ИЗО BL - это удобное и надежное решение для вашего рабочего пространства.',
          category: 'Стулья и табуреты',
          price: '66'
        },
        {
          id: 6,
          title: 'Стoл обеденный',
          img: 'f7.webp',
          desc: 'Стол обеденный Валенсия круг 1100 (Стекло с фотопечатью Белый мрамор / МДФ Белый шагрень / рама золото / металл золото)',
          category: 'Столы',
          price: '2 003.50'
        },
        {
          id: 7,
          title: 'МАНИКЮРНЫЙ СТОЛ',
          img: 'f8.webp',
          desc: 'Современная модификация маникюрного стола МС-120 в стиле лофт.',
          category: 'Столы',
          price: '340'
        },
        {
          id: 8,
          title: 'Письменный стoл',
          img: 'f9.jpeg',
          desc: 'Письменный стол Горизонт Мебель Анталия 1200 3 ящика (дуб сонома/графит софт)',
          category: 'Столы',
          price: '196.28'
        },
        {
          id: 9,
          title: 'Журнальный стoл',
          img: 'f10.jpeg',
          desc: 'Журнальный столик Горизонт Мебель Квадро (белый/дуб золотой)',
          category: 'Столы',
          price: '59.01'
        },
        {
          id: 10,
          title: 'Диван угловой Порту Textile Silver',
          img: 'f11.jpg',
          desc: 'Строгий образ дивана «Порту» станет завершающим штрихом в современном интерьере гостиной. Остается только расставить цветовые акценты, дополнив однотонную обивку контрастными декоративными подушками.',
          category: 'Диваны',
          price: '1344'
        },
        {
          id: 11,
          title: 'Бонс-Т',
          img: 'f12.jpg',
          desc: 'Однотонная обивка, отсутствие броского декора, лаконичная конструкция: диван «Бонс-Т» – образец минималистичного стиля. Одновременно, благодаря отделке строчкой и стяжками, модель выглядит очень уютно.',
          category: 'Диваны',
          price: '1330'
        },
        {
          id: 12,
          title: 'Диван Райтт 4 BMS',
          img: 'f13.jpg',
          desc: 'Диван Райтт 4 BMS – это уютное ретро для интерьеров в стиле мид сенчури. Двухместный диванчик выполнен в мягкой обивке насыщенного цвета с декоративными пуговицами, плавные линии подлокотников подчеркнуты контрастным кантом в тон подушкам. Устойчивая благодаря ножкам древесных тонов, модель оборудована удобным глубоким сиденьем, высокой спинкой и боковинами с кармашками для ТВ пульта. Купить диван Райтт 4 BMS приглашаем в наш интернет-магазин, подобрав гармонирующий с  интерьером вариант обивки.',
          category: 'Диваны',
          price: '1157'
        },
        {
          id: 13,
          title: 'Диван Порту Textile Grafit',
          img: 'f14.jpg',
          desc: 'Дизайн модели чрезвычайно прост. Ничего лишнего – только правильные прямоугольные формы и симметричные линии. Несмотря на отсутствие броского декора, диван смотрится элегантно и очень стильно.',
          category: 'Диваны',
          price: '1052'
        },
        {
          id: 14,
          title: 'Диван Атланта BMS',
          img: 'f15.jpg',
          desc: '"Стильный диван Атланта, прямой, с надежным механизмом трансформации «еврокнижка» предназначен для ежедневного использования. Гармоничный вид украсит любой интерьер, сделает атмосферу теплой и уютной. Аппетитный цвет сливок красиво контрастирует с насыщенным цветом натурального дерева, который выбран для накладок подлокотников из МДФ и вставкой из темной экокожи, проходящей по низу. Модель оснащена ящиком для постельных принадлежностей.',
          category: 'Диваны',
          price: '1565'
        },
        {
          id: 15,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
        {
          id: 16,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
        {
          id: 17,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
        {
          id: 18,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
        {
          id: 19,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
        {
          id: 20,
          title: 'Стул',
          img: '',
          desc: '',
          category: '',
          price: ''
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)

  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} onAdd={this.addToOrder} />           {/*передаем массив со всеми товазами*/}
      <Footer />
      
    </div>
  );
  }
  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item]})                //метод добавления в корзину
  }
}

export default App;
