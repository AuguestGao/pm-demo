import React from "react";
import {
  FormInputContainer,
  GroupContainer,
  FormInputLabel,
} from "./FormInput.styles";

const FormInput = ({ label, ...props }) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    {label ? (
      <FormInputLabel className={props.value ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
