import React from 'react';
import AboutBackground from '../Assets/about-background1.jpg';
import AboutBackgroundImage from '../Assets/about-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="Imagem de donuts empilhados" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="mão segurando um donut" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>
                Sobre nós
            </p>
            <h1 className="primary-heading">
                Importante Conhecer Quem Alimenta Você
            </h1>
            <p className="primary-text">
                Somos uma doceria local dedicada a trazer a você os donuts mais deliciosos da cidade
            </p>
            <p className="primary-text">
                Nossa história começa com uma paixão e desejo de criar um espaço onde amigos e familiares possam se reunir e desfrutar de momentos doces juntos.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Leia mais</button>
                <button className="watch-video-button"><BsFillPlayCircleFill /> Assista nosso vídeo</button>
            </div>
        </div>
    </div>
  );
}
export default About;