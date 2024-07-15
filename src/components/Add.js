import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import "./Add.css";

const Add = ({addNewData}) => {

  const zoti = useRef()
  const url = useRef()
  const yoshi = useRef()
  const form = useRef()
  const narhi = useRef()
  const manzil = useRef()
  const tel = useRef()
  const navigate = useNavigate();

  const clearInputs = () => {
    form.current.reset()
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()
    const product = {
      zoti: zoti.current.value,
      url: url.current.value,
      yoshi: yoshi.current.value,
      manzil:manzil.current.value,
      narhi:narhi.current.value,
      tel:tel.current.value,
      id: uuidv4(),
    }
    addNewData(product)
    clearInputs()
    navigate("/products");
  }

  return (
    <div className="addProduct container">
      <form ref={form} onSubmit={handleSubmitClick}>
        <div className="form-group">
          <label htmlFor="name">Zoti:</label>
          <input type="text" id="name" ref={zoti} />
        </div>
        <div className="form-group">
          <label htmlFor="url">Rasmi URL orqali!: </label>
          <input type="text" id="url" ref={url} />
        </div>
        <div className="form-group">
          <label htmlFor="manzil">Manzil:</label>
          <select name="manzil" id="manzil" ref={manzil} >
            <option value="Andijon">Andijon</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Farg'on">Farg'ona</option>
            <option value="Jizzax">Jizzax</option>
            <option value="Xorazm">Xorazm</option>
            <option value="Namangan">Namangan</option>
            <option value="Navoiy">Navoiy</option>
            <option value="Qashqadaryo">Qashqadaryo</option>
            <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Sirdaryo">Sirdaryo</option>
            <option value="Surxondaryo">Surxondaryo</option>
            <option value="Toshkent">Toshkent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="yoshi">Yosh:</label>
          <input type="text" id="yoshi" ref={yoshi} />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Telefon raqam:</label>
          <input type="text" id="tel" ref={tel}  />
        </div>
        <div className="form-group">
          <label htmlFor="narhi">Narhi:</label>
          <input type="text" id="narhi" ref={narhi} />
        </div>

        <button className="add-btn">Eloni Joylash</button>
        <button type="reset" className="clear-btn">
          Eloni Tozalash
        </button>
      </form>
    </div>
  );
};

export default Add;
