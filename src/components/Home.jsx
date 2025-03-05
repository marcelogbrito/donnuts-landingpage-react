import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import { FiArrowRight } from 'react-icons/fi';
import BannerImage from '../Assets/home-banner-image.png';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="imagem de fundo do home container" />

        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">Seu Donut Favorito Entregue em Sua Casa</h1>
            <p className="primary-text">
                Diversos sabores deliciosos para adoçar seus melhores momentos. Peça já o seu e receba um mimo surpresa.
            </p>
            <button className="secondary-button">Faça seu pedido <FiArrowRight /></button>
            <p className="primary-text">
                Ou venha comer conosco em um ambiente climatizado e aconchegante com várias opções para seu pedido.
            </p>

        </div>
                    <div className="home-image-section">
                <div className="home-primary-image">
                    <img src={BannerImage} alt="donuts" />
                </div>
            </div>
      </div>
    </div>
  );
}

export default Home;