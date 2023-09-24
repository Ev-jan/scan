import styled from "styled-components";
import { useAppSelector, selectHistogramStatus, selectHistograms, selectHistogramError } from '../../../redux/hooks';
import Loading from "./ViewLoading";
import NotFound from "./ViewNotFound";
import Success from "./ViewSuccess";
import Error from "./ViewError";



export default function Hero() {
    const reqStatus = useAppSelector(selectHistogramStatus);
    const reqEror = useAppSelector(selectHistogramError);
    const slideData = useAppSelector(selectHistograms);

        return (
            <Top>
                {reqStatus === 'loading' && <Loading />}
                {reqStatus === 'success' && slideData?.length === 0 && <NotFound />}
                {reqStatus === 'success' && slideData?.length !== 0 && <Success />}
                {reqEror && <Error />}
            </Top>
        )

}



const Top = styled.section`
display: flex;
flex-flow: row wrap;
column-gap: 217px;
`
