import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";
import { HeroKos } from "../../components/HeroKos";
import datas from "../../mockup/dataRumah";

export const Kos = () => {
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
      <HeroKos />
      <div className="content">
        <div className="grid grid-cols-3 place-items-center">
          {data && data.data?.map((m) => <Card key={m.id} data={m} />)}
        </div>
      </div>
    </>
  );
};
