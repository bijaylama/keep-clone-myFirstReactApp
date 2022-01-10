import ModelEdit from "../common/ModalEdit/ModalEdit";
import React, { useEffect } from "react";
import { useState } from "react";

export const Edit = ({
  input,
  setInput,
  editNote,
  openPop,
  setOpenPop,
  handleChange,
  handleButton,
}) => {
  // const handleChange = (event) => {
  //   console.log(event);

  //   setInput((preValue) => {
  //     return {
  //       ...preValue,
  //       event,
  //     };
  //   });
  // };

  return (
    <ModelEdit
      id={editNote.id}
      name="title"
      open={openPop}
      // onChange={(e) => handleChange(e.target)}
      editNote={editNote}
      openPop={openPop}
      setOpenPop={setOpenPop}
      title={editNote.title}
      content={editNote.content}
      handleButton={handleButton}
      handleChange={handleChange}
      setInput={setInput}
    />
  );
};
