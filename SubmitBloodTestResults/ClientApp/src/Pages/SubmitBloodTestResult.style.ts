import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../Theme'

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
      textAlign:'center',
      paddingBottom:20
    },
    buttomContainer:{
        flex:2.5, justifyContent:'center', alignItems:'center'
    }
});

export default styles;
