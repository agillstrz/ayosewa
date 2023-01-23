import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";

function PageSearch() {
  const { name } = useParams();
  const [data, setDatas] = useState([]);
  const [load, setLoad] = useState(true);
  const getSearch = () => {
    GetSewa.Searching(name).then((res) => {
      setDatas(res.data.data);
    });
  };
  useEffect(() => {
    getSearch();
  }, [name]);
  return (
    <div className="content pt-24">
      <div className="grid grid-cols-3 mt-5 place-items-center">
        {data.data?.map((m) => (
          <Card key={m.id} data={m} />
        ))}
      </div>
    </div>
  );
}

export default PageSearch;
