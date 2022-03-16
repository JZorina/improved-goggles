import React from 'react';
import {Text} from 'react-native';
import Style from './StandardText.style';

const StandardText = (props: any) => {
  const {style, children, ...rest} = props;
  return (
    <Text
      style={[
        Style.text,
        style,
        rest.smallText ? Style.smallText : {},
        rest.mdlText ? Style.mdlText : {},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default StandardText;
