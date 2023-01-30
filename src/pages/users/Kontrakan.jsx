import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";
import { HeroKontrakan } from "../../components/HeroKontrakan";
import GoToTop from "../../hooks/GoToTop";
export const Kontrakan = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getKate = () => {
    GetSewa.kateById(id).then((res) => setData(res.data.data));
  };

  useEffect(() => {
    getKate();
  }, []);

  return (
    <>
      <HeroKontrakan />
      <div className="content">
        <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center">
          {data && data.data?.map((m) => <Card key={m.id} data={m} />)}
        </div>
      </div>
      <GoToTop />
    </>
  );
};
