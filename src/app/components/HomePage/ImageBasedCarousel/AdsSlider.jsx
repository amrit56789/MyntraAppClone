import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const rakshabandhanList = [
  {
    id: new Date(),
    image: "",
    // image: "https://i.pinimg.com/originals/02/84/c7/0284c7b61010c95f91f65f44a907e97f.jpg",
    title: "Ethnic Wear Collections",
    description: "For an always cool outlook"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://looksgud.com/blog/wp-content/uploads/2019/09/fabindia-kurta.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://www.stylesnic.com/wp-content/uploads/2020/04/White-Elegant-Kurtas-For-Men.jpg",
    title: "All White Indian Wear",
    description: "For an always cool outlook"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://4.bp.blogspot.com/-JhTIj-C3uRA/Vx9uqPdez5I/AAAAAAAAARM/0Bgvut-ydvsr2e860cHgwgAIpQpPVSWrACLcB/s1600/Gul-Ahmad-Men-Kurta-Slwar-Suite-Designs-2016-17-3.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  },
  {
    id: new Date(),
    image: "",
    // image: "https://astyletips.com/wp-content/uploads/2015/12/Best-Kurtas-for-Men-by-Bonanza-2.jpg",
    title: "Ethnic Casuals",
    description: "Indians surely know the route to comfort"
  }
]

function AdsSlider() {

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSlidesToShow(window.innerWidth < 768 ? 4 : 5)
      setSlidesToScroll(window.innerWidth < 768 ? 1 : 1)
    };
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll
  };
  return (
    <div className=" indent-1 max-sm:w-11/12 ">
      <h1 className="uppercase text-zinc-700
       mt-12 	sm:mt-16 sm:ml-7
       sm:text-3xl text-xl mb-10 tracking-widest font-bold ">
        RAKSHABANNDHAN GIFTS THIS WAY
      </h1>
      <div className="flex mx-24">
        {
          rakshabandhanList.map((item, index) => {
            return (
              <div className="flex flex-col m-4" key={index}>
                <Image src={item.image} width={200} height={100} className="h-80 w-72 object-cover object-custom-pos" alt="item.title" />
                <div className="flex flex-col">
                  <h2 className="font-bold text-xl mt-2 mb-1 font-serif	">{item.title}</h2>
                  <span className="text-sm">{item.description}</span>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default AdsSlider;
