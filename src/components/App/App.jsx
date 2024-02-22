import { useState } from "react";
import { Form } from "../Form/Form";
import { BlockList } from "../BlockList/BlockList";

export const App = () => {
  const [data, setData] = useState([]);
  const deleteElements = (index) => {
    const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
    console.log(newArray);
    setData(newArray);
  };
  const newData = (newer) => {
    const newArray = [...data, newer];
    setData(newArray);
  };

  const deleteData = () => {
    const newArray = [];
    setData(newArray);
  };

  return (
    <>
      <Form upgradeData={newData} deleteData={deleteData} />
      <BlockList dataList={data} deleteData={deleteElements} />
    </>
  );
};
