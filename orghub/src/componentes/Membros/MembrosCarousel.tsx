import React from 'react';
import MembrosItens from './MembrosItens';
import styles from "./Membros.module.css";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
    itens: {
    name: string;
    imageSrc: string;
    linkedin: string;
    github: string;
    }[]
}

const MembrosCarousel: React.FC<CarouselProps> = ({ itens }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Ajuste conforme necessário
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 
    };

return (
    <Slider {...settings}>
        {itens.map((item, index) => (
            <MembrosItens key={index} {...item} />
        ))}
    </Slider>
    );

};

export default MembrosCarousel;