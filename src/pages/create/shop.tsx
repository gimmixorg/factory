import FormItemTextInput from '@app/components/forms/FormItemTextInput';
import CreateLayout from '@app/layouts/CreateLayout';
import React, { FunctionComponent, useState } from 'react';

const CreateShopPage: FunctionComponent = () => {
  const [name, setName] = useState('');
  const deploy = async () => {
    return {};
  };
  return (
    <CreateLayout
      title="Shop"
      version="v0.0.1"
      description="Create a personal NFT shop or portfolio. You'll be able to mint your own NFTs efficiently, and sell them as one-offs or multi-editions."
      deploySite={deploy}
    >
      <FormItemTextInput
        label=""
        description=""
        value={name}
        setValue={setName}
      />
    </CreateLayout>
  );
};

export default CreateShopPage;
