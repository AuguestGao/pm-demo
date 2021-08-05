import React, { useState } from "react";
import { PageContainer, FormContainer } from "./new.page.styles";
import FormInput from "../../components/FormInput/FormInput.component";

const NewPage = () => {
  const [profile, setProfile] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    customFields: [],
  });

  return (
    <PageContainer>
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
          name="profileEmail"
          value={profile.email}
          label="Email"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <FormInput
          type="tel"
          name="profilMobile"
          value={profile.mobile}
          label="Mobile"
          onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
        />
      </FormContainer>
    </PageContainer>
  );
};

export default NewPage;
