import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import EditImageModal from './EditImageModal';
import DeleteImageModal from './DeleteImageModal';

import 'swiper/css/swiper.css';

const GalleryWrapper = styled.div`
  margin: 0 auto;

  .swiper-container {
    z-index: 0;
  }

  .swiper-wrapper {
    height: 20rem;
  }

  .swiper-slide {
    background-size: cover;
  }

  .icons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const SwiperSlideWrapper = styled.div`
  background-image: url(${props => props.background});
  text-align: right;
`;

const Gallery = (props) => {
  const { photos = [], id, currentUserToken, handleEditPhotos, handleGet, folder } = props;
  // console.log(111, photos)
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
    // rebuildOnUpdate: true,
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
    <GalleryWrapper>
      <Swiper {...params}>
        {photos.map((item, i) => {
          return (
            <SwiperSlideWrapper key={i} background={item} className="swiper-slide">
              { currentUserToken && (
                  <span className="icons-wrapper">
                    <EditImageModal 
                      handleEditPhotos={handleEditPhotos} 
                      id={id} 
                      handleGet={handleGet} 
                      currentUserToken={currentUserToken} 
                      imgUrl={item} 
                      folder={folder}
                    />
                    <DeleteImageModal 
                      handleEditPhotos={handleEditPhotos}  
                      id={id} 
                      handleGet={handleGet} 
                      currentUserToken={currentUserToken} 
                      imgUrl={item} 
                      folder={folder}
                    />
                  </span>
                )
              }
            </SwiperSlideWrapper>
          );
        }
        )}
      </Swiper>
    </GalleryWrapper>
  );
}

export default Gallery;