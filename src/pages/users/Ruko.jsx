import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";
import { HeroRuko } from "../../components/HeroRuko";
import datas from "../../mockup/dataRumah";

const Ruko = () => {
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
      <HeroRuko />
      <div className="content">
        <div className="grid grid-cols-3 place-items-center">
          {data && data.data?.map((m) => <Card key={m.id} data={m} />)}
        </div>
      </div>
    </>
  );
};

export default Ruko;
