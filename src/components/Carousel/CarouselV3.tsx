import MainView from "./MainView";
import ResultsView from "./ResultsView";

type CarouselProps = {
  slides: JSX.Element[];
  views: "Main" | "Results";
  loading: boolean;
}


export default function Carousel({ slides, views = "Main", loading }: CarouselProps) {


  if (views === "Main") {
    return (
      <MainView slides={slides} />
    );
  } else {
    return (
      <ResultsView
        slides={slides}
        loading={loading}
      />
    );
  }
}