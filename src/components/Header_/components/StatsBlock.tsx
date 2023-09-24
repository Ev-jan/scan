import styled from 'styled-components';
import Loader from "../../Loader/Loader"
import { useGetAccountInfoQuery } from '../../../redux/api';
import { useAppDispatch, useAppSelector, selectCompanyLimit, selectUsedCompanyCount } from '../../../redux/hooks';
import { setAccountData } from '../../../redux/features/profile/profile';
import { useEffect } from 'react';
import { EventFiltersInfoSchema } from '../../../schemas';


export default function StatsBlock() {
  const { data, isLoading } = useGetAccountInfoQuery()
  const dispatch = useAppDispatch();

  useEffect(() => {

    if (data) {
      try {
        const parsedData = EventFiltersInfoSchema.parse(data);
        const { usedCompanyCount, companyLimit } = parsedData.eventFiltersInfo;
        dispatch(setAccountData({ usedCompanyCount, companyLimit }));
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    }
  }, [data, dispatch]);

const usedCompanyCount = useAppSelector(selectUsedCompanyCount);
const companyLimit = useAppSelector(selectCompanyLimit);

  return (
    <Container className='StatsBlock'>
      {isLoading ?
        <Loader /> :
        <Content>
          <Description>Использовано компаний</Description><CompanyCount>{usedCompanyCount}</CompanyCount>
          <Description>Лимит по компаниям</Description><Limit>{companyLimit}</Limit>
        </Content>}
    </Container>

  )
      }


const Container = styled.div`
display: flex;
justify-content: center;
width: 175px;
height: 100%;
max-height: 100%;
border-radius: 5px;
background: rgba(217, 217, 217, .3);

& > svg {
  align-self: center;
  margin: 0 auto;
}


@media screen and (max-width: 910px) {
  align-items: start;
  justify-content: start;
  max-width: 132px;
  padding: 5px 10px;
  min-height: 75px;
  max-height: 75px;
}

@media screen and (max-width: 650px) {
  margin-bottom: -141px;
}

`

const Content = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);
justify-content: space-between;
row-gap: 2px;
column-gap: 9px;
background: transparent;

&>*{
    background: transparent;
    padding: 0;
    margin: 0;
}

&>p:nth-of-type(1) {
grid-column: 1/2;
grid-row: 1/2;
align-self: end;
margin-bottom: 3.5px;
justify-self: end;
}

&>p:nth-of-type(2) {
grid-column: 1/2;
grid-row: 2/3;
align-self: start;
margin-top: 3.5px;
justify-self: end;
}

&>div:nth-of-type(1) {
grid-column: 2/3;
grid-row: 1/2;
align-self: end;
}

&>div:nth-of-type(2) {
grid-column: 2/3;
grid-row: 2/3;
align-self: start;
}

@media screen and (max-width: 910px) {
  display: flex;
  flex-flow: column wrap;
  column-gap: 0px;
  & > p {
    font-size: 8px;

  }

  & p:nth-of-type(1) {
    align-self: start;
  }

  &>div:nth-of-type(1) {
  align-self: start;
  }
  
  &>div:nth-of-type(2) {
  align-self: start;
  }
}

`
const Description = styled.p`
font-size: 10px;
font-weight: 400;
opacity: 0.4;
`
const CompanyCount = styled.div`
font-size: 14px;
font-weight: 700;

`
const Limit = styled.div`
font-size: 14px;
font-weight: 700;
color: #8AC540;
`