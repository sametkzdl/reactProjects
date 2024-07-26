import { useEffect, useState } from "react";
import "./forms.css";
import { useForm } from "react-hook-form";

const Input = ({
  label,
  name,
  type,
  placeholder,
  requiredText,
  register,
  errors,
  pattern,
  validate,
  value,
  id,
  onChange,
  photos,
  accept,
  setPhotos,
}) => {
  return (
    <div className="wrapInput">
      <label htmlFor={id} style={{ paddingBlock: "10px" }}>
        {label}
      </label>
      <input
        value={value}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        multiple
        accept={accept}
        autoComplete="given-name"
        {...register(name, {
          required: true,
          pattern: pattern ? new RegExp(pattern, "i") : undefined,
          validate: validate,
          onChange: onChange,
        })}
        style={{ padding: "10px", border: "0.5px solid gray" }}
      />
      {errors[name] && <span>{requiredText}</span>}
      {name === "photo" &&
        photos.map((el, index) => {
          const deletPhoto = (lastModified) => {
            const fileInput = document.getElementById(id);
            const uptadetedPhotos = photos.filter(
              (photo) => photo.lastModified !== lastModified
            );
            setPhotos(uptadetedPhotos);
            if (uptadetedPhotos.length === 0) {
              fileInput.value = "";
            } else {
              // Create a new DataTransfer to hold the remaining files
              const dataTransfer = new DataTransfer();
              uptadetedPhotos.forEach((photo) => dataTransfer.items.add(photo));
              fileInput.files = dataTransfer.files;
            }
          };

          return (
            <div key={index} style={{ padding: "10px", display: "flex" }}>
              <img
                width={80}
                height={80}
                src={URL.createObjectURL(el)}
                alt={`preview-${index}`}
              />
              <span
                onClick={() => {
                  deletPhoto(el.lastModified);
                }}
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                -
              </span>
            </div>
          );
        })}
    </div>
  );
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm();

  const passwordValue = watch("password");
  const cityValue = watch("city");
  const [photos, setPhotos] = useState([]);

  const HandlePhoto = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prevstate) => [...prevstate, ...files]);
  };

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
      pattern: "",
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
      validate: (value) => value === passwordValue || "Passwords do not match",
    },
    {
      id: 7,
      label: "Men",
      name: "gender",
      type: "radio",
      requiredText: "Mandatory field",
      required: true,
      value: "Men",
    },
    {
      id: 8,
      label: "Women",
      name: "gender",
      type: "radio",
      requiredText: "Mandatory field",
      required: true,
      value: "Women",
    },
    {
      id: 9,
      label: "-18",
      name: "gender",
      type: "radio",
      requiredText: "Mandatory field",
      required: true,
      value: "Child",
    },
    {
      id: 10,
      label: "Photo",
      name: "photo",
      type: "file",
      placeholder: "Selecet photo",
      requiredText: "Mandatory field",
      required: true,
      onChange: HandlePhoto,
      accept: "image/png, image/jpeg",
    },
  ];
  const Cities = [
    { value: "Rize", id: 40 },
    { value: "Trabzon", id: 41 },
    { value: "İstanbul", id: 42 },
  ];
  const Towns = {
    Rize: [
      { value: "Çayeli", id: 40 },
      { value: "Pazar", id: 41 },
      { value: "Salarha", id: 42 },
    ],

    Trabzon: [
      { value: "Of", id: 40 },
      { value: "Arsin", id: 41 },
      { value: "Araklı", id: 42 },
    ],

    İstanbul: [
      { value: "Avcılar", id: 40 },
      { value: "Sarıyer", id: 41 },
      { value: "Üsküdar", id: 42 },
    ],
  };
  const onSubmit = (data) => {
    data.photo = photos;
    console.log(data);
    reset();
    setPhotos([]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        width: "400px",
        border: "2px solid black",
        padding: "20px",
        marginInline: "auto",
        marginBlock: "30px",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} control={control}>
        {Inputs.map(
          ({
            id,
            name,
            label,
            type,
            placeholder,
            requiredText,
            pattern,
            validate,
            value,
            onChange,
            accept,
          }) => (
            <Input
              key={id}
              errors={errors}
              register={register}
              id={id}
              name={name}
              label={label}
              type={type}
              placeholder={placeholder}
              requiredText={requiredText}
              pattern={pattern}
              validate={validate}
              value={value}
              onChange={onChange}
              photos={photos}
              accept={accept}
              setPhotos={setPhotos}
            />
          )
        )}

        <select
          style={{ width: "100px", padding: "10px" }}
          id="city"
          {...register("city", { required: true })}
        >
          <option value={""} hidden>
            İl seç
          </option>
          {Cities.map(({ value, id }) => {
            return (
              <option value={value} key={id}>
                {value}
              </option>
            );
          })}
        </select>
        {errors.city && <span>Mandatory field</span>}

        <select
          style={{ width: "100px", padding: "10px" }}
          id="town"
          {...register("town", { required: true })}
        >
          <option value={""} hidden>
            İlçe seç
          </option>
          {Towns[cityValue]?.map(({ value, id }) => {
            return (
              <option value={value} key={id}>
                {value}
              </option>
            );
          })}
        </select>
        {errors.town && <span>Mandatory field</span>}
        <button style={{ display: "block" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
