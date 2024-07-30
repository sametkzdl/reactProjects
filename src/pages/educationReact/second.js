import { useCallback, useState } from "react";
import React from "react";

const İncreament = React.memo(({ increament }) => {
  console.log("The increment function worked");
  return (
    <div>
      <h3>İncreament Function</h3>
      <button onClick={increament}>artır</button>
    </div>
  );
});

const Second = () => {
  console.log("the main component worked");
  const [number, setNumber] = useState(0);
  // const increament = () => setNumber(() => number + 1);
  //üstteki normal yapılış bu durmda gönderen prop gibi gönderilen componentte render olur
  // -----------------------------------------------------
  const increament = useCallback(() => {
    setNumber((prevstate) => prevstate + 1);
  }, []);
  // doğru kullanım sadece gönderen doğal olarak render olacak gönderilen sabit kalır
  //---------------------------------------
  // eğer alttaki gibi gönderirsek function sürekli olarak değişecek çünkü
  // number değiştiği zaman setNumber(içindeki kısımda değişmiş oalcak) .. ayrıca sadece bir defa çalışcak
  //çünkü sadece sayfa açıldığında çalışır halde yaptık
  // const increament = useCallback(() => {
  //   setNumber(number+ 1);
  // }, []);
  return (
    <div>
      <h1> UseCallback Lesson</h1>
      <div>{number}</div>
      <İncreament increament={increament} />
    </div>
  );
};

export default Second;

