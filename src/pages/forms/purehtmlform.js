import { useRef, useState } from "react";
import "./forms.css";

const Input = ({
  label,
  name,
  type,
  setValues,
  placeholder,
  requiredText,
  required,
  pattern,
  inputRef,
}) => {
  return (
    <div className="wrapInput">
      <label htmlFor={name} style={{ paddingBlock: "10px" }}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        // ref={inputRef}
        onChange={(e) => setValues(e.target.value)}
      />
      <span style={{ paddingBlock: "10px", color: "red" }}>{requiredText}</span>
    </div>
  );
};

const PureHtmlForm = () => {
  // name propu sunucuya gönderilen propun ismini karşılar
  // burada state kullanırsak girilen değeri dinamik olarak renderlayacak ama biz bunu engellemek için
  // useRef() ve object oluşturuyoruz ..
  //ama buna büyük projelerde dikkat etmemiz gereklidir ..
  //şimdi normal onChange üzerinden tüm verileri statelerde tutup yönetecez
  // const inputRef = useRef();
  // console.log(inputRef.current.value);
  // const data = new FormData(e.target);
  // bu üst kısım use ref ve object için render dan kurtulmak için
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
      pattern:"^[A-Z][a-z]{9,}$",
    },
    {
      id: 2,
      label: "Surname",
      name: "surname",
      type: "text",
      placeholder: "Surname",
      requiredText: "Surname is required element",
      required: true,
      pattern:"^^[A-Z][a-z]{9,}$",
    },
    {
      id: 3,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      requiredText: "Email is required element",
      required: true,
      pattern:"/^[a-z ,.'-]+$/i",
    },
    {
      id: 4,
      label: "Telephone",
      name: "telephone",
      type: "number",
      placeholder: "Telephone",
      requiredText: "Telephone is required element",
      required: true,
      pattern:"/^[a-z ,.'-]+$/i",
    },
    {
      id: 5,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      requiredText: "Password is required element",
      required: true,
      pattern:"/^[a-z ,.'-]+$/i",
    },
    {
      id: 6,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      requiredText: "Confirm Password is required element",
      required: true,
      pattern:"/^[a-z ,.'-]+$/i",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
        {Inputs.map(({ name, label, type, placeholder,required, pattern,requiredText, id }) => {
          return (
            <Input
              key={id}
              name={name}
              label={label}
              type={type}
              placeholder={placeholder}
              setValues={setValues}
              requiredText={requiredText}
              required={required}
              pattern={pattern}
            />
          );
        })}

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default PureHtmlForm;
