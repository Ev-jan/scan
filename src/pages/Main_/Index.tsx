import HeroSection from "./components/heroSection";
import WhyWeSection from "./components/whyWeSection";
import TariffSection from "./components/tariffSection";
import MainBoxAnimated from "../../components/Wrappers/MainBox";

export default function Main() {

    return (
        <MainBoxAnimated>
            <HeroSection />
            <WhyWeSection />
            <TariffSection />
        </MainBoxAnimated>
    )
}

