import styled from "styled-components";
import Header from '../components/Header_/Header'
import Footer from '../components/Footer/Footer'

const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
`
const HeaderContainer = styled.div`
position: fixed;
width: 100%;
z-index: 100;
height: auto;
background-color: ${props => props.theme.colors.primary.white};
`
const FooterContainer = styled.div`
height: ${props => props.theme.height.footer};
background-color: ${props => props.theme.colors.primary.blue};
`
type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Container>
                {children}
            </Container>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}