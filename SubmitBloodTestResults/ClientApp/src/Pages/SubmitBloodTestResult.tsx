import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BasicInput, Lottie, StandardText , StandartButton} from '../Components';
import { GeneralState, LabResultsState } from '../Redux';
import { General } from '../Redux/States/General/GeneralSlice';
import LottieAnimations from '../Theme/LottieAnimations';
import { dictionary } from '../Utils/Texts';
import Fuse from 'fuse.js';
const data = {  
  "bloodTestConfig":[  
     {  
        "name":"HDL Cholesterol",
        "threshold":40
     },
     {  
        "name":"LDL Cholesterol",
        "threshold":100
     },
     {  
        "name":"A1C",
        "threshold":4
     }
  ]
}
const SubmitBloodTestResult = () => {
  const dispatch = useDispatch();
  const labResultsStatus =  useSelector(GeneralState.Selectors.selectBloodTestDataStatus);
  const [displayResult, setdisplayResult] = useState<boolean>(false);
  const [imageType, setImageType] = useState<number>(0);
  const [categoryName, setCategoryName] = useState<string>('');
  const [testName, setTestName] = useState<string>('');
  const [testValue, setTestValue] = useState<number>(0);
  const options = {
    includeScore: true,
    keys: ['name'],
    
  }

  const handlePress = async() => {
    //ADD VALIDATION!!
    setdisplayResult(!displayResult);
    //const fuse = new Fuse(data.bloodTestConfig,options);
   // const result = fuse.search(testName);

//     console.log('testName',testName);
//     console.log('result',result);
//     console.log('scores',result.map(i=>i.score));
// const scores = result.map(i=>i.score);
// var min = Math.min(...scores);
// var minResult = result.filter(i=>i.score == min)
// console.log('min',minResult);

      dispatch(LabResultsState.Actions.setBloodTestInputs({testName,testValue}));
      await dispatch(LabResultsState.Thunks.getLabResults(()=> {
        console.log('dddddddddddddddddddddd',labResultsStatus)
        setdisplayResult(labResultsStatus)
      }));
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
       {displayResult && 
        <View>
            <StandardText style={styles.buttomLabel}>{'dddddddddddd'}</StandardText>
            <Lottie
              loop
              animation={imageType ? LottieAnimations.sad :LottieAnimations.smile}
              style={styles.lottieScale}
              skipAnimation={false}
            />
        </View>
       }
        </View>
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    centerFlex:{
        flex:1,
        justifyContent:'center', alignItems:'center'
    },
    flex:{
        flex:1,
    },
    standartScale:{
        height:'50%',width:'70%'
    },
    lottieScale:{
      height:150,
      width:150
    },
    bigScale:{
        flex:1, justifyContent:'center', alignItems:'center'
    },
    buttomLabel:{
      textAlign:'center'
    },
    buttomContainer:{
        flex:2.5, justifyContent:'center', alignItems:'center'
    },

})


export default SubmitBloodTestResult;



