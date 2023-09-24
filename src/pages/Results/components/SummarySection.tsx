import styled from "styled-components";
import Carousel from "../../../components/Carousel/CarouselV3";
import Heading3 from "../../../components/Headings/H3";
import ResultCount from "./ResultCount";
import SlideResults from "../../../components/Slides/SlideResults";
import { selectHistogramError, selectHistogramStatus, selectHistograms, useAppSelector } from "../../../redux/hooks";


export default function Summary() {
    const slideData = useAppSelector(selectHistograms);
    const reqStatus = useAppSelector(selectHistogramStatus);
    const reqEror = useAppSelector(selectHistogramError);

    const notFound = reqStatus === 'success' && slideData?.length === 0;

    const totalFound = slideData?.length || 0;
    let slides = [<div></div>]

    
    if (reqEror) {
        return (null)
    }
    
    if (notFound) {
        return (null)
    }

    if (!notFound) {
        slides = slideData!.map((item, index) => {
            return (
                <SlideResults key={index} {...item} />
            )
        })
    }

        return ( 
            <Section>
                <Heading>Общая сводка</Heading>
                <ResultCount totalFound={totalFound} />
                <Carousel views="Results" slides={slides} loading={reqStatus === "loading"}/>
            </Section>
        )

}


const Section = styled.section`
margin-bottom: 107px;

@media (max-width: 768px) {
    margin-bottom: 57px;
}
`

const Heading = styled(Heading3)`
margin-bottom: 17px;
@media (max-width: 768px) {
    margin-bottom: 10px;
}
`

