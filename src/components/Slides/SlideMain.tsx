import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: start;
align-items: start;
height: 100%;
min-height: 12.6875rem;
margin: 20px 20px;
padding: 22px 20px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

@media screen and (max-width: 1325px){
min-height: 14.5rem;

}

@media screen and (max-width: 1020px){
  min-height: 12.75rem;
  
  }

@media screen and (max-width: 870px){
  min-height: 230px;
  
  }

@media screen and (max-width: 830px){
  min-height: 240px;
  
  }

@media screen and (max-width: 666px){
  min-height: 270px;
  
  }

@media screen and (max-width: 600px){
  min-height: 203px;

}
@media screen and (max-width: 430px){
  min-height: 223px;
}

@media screen and (max-width: 390px){
  min-height: 280px;
}
`

const Text = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSizes[16]};
  inherit;
`;

const Icon = styled.img`
width: 64px;
height: 64px;
margin-bottom: 12px;
`

type SlideProps = {
    icon: string,
    text: string;
}


const Slide: React.FC<SlideProps> = ({ icon, text }) => {
    return (
      <Container>
        <Icon src={icon} />
        <Text>{text}</Text>
      </Container>
    );
  };
  
  export default Slide;