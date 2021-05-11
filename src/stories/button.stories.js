import React from "react";
import ButtonPrimary from "../components/button";

export default {
  title: "Documentation/Button",
  component: ButtonPrimary,
  //   argTypes: {
  //     label: { control: "save" },
  //   },
};

const Template = (args) => <ButtonPrimary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Save",
};
