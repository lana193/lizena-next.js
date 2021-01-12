import React from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import 'swiper/css/swiper.css';

const ProjectGalleryWrapper = styled.div`
  .swiper-container {
    z-index: 0;
   }
  .swiper-wrapper {
    height: 20rem;
  }

  .swiper-slide {
    background-size: cover;
  }
`;

const SwiperSlideWrapper = styled.div`
  background-image: url(${props => props.background});
`;

const ProjectGallery = ({ photos = [] }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slideShadows: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    shouldSwiperUpdate: true,
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      275: {
        slidesPerView: 1
      }
    }
  }
  return (
    <ProjectGalleryWrapper>
      <Swiper {...params}>
        {photos.map((item, i) => {
          return (
            <SwiperSlideWrapper key={i} background={item} className="swiper-slide"></SwiperSlideWrapper>
          );
        }
        )}
      </Swiper>
    </ProjectGalleryWrapper>
  );
}

export default ProjectGallery;