import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import StandardText from '../../StandardText';
import styles from './StandartButton.style';

interface ButtonProps extends TouchableOpacityProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode | string;
  type?: 'regular' | 'none' | 'error';
  animated?: boolean;
  style?: any;
  disabled?: boolean;
}

const StandartButton = ({
  containerStyle,
  children,
  type = 'none',
  animated = false,
  style,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const childrenIsString = typeof children === 'string';
  const textStyle = type === 'error' ? styles.errorText : styles.text;

  return(
    <TouchableOpacity
      disabled={disabled}
      style={[containerStyle, disabled ? styles.disabled : {}, styles[type]]}
      {...rest}>
      {childrenIsString ? (
        <StandardText style={textStyle}>{children}</StandardText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
export default StandartButton;
