import React, {useRef, useState} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Style from './BasicInput.style';

interface BasicInputProps {
  mode?: 'regular' | 'center';
  type?: 'default' | 'numeric';
  value?: string;
  placeholder?: string;
  onChange?: (text: any) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  style?: StyleProp<ViewStyle>;
}

const BasicInput = ({
  mode = 'regular',
  type = 'default',
  value,
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  style,
}: BasicInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const center = mode === 'center';
  const hasClearButton = mode !== 'center';
  const showClearButton = Boolean(hasClearButton && value && isFocused);
  const inputRef = useRef<any>();
  const textColorStyleName = value ? Style.textStyle : Style.placeholderStyle;
  const containerColorStyleName = isFocused
    ? Style.containerActive
    : value
    ? Style.containerFilled
    : Style.containerEmpty;

  const focus = () => {
    inputRef.current.focus();
  };

  const handleOnFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleOnBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handleOnChange = (text: string): void => {
    onChange && onChange(text);
  };

  return (
    <View style={[Style.container, style]}>
      <TouchableOpacity
        onPress={() => focus()}
        style={[
          Style.inputContainer,
          center ? Style.center : {},
          containerColorStyleName,
        ]}>
        {/* {showSearchIcon && (
          <TouchableOpacity
            style={Style.searchIconContainer}
            onPress={() => focus()}>
          </TouchableOpacity>
        )} */}
        <TextInput
          placeholder={placeholder}
          style={[Style.input, center ? Style.center : {}, textColorStyleName]}
          keyboardType={type}
          ref={inputRef}
          value={value}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChangeText={handleOnChange}
        />
        {showClearButton && (
          <TouchableOpacity
            style={Style.clearIconContainer}
            onPress={() => handleOnChange('')}>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BasicInput;
