import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import '../pages/AddProduct.css'

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("http://localhost:8080/api/v1/product", data)
      .then(function (response) {
        console.log(response);
        alert("New product created");
      })
      .catch(function (error) {
        console.log(error);
        console.log(data);
      });

  return (

    <div className="Empty">
          <h1 className="Test2">Add new pizza</h1>
      <div className="flex-child">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            type="price"
            label="Price"
            variant="filled"
            {...register("price", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <TextField
            id="filled-basic"
            label="Ingredients"
            variant="filled"
            {...register("ingredients", { required: true })}
          />
          {errors.exampleRequired && <p>This field is required</p>}

          <div>
            <Button variant="outlined" type="submit">
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}