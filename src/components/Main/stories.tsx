import { Story, Meta } from '@storybook/react/types-6-0';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title',
    description: 'default description',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  title: 'Next boilerplate',
  description: 'Sample description',
};

export const Default: Story = (args) => <Main {...args} />;
