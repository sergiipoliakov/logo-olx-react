import './App.css';
import defaultImg from './Components/ProductCard/Rectangle.jpg';
import ProductCard from './Components/ProductCard';

function App() {
  return (
    <div>
      <ProductCard
        oldPrice={200}
        price={100}
        imageSrc={defaultImg}
        title="Женская кофта"
      />
    </div>
  );
}

export default App;
