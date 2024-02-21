import { useState } from "react";
import { Form } from "../Form/Form";
import { BlockList } from "../BlockList/BlockList";

export const App = () => {
  const [data, setData] = useState([]);
  const newData = (newer) => {
    const newArray = [...data, newer];
    console.log(newArray);
    setData(newArray);
  };

  const deleteData = () => {
    const newArray = [];
    setData(newArray);
  };

  return (
    <>
      <Form upgradeData={newData} deleteData={deleteData} />
      <BlockList dataList={data} />
    </>
  );
};
