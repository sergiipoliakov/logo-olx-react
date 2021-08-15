import './App.css';
import Container from './Components/UI/Container/Container';
import ProductCardList from './Components/Product/ProductCardList';
import Header from './Components/Header';
const cards = [
  {
    id: 1,
    imageSrc: './Components/Product/ProductCard/Rectangle.jpg',
    oldPrice: 200,
    price: 100,
    title: 'Майка жіноча чорна',
  },
  {
    id: 2,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 3,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 4,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 5,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 6,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
];

function App() {
  return (
    <Container>
      <Header />
      <ProductCardList items={cards} />
    </Container>
  );
}

export default App;
