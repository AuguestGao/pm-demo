import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormInput from "../../components/FormInput/FormInput.component";

import {
  ProfileRootContainer,
  FormContainer,
  CustomFieldContainer,
  SelectContainer,
  CustomFieldDisplayContainer,
  DeleteButtonContainer,
} from "./profile.page.styles";
import { createCard } from "../../redux/slices/cardsSlice";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    customFields: [],
  });

  const resetProfile = () =>
    setProfile({
      name: "",
      address: "",
      email: "",
      mobile: "",
      customFields: [],
    });

  const [field, setField] = useState({
    name: "",
    type: "text",
    value: "",
  });

  const resetField = () =>
    setField({
      name: "",
      type: "text",
      value: "",
    });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddFieldClicked = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,
      customFields: [...profile.customFields, { ...field, id: nanoid() }],
    });
    resetField();
  };

  const handleCreateCardClicked = () => {
    dispatch(createCard(profile));
    history.push("/");
  };

  const handleCancelCreateCardClicked = () => {
    resetProfile();
    history.push("/");
  };

  const handleCustomFieldChange = (e) => {
    const { name, value } = e.target;
    const id = e.target.parentNode.id;
    setProfile({
      ...profile,
      customFields: [
        ...profile.customFields.map((entry) =>
          entry.id === id ? ((entry.name = name), (entry.value = value)) : entry
        ),
      ],
    });
  };

  const handleCustomFieldDelete = (e) => {
    const id = e.target.parentNode.id;
    setProfile({
      ...profile,
      customFields: [
        ...profile.customFields.filter((entry) => entry.id !== id),
      ],
    });
  };

  const renderCustomFields = profile.customFields.map(
    ({ id, name, type, value }) => (
      <CustomFieldDisplayContainer key={id} id={id}>
        <FormInput
          name={name}
          type={type}
          value={value}
          label={name}
          onChange={handleCustomFieldChange}
        />
        <DeleteButtonContainer onClick={handleCustomFieldDelete}>
          &#x2716;
        </DeleteButtonContainer>
      </CustomFieldDisplayContainer>
    )
  );

  return (
    <ProfileRootContainer>
      <FormContainer>
        <h2>NEW</h2>
        <FormInput
          type="text"
          name="name"
          value={profile.name}
          label="Name"
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          required
        />
        <FormInput
          type="text"
          name="profileAddress"
          value={profile.address}
          label="Address"
          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
        />
        <FormInput
          type="email"
          name="email"
          value={profile.email}
          label="Email"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <FormInput
          type="tel"
          name="mobile"
          value={profile.mobile}
          label="Mobile"
          onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
        />

        {profile.customFields.length ? renderCustomFields : null}

        <CustomFieldContainer>
          <FormInput
            type="text"
            value={field.name}
            name="name"
            onChange={(e) => setField({ ...field, name: e.target.value })}
            label="Field Name"
          />
          <SelectContainer
            name="type"
            onChange={(e) => setField({ ...field, type: e.target.value })}
            value={field.type}
            className="mb-2"
            styles
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="tel">Phone</option>
            <option value="email">Email</option>
            <option value="date">Date</option>
          </SelectContainer>
          <FormInput
            type={field.type}
            value={field.value}
            name="value"
            onChange={(e) => setField({ ...field, value: e.target.value })}
            label={field.type === "date" ? null : "Field Value"}
          />
          <Button
            className="mt-2"
            variant="outline-dark"
            onClick={handleAddFieldClicked}
            disabled={!field.name || !field.value}
          >
            ADD
          </Button>
        </CustomFieldContainer>
      </FormContainer>
      <ButtonGroup>
        <Button
          variant="dark"
          onClick={handleCreateCardClicked}
          hidden={!profile.name}
        >
          Confirm
        </Button>
        <Button variant="secondary" onClick={handleCancelCreateCardClicked}>
          Cancel
        </Button>
      </ButtonGroup>
    </ProfileRootContainer>
  );
};

export default ProfilePage;
