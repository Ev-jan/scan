import MainBoxAnimated from "../../components/Wrappers/MainBox";
import DocList from "./components/DocListSection";
import Hero from "./components/HeroSection";
import Summary from "./components/SummarySection";


export default function Results() {


    return (
        <MainBoxAnimated>
            <Hero />
            <Summary />
            <DocList />
        </MainBoxAnimated>
    )
}