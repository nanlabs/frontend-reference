import React from 'react';

const preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};

export default preview;
