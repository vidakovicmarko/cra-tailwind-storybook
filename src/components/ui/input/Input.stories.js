import React from 'react';

import { Input } from './Input';

export default {
  title: 'Ui/Input',
  component: Input
}

const Story = (args) => <Input {...args} />;

export const Text = Story.bind({});
Text.args = {
  type: 'text'
}