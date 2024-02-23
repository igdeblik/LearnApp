export const BlockList = ({ dataList, deleteData }) => {
  const elements = dataList.map((el, index) => {
    const clearList = () => deleteData(index);
    return (
      <div
        key={index}
        style={{ display: "flex", flexDirection: "row", margin: "10px" }}
      >
        <li
          style={{
            listStyleType: "none",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {el}
        </li>
        <button
          className="small_btn"
          onClick={clearList}
          style={{ margin: "10px" }}
        >
          Delete
        </button>
      </div>
    );
  });

  return <ul>{elements}</ul>;
};
