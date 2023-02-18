import React from "react";

import { FormContainer, FormButtonContainer } from "../../Containers";
import { Input } from "./Input";
import { MultiInput } from "./MultiInput";
import { CheckboxGroup } from "./CheckboxGroup";
import { Select } from "./Select";
import { RadioGroup } from "./RadioGroup";
import { ResetButton } from "./ResetButton";
import { SubmitButton } from "./SubmitButton";

export const Form = ({ text }: String | any) => {
  return (
    <FormContainer>
      <Input />
      <Input />
      <MultiInput />
      <CheckboxGroup />
      <Select />
      <RadioGroup />
      <FormButtonContainer>
        <ResetButton />
        <SubmitButton />
      </FormButtonContainer>
    </FormContainer>
  );
};
