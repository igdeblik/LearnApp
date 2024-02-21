export const BlockList = ({ dataList }) => {
  const elements = dataList.map((el) => {
    return <li key={el}>{el}</li>;
  });

  return <ul>{elements}</ul>;
};
