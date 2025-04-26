import {FieldError} from 'react-aria-components';

import {Text} from './Text';

export function InlineError() {
  return (
    <Text appearance="critical" asChild>
      <FieldError />
    </Text>
  );
}
