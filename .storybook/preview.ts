import type { Preview } from "@storybook/vue3";
import "./../assets/styles/main.scss"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'grey',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

export default preview;
