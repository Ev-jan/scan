import styled from 'styled-components'
import Heading3 from "../../../components/Headings/H3";
import Button from '../../../components/Button/Button';
import ResultCard from '../../../components/CardResults/CardResults';
import { selectAllDocsShown, selectDocStatus, selectDocs, useAppSelector, useAppDispatch, selectPageSize } from '../../../redux/hooks';
import { getPublicationsAsync, setCurrentPageIdsAsync } from '../../../redux/api';
import { TScanDoc } from '../../../types';
import { useNavigate } from "react-router-dom";
import LoadingCard from '../../../components/CardResults/ViewLoading';
import { useEffect, useState } from 'react';

export default function DocList() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const reqStatus = useAppSelector(selectDocStatus);
    const docs = useAppSelector(selectDocs);
    const allDocsShown = useAppSelector(selectAllDocsShown);
    const pageSize = useAppSelector(selectPageSize);
    const [isProcessing, setIsProcessing] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsProcessing(false);
        }, 2000);
      
        return () => clearTimeout(timeout);
      }, []);


    const loadMore = async () => {
        await dispatch(setCurrentPageIdsAsync());
        await dispatch(getPublicationsAsync());
    }

    const goToSearch = () => {
        navigate('/search');
    }


    let totalCountPerLeftCol = 0;
    let totalCountPerRightCol = 0;

    const leftColumn: TScanDoc[] = [];
    const rightColumn: TScanDoc[] = [];

    docs.forEach(item => {
        if (totalCountPerLeftCol <= totalCountPerRightCol) {
            leftColumn.push(item);
            totalCountPerLeftCol += item.wordCountNum;
        } else {
            rightColumn.push(item);
            totalCountPerRightCol += item.wordCountNum;
        }
    });


    return (
        <Section>
            {reqStatus === "success" && docs.length === 0 && <Heading>Список документов пуст</Heading>}
            {reqStatus === "success" && docs.length !== 0 && <Heading>Список документов</Heading>}
            <CardContainer>
                {
                    isProcessing ? (
                        <>
                            {Array.from({ length: pageSize }).map((_, index) => (
                                <LoadingCard key={index} />
                            ))}
                        </>
                    ) : (
                        <>
                            <Column>
                                {leftColumn.map((item) => (
                                    <ResultCard key={item.id} {...item} />
                                ))}
                            </Column>
                            <Column>
                                {rightColumn.map((item) => (
                                    <ResultCard key={item.id} {...item} />
                                ))}
                            </Column>
                        </>
                    )
                }
            </CardContainer>
            {!allDocsShown ?
                <StyledButton
                    elementType='button'
                    isLoading={reqStatus === "loading"}
                    disabled={reqStatus === "loading"}
                    onClick={loadMore}>Показать больше
                </StyledButton> :
                <StyledButton
                    elementType='button'
                    hue='dark'
                    onClick={goToSearch}
                >Вернуться к поиску
                </StyledButton>
            }
        </Section>
    )
}


const Heading = styled(Heading3)`
margin-bottom: 58px;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`
const Section = styled.section`
margin-bottom: 107px;
width: 100%;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`
const CardContainer = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto;
width: 100%;
grid-column-gap: 38px;
margin-bottom: 38px;


@media (max-width: 900px) {
    column-gap: 20px;
    margin-bottom: 36px;
    flex-flow: column nowrap;

    }
@media (max-width: 650px) {
    grid-template-columns: 1fr;

    }
`

const Column = styled.div<{ $loading?: boolean }>`
display: flex;
flex-flow: column nowrap;
row-gap: 20px;
border-radius: 10px;
border-radius: 10px;
}
`

const StyledButton = styled(Button)`
margin: 0 auto;
max-width: 305px;
grid-column: 1 / 3;
`
