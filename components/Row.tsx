import React from 'react';
import {View} from 'react-native';

interface Props {
  children: any;
}

const Row: React.FC<Props> = props => {
  return <View style={{flexDirection: 'row'}}>{props.children}</View>;
};

export default Row;
