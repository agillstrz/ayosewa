import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import GetSewa from "../apis/get.api";
import CardRekomendasi from "./CardRekomendasi";

function Rekomendasi() {
  const [data, setData] = useState([]);

  const getRekomendasi = () => {
    GetSewa.Rekomendasi()
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRekomendasi();
  }, []);

  return (
    <div className="px-10 ">
      <h2 className="text-3xl font-bold text-color2 my-2 ">Rekomendasi</h2>
      <div className="w-full mx-auto ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
        >
          {data &&
            data?.map((m) => (
              <SwiperSlide className="p-2 " key={m.id}>
                <CardRekomendasi data={m} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Rekomendasi;
