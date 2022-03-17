import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BasicInput, Lottie, StandardText , StandartButton} from '../Components';
import { GeneralState, LabResultsState } from '../Redux';
import { colors } from '../Theme/Colors';
import LottieAnimations from '../Theme/LottieAnimations';
import { dictionary } from '../Utils/Texts';
import styles from './SubmitBloodTestResult.style';
const SubmitBloodTestResult = () => {
  const dispatch = useDispatch();
  const labResultsStatus =  useSelector(GeneralState.Selectors.selectBloodTestDataStatus);
  const labResultsState =  useSelector(LabResultsState.Selectors.selectBloodTestData);
  const [displayResult, setdisplayResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageType, setImageType] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [testName, setTestName] = useState<string>('');
  const [testValue, setTestValue] = useState<number|null>(null);

useEffect(()=>{
  if(labResultsStatus){
    setImageType(labResultsState.testResult);
    setCategoryName(labResultsState.testCategory);
    setLoading(false);
    setdisplayResult(labResultsStatus);
  }
},[labResultsState])

  const handlePress = async() => {
    setLoading(true);
    setdisplayResult(false);
    dispatch(LabResultsState.Actions.setBloodTestInputs({testName,testValue}));
    await dispatch(LabResultsState.Thunks.getLabResults(success));
  }
  
  const success = () =>{
      setLoading(false);
      setdisplayResult(true);
  }

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar />
        <View style={styles.centerFlex}>
            <StandardText >{dictionary.header}</StandardText>
        </View>
        <View style={styles.centerFlex}>
            <BasicInput 
            onChange ={setTestName}
            style={styles.standartScale} 
            placeholder={dictionary.placeHolders.testName}/>
        </View>
        <View style={styles.centerFlex}>
            <BasicInput 
            onChange ={setTestValue}
            style={styles.standartScale} 
            type={'numeric'} 
            placeholder={dictionary.placeHolders.value}/>
        </View>
      <View style={styles.bigScale}>
        <StandartButton 
        onPress={handlePress} 
        type={'regular'}>
          {dictionary.pressMe}
        </StandartButton>
      </View>
        <View style={styles.buttomContainer}>
       {
        displayResult && 
        <View>
            <StandardText style={styles.buttomLabel}>{categoryName}</StandardText>
            <Lottie
              loop
              animation={imageType ? LottieAnimations.smile :LottieAnimations.sad}
              style={styles.lottieScale}
              skipAnimation={false}
            />
        </View>
       }
       {
         loading &&
         <ActivityIndicator size="large" color={colors.primaryBlue} />
       }
      </View>
    
    </SafeAreaView>
  );
};



export default SubmitBloodTestResult;



