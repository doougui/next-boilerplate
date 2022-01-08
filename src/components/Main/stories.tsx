import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main title={text('Title', 'React Avançadoooo')} />
)
