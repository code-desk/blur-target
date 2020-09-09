import React from "react";
import styled from "styled-components";

export const App = () => {
  const onBlur = (e: any) => {
    e.persist();
    console.log(e);
    console.log("blur");
  };

  const onChange = () => {
    console.log("change");
  };

  return (
    <AppCotainer>
      <input onChange={onChange} onBlur={onBlur} type="text" />
      <button>text</button>
    </AppCotainer>
  );
};

const AppCotainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
