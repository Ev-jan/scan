import Slider from "react-slick";
import styled from "styled-components";
import ChevronDark from "../../assets/img/chevron.svg";
import { useRef, useState } from "react";
import Loader from "../Loader/Loader";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1307,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1174,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1041,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 908,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
  ]
};




type ResultViewProps = {
  slides: JSX.Element[];
  loading:  boolean;
}


export default function ResultsView({ slides, loading }: ResultViewProps) {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef?.current?.slickPrev();
  };


  return (
    <Container>
      <HandleLeft onClick={prevSlide} disabled={currentSlide === 0 || loading} />
      <TableHeader>
        <span>Период</span>
        <span>Всего</span>
        <span>Риски</span>
      </TableHeader>
      <StyledSlider
        ref={sliderRef}
        {...settings}
        afterChange={(index) => setCurrentSlide(index)}>
        {
          loading ?
            <>
              <LoadWrapper>
                <Loader />
              </LoadWrapper>
              <LoadingPhrase>Загружаем данные</LoadingPhrase>
            </> :
            slides
        }
      </StyledSlider>
      <HandleRight onClick={nextSlide} disabled={currentSlide >= slides.length - settings.slidesToShow || loading} />
    </Container>
  );
}

const Container = styled.div`
position: relative;
display: flex;
flex-flow: row nowrap; 
align-items: center;
width: 94%;
margin: 0 auto;
margin-bottom: 107px;
height: auto;
border-radius: 10px;
border: 2px solid ${props => props.theme.colors.primary.blue};

@media screen and (max-width: 600px) {
  width: 92%;
  }

@media screen and (max-width: 600px) {
  flex-flow: column nowrap;
  width: 86%;
  border: none;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
  margin-bottom: 57px;
  }
`

const TableHeader = styled.div`
display: flex;
flex-flow: column nowrap;
flex-shrink: 0;
align-items: start;
justify-content: space-between;
width: 133px;
height: 158px;
padding: 20px 0 28px 17px;
background-color: ${props => props.theme.colors.primary.blue};
color: ${props => props.theme.colors.primary.white};
font-family: ${props => props.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
border-radius: 6px 0 0 6px;

@media screen and (max-width: 600px) {
  flex-flow: row nowrap;
  height: 70px;
  width: 100%;
  padding: 0 15px;
  align-items: center;
  height: 70px;
  border-radius: 6px 6px 0 0;
  }

`
const StyledSlider = styled(Slider)`
width: calc(100% - 133px);
position: relative;
padding-right: 10px;
display: block;



@media screen and (max-width: 600px) {
  width: 100%;
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
right: -41px;
width: 39px;
height: 39px;
background: url(${ChevronDark}) no-repeat center;
background-color: transparent;
cursor: pointer;
z-index: 1;

&:disabled {
  cursor: default;
  opacity: 0.2;
}

@media screen and (max-width: 600px) {
  top: calc(75% - 19.5px);
}
`

const HandleLeft = styled(HandleRight)`
transform: rotate(180deg);
left: -41px;
`
const LoadWrapper = styled.div`
margin: 0 auto;
width: 200px;
text-align: center;

& > svg, rect {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 600px) {
  & > svg, rect {
    width: 36px;
    height: 36px;
  }
}
`

const LoadingPhrase = styled.div`
margin: 0 auto;
width: 200px;
font-size: 18px;
font-weight: 400;
text-align: center;

@media screen and (max-width: 600px) {
display: none;
}
`