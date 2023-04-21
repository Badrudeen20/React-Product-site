import React, { useRef } from "react";
import { TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import { FormStoreContext } from "../context/FormStore";
export default function UserFormDetailForm() {
  const [info, setinfo] = useContext(FormStoreContext);
  const firstRef = useRef();
  const lastRef = useRef();
  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setinfo((val) => ({
      ...val,
      [name]: value,
      id: Math.random().toString(16).slice(2)
    }));
    if (firstRef.current.value && lastRef.current.value) {
      setinfo((val) => ({ ...val, validate: true }));
    } else {
      setinfo((val) => ({ ...val, validate: false }));
    }
  }
  return (
    <>
      <Typography variant="h4" component="h4">
        What is your name
      </Typography>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        margin="normal"
        name="firstname"
        fullWidth
        onInput={handleForm}
        inputRef={firstRef}
      />
      <br />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        margin="normal"
        name="lastname"
        onChange={handleForm}
        fullWidth
        inputRef={lastRef}
      />
      <br />
    </>
  );
}
