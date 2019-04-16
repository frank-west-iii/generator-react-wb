import { compose, setDisplayName } from 'recompose';

import { withContent } from '@root/helpers';

export const enhance = compose(
  setDisplayName('<%= ComponentName %>'),
  withContent('<%= componentName %>')
);
