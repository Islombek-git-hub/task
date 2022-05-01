import React, { useState } from "react";

const Phoneinput = () => {
  const [phone_number, setPhone_number] = useState("+998");
  const [select_val, setSelect_val] = useState();
  console.log(select_val);
  console.log(phone_number);
  return (
    <div className="inp">
      <select
        value={select_val}
        onChange={(e) => {
          setSelect_val(e.target.value);
          setPhone_number(e.target.value);
        }}
      >
        <option value="+998" key="UZ">
          UZ
        </option>
        <option value="+7" key="RU">
          RU
        </option>
      </select>

      <input
        type="text"
        value={phone_number}
        onChange={(e) => setPhone_number(e.target.value)}
      />
    </div>
  );
};

export default Phoneinput;
