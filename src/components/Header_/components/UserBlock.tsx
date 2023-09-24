import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { clearCredentials } from "../../../redux/features/authentication/authentication";
import { clearProfileData } from "../../../redux/features/profile/profile";


type UserBlockProps = {
    name: string,
    image?: string
}
export default function UserBlock({ user }: { user: UserBlockProps}) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSignOut = () => {
        dispatch(clearCredentials());
        dispatch(clearProfileData())
        navigate('/auth/signin');
        

    }

    return (
        <Container className='UserBlock'>
            <UserName>{user.name}</UserName>
            <Avatar src={user.image}/>
            <SingOut onClick={handleSignOut}>Выйти</SingOut>
        </Container>
    )
}


const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);
grid-template-areas:
    "name avatar"
    "signout avatar";
justify-items: end;
column-gap: 3px;
height: 2rem;
width: 7.5rem;

@media screen and (max-width: 650px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    "avatar"
    "name";
    "signout";
    justify-items: center;
    row-gap: 5px;
}
`

const Avatar = styled.img`
grid-area: avatar;
border-radius: 50px;
width: 32px;
height: 32px;
`

const SingOut = styled.button`
grid-area: signout;
all: unset;
cursor: pointer;
color: rgba(0, 0, 0, .4);
font-size: ${props => props.theme.fontSizes[10]};
font-weight: 400;

@media screen and (max-width: 650px) {
        color: ${props => props.theme.colors.primary.white};
    }
`

const UserName = styled.div`
grid-area: name;
color: rgba(0, 0, 0, .7);
font-size: ${props => props.theme.fontSizes[14]};
font-weight: 400;
text-align: end;
min-width: 4.6875rem;
@media screen and (max-width: 650px) {
    color: ${props => props.theme.colors.primary.white};
}
`