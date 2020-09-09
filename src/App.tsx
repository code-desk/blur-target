import React from "react";
import styled from "styled-components";

export const App = () => {
  const onBlur = () => {
    console.log("blur");
  };

  const onChange = () => {
    console.log("change");
  };

  return (
    <AppCotainer>
      <input onChange={onChange} onBlur={onBlur} type="text" />
    </AppCotainer>
  );
};

const AppCotainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
