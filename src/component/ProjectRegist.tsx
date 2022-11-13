import { useCallback, useState } from "react";
import "../styles/main.css";
import Button from "../subComponent/Button/Button";
import Form from "../subComponent/Form/Form";

const ProjectRegist = () => {
  const templateList: {}[] = [
    { name: "Temp1", age: "12", address: "Nam Dinh" },
    { name: "Temp2", age: "13", address: "Nam Dinh" },
    { name: "Temp3", age: "14", address: "Nam Dinh" },
    { name: "Temp4", age: "15", address: "Nam Dinh" },
    { name: "Temp5", age: "16", address: "Nam Dinh" },
    { name: "Temp6", age: "17", address: "Nam Dinh" },
    { name: "Temp7", age: "18", address: "Nam Dinh" },
    { name: "Temp8", age: "19", address: "Nam Dinh" },
    { name: "Temp9", age: "20", address: "Nam Dinh" },
    { name: "Temp10", age: "21", address: "Nam Dinh" },
    { name: "Temp11", age: "22", address: "Nam Dinh" },
    { name: "Temp12", age: "23", address: "Nam Dinh" },
    { name: "Temp13", age: "24", address: "Nam Dinh" },
  ];

  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    address: "",
    desc: "",
  });
  const [showForm, setShowForm] = useState<boolean>(false);
  const [hasChangeDesc, setChangeDesc] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const onHandleBtn = (value: any) => () => {
    let okConfirm = true;
    console.log(inputData);
    if (inputData.desc) okConfirm = window.confirm("OK?");

    if (okConfirm) {
      setInputData({
        ...inputData,
        name: value.name,
        age: value.age,
        address: value.address,
      });
      setShowForm(true);
    }
  };
  const onHandleInput = (value: string) => () => {
    console.log(value);
    setInput(value);
  };
  const onChangeInput = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    const data = {
      ...inputData,
      [name]: value,
    };

    setInputData(data);
    console.log(inputData);
  };
  console.log(input);
  return (
    <div className="project">
      <div className="container">
        <div className="btnWrap">
          {templateList.slice(0, 20).map((t: any) => {
            return (
              <Button
                text={t.name}
                onClick={onHandleBtn({
                  name: t.name,
                  age: t.age,
                  address: t.address,
                })}
                key={t.name}
              />
            );
          })}
        </div>
        <Button text="Khong dung Template" />
      </div>
      {showForm && (
        <div className="container">
          <Form
            name={inputData.name}
            age={inputData.age}
            address={inputData.address}
            desc={inputData.desc}
            onChange={onHandleInput}
            onChangeInput={onChangeInput}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectRegist;
