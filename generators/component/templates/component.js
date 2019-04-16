// @flow

import React from 'react';
import { View } from 'react-native';
import { Text } from '@waybetter/shared-mobile';

import { styles } from './styles';

type Props = {
  content: Object,
};

type Result = React$Element<Props>;

export const <%= ComponentName %> = ({ content }: Props): Result => (
  <View>
    <Text><%= ComponentName %></Text>
  </View>
);
