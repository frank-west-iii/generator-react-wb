import React from 'react';

import { fetchContent } from '@root/content';
import { <%= ComponentName %> } from '../component';

describe('<<%= ComponentName %> />', () => {
  const defaultProps = {
    content: fetchContent('<%= componentName %>'),
  };

  const render = props => shallow(<<%= ComponentName %> {...defaultProps} {...props} />);

  test('properly renders the component', () => {
    expect(render()).toMatchSnapshot();
  });
});
