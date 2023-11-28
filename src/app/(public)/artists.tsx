"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Card = ({ artist }: { artist: string }) => {
  return (
    <div className={"inline-flex flex-col w-[150]"}>
      <Image
        src="https://appsbuildin2.click/musica/go/images/dashboard/feature-album/04.png"
        alt={artist}
        width={150}
        height={150}
        className={"rounded-tr-[5rem] rounded-bl-[5rem]"}
      />
      <div className="flex flex-col items-center p-4">
        <strong>{artist}</strong>
      </div>
    </div>
  );
};

const ButtonGroup = ({ carousel }: { carousel: Carousel }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-full p-2 bg-[#FF4545]"
        onClick={() => carousel.previous(1)}
      >
        <ArrowLeft className="text-white" size="1.2rem" />
      </button>
      <button
        className="rounded-full p-2 bg-[#FF4545]"
        onClick={() => carousel.next(1)}
      >
        <ArrowRight className="text-white" size="1.2rem" />
      </button>
    </div>
  );
};

export const Artists = () => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);

  return (
    <section className="m-4 rounded-xl shadow-xl overflow-hidden">
      <header className="p-4 text-2xl flex justify-between">
        <h3>Artistas Destacados</h3>
        {carousel && <ButtonGroup carousel={carousel} />}
      </header>
      <hr />
      <div className="p-4">
        <Carousel
          autoPlay={true}
          infinite={true}
          ref={(el) => setCarousel(el)}
          arrows={false}
          responsive={responsive}
          
        >
          <Card artist="Patricia Kaas" />
          <Card artist="Lewis Capaldi" />
          <Card artist="Patricia Kaas" />
          <Card artist="Lewis Capaldi" />
          <Card artist="Patricia Kaas" />
          <Card artist="Lewis Capaldi" />
        </Carousel>
      </div>
    </section>
  );
};
