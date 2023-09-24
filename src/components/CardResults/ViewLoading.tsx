import styled, { keyframes } from 'styled-components';
import Loader from '../Loader/Loader';


export default function LoadingCard() {
  return (
  <SkeletonCard>
    <Loader />
  </SkeletonCard>
    
    
    )
}

const pulsingOverlay = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;


const SkeletonCard = styled.div`
  position: relative;
  border-radius: 10px;
  max-width: 100%;
  min-height: 440px;
  margin-bottom: 20px;
  text-align: center;
padding-top: 35%;
  background-color: #fff;
  animation: ${pulsingOverlay} 0.8s linear infinite alternate;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

  @media (max-width: 768px) {
    padding: 19px 14px 19px 24px;
}
`;