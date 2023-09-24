import Slider from "react-slick";
import Chevron from "../../assets/img/chevron.svg";
import styled from "styled-components";
import { useRef } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const Container = styled.div`
position: relative;
display: flex;
flex-flow: row nowrap; 
align-items: center;
width: 100%;
height: auto;
@media screen and (max-width: 768px) {

}
`

const StyledSlider = styled(Slider)`
width: 100%;
position: relative;
padding: 0 20px;
display: block;


@media screen and (max-width: 768px) {
padding: 0 10px;
}

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

-webkit-touch-callout: none;
-khtml-user-select: none;
-ms-touch-action: pan-y;
touch-action: pan-y;
-webkit-tap-highlight-color: transparent;

`
const HandleRight = styled.button`
all: unset;
position: absolute;
top: calc(50% - 19.5px);
right: 0;
width: 39px;
height: 39px;
background: url(${Chevron}) no-repeat center;
opacity: .4;
cursor: pointer;
z-index: 1;

@media screen and (max-width: 768px) {
  right: -10px;
}
`

const HandleLeft = styled(HandleRight)`
transform: rotate(180deg);
left: 0;
@media screen and (max-width: 768px) {
  left: -10px;
}
`

type MainViewProps = {
  slides: JSX.Element[];

}

export default function MainView({ slides }: MainViewProps) {

  const sliderRef = useRef<Slider>(null);



  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef?.current?.slickPrev();
  };
  
  return (
    <Container>
      <HandleLeft onClick={prevSlide} />
      <StyledSlider ref={sliderRef} {...settings}>
        {slides}
      </StyledSlider>
      <HandleRight onClick={nextSlide} />
    </Container>
  );
}