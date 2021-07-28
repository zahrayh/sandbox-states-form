import { useState } from "react";
import InputElement from "./InputElement";
import "./styles.css";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleClick = () => {
    setIsSubmitted(true);
  };

  const handleChange = (value, name) => {
    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <div className="App">
      <form>
        <InputElement
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />

        <InputElement
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />

        <InputElement
          type="text"
          placeholder="Phone"
          name="phone"
          value={input.phone}
          onChange={handleChange}
        />

        <InputElement
          type="password"
          placeholder="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />

        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>

      <div className={`content ${isSubmitted ? "display" : "hide"} `}>
        <p>Name : {input.name}</p>
        <p>Email : {input.email}</p>
        <p>Phone : {input.phone}</p>
        <p>Password : {input.password}</p>
      </div>
    </div>
  );
}
