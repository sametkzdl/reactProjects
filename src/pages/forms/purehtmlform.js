import { useRef, useState } from "react";
import "./forms.css";

const Input = ({
  label,
  name,
  type,
  placeholder,
  requiredText,
  required,
  pattern,
  onChange,
  inputRef,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="wrapInput">
      <label htmlFor={name} style={{ paddingBlock: "10px" }}>
        {label}
      </label>
      <input
      className="custominput"
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        // ref={inputRef}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
        onChange={onChange}
        onFocus={() => name === "confirmpassword" && setFocused(true)}
      />
      <span
        className="customspan"
        focused={focused.toString()}
        style={{ paddingBlock: "10px", color: "red" }}
      >
        {requiredText}
      </span>
    </div>
  );
};

const PureHtmlForm = () => {
  // name attribute u sunucuya gönderilen attribute in ismini karşılar
  // burada state kullanırsak girilen değeri dinamik olarak renderlayacak ama biz bunu engellemek için
  // useRef() ve object oluşturuyoruz ..
  //ama buna büyük projelerde dikkat etmemiz gereklidir ..
  //şimdi normal onChange üzerinden tüm verileri statelerde tutup yönetecez
  // const inputRef = useRef();
  // console.log(inputRef.current.value);
  // const data = new FormData(e.target);
  // bu üst kısım use ref ve object için render dan kurtulmak için
  const [loading,setLoading] = useState (false)
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    password: "",
    confirmpassword: "",
  });
  const Inputs = [
    {
      id: 1,
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Name",
      requiredText: "Baş harf büyük , rakam ve boşluk içeremez",
      required: true,
      pattern: "^[A-Z][a-z]{9,}$",
    },
    {
      id: 2,
      label: "Surname",
      name: "surname",
      type: "text",
      placeholder: "Surname",
      requiredText: "Baş harf büyük , rakam ve boşluk içeremez",
      required: true,
      pattern: "^[A-Z][a-z]{9,}$",
    },
    {
      id: 3,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      requiredText: "Email is required element",
      required: true,
      pattern: null,
    },
    {
      id: 4,
      label: "Telephone",
      name: "telephone",
      type: "number",
      placeholder: "Telephone",
      requiredText: "Telephone is required element",
      required: true,
      pattern: "",
    },
    {
      id: 5,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      requiredText: "Baş harf büyük , rakam ve boşluk içeremez",
      required: true,
      pattern: "^[A-Z][a-z]{9,}$",
    },
    {
      id: 6,
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      requiredText: "Password u yineleyin",
      required: true,
      pattern: values.password,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setLoading(true)
    setTimeout(()=> {
        setLoading(false)
    },1500)
  };
  return (
    <div
      style={{
        width: "400px",
        border: "1px solid black",
        boxSizing: "border-box",
        padding: "20px",
        marginInline: "auto",
        marginBottom: "40px",
      }}
    >
      <h2>Pure Html Form</h2>
      <form onSubmit={handleSubmit}>
        {Inputs.map(
          ({
            name,
            label,
            type,
            placeholder,
            required,
            pattern,
            requiredText,
            id,
          }) => {
            return (
              <Input
                key={id}
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                requiredText={requiredText}
                required={required}
                pattern={pattern}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            );
          }
        )}

        <button type="submit"   >{loading ? "sending" : "submit" }</button>
        <button type="reset">Reset</button>
      </form>
      <h4 style={{fontSize:"40px"}}>Pure React Form Tamamlandı </h4>
      <h5>Tarih 23 / 07 2024</h5>
    </div>
  );
};

export default PureHtmlForm;
