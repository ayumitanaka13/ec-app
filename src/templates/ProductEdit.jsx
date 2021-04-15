import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton, SelectBox, TextInput } from "../components/UIkit";
import { saveProduct } from "../reducks/products/operations";

const ProductEdit = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState("");

  const inputName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );
  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );
  const inputPrice = useCallback(
    (e) => {
      setPrice(e.target.value);
    },
    [setPrice]
  );

  const categories = [
    { id: "tops", name: "tops" },
    { id: "shirts", name: "shirts" },
    { id: "pants", name: "pants" },
  ];

  const genders = [
    { id: "all", name: "すべて" },
    { id: "male", name: "メンズ" },
    { id: "female", name: "レディース" },
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">Edit item</h2>
      <div className="c-section-container">
        <TextInput
          fullWidth={true}
          label={"Name"}
          multiline={false}
          required={true}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          fullWidth={true}
          label={"Description"}
          multiline={true}
          required={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
        <SelectBox
          label={"Category"}
          required={true}
          options={categories}
          select={setCategory}
          value={category}
        />
        <SelectBox
          label={"Gender"}
          required={true}
          options={genders}
          select={setGender}
          value={gender}
        />
        <TextInput
          fullWidth={true}
          label={"Price"}
          multiline={false}
          required={true}
          rows={1}
          value={price}
          type={"number"}
          onChange={inputPrice}
        />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
            label={"Save"}
            onClick={() =>
              dispatch(saveProduct(name, description, category, gender, price))
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
