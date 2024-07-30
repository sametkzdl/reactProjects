import { useMemo, useState } from "react";
import React from "react";

const Header = React.memo(({ calculate }) => {
  console.log("re-rendered header component");
  // 5 ten sonra re-render olmaycak react.memo için
  return (
    <div>
      <h3>Header</h3>
      <h4>{calculate}</h4>
    </div>
  );
});

const First = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  console.log(text);
  // 5 ten sonra re-render olmaycak Header componentinde ..
  //gönderdiğimiz prop değişmez ise render olmaz React.memo ile sarmaladığımız component
  // useMemo kullanımı ile re-rendered dan kurtulma
  // REACT.MEMO ile aynı kullanımı yaparak 5 ten küçük iken useMemo yu çalıştırmadı çünkü
  //giden parametre sabit eğer değişirse useMemo aktifleşecek
  const calculate = useMemo(
    () => calculatinObject(),
    [number < 5 ? 0 : number]
  );
  return (
    <div>
      <h1> React Memo Lesson </h1>
      <Header calculate={calculate} />
      {number}
      <button onClick={() => setNumber(number + 1)}>Artır</button>
      <input onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

function calculatinObject() {
  const sentence =
    "Header componentine useMemo ile bir defa geliyorum ama eğer bağımlıklık değişirse bir kaç defa gelirim";
  console.log("calculating");
  for (let i = 0; i < 100000000; i++) {}
  console.log("calculeted successfully");
  return sentence;
}

export default First;
