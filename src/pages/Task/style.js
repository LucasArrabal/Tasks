import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      paddingTop:20
    },
    iconBtn:{
      color:'#fff',
      fontSize:25,
      fontWeight:'bold'
    },
    btnNewTask:{
      position:'absolute',
      width:60,
      height:60,
      bottom:50,
      left:20,
      backgroundColor:'#F92e6a',
      borderRadius:50,
      justifyContent:'center',
      alignItems: 'center'
    },
    allTasks:{
      width:"100%",
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10
    },
    btnDelteTask:{
      justifyContent:'center',
      paddingLeft:15,
    },
    textDesc:{
      width:"75%",
      alignContent:'flex-start',
      backgroundColor:'#F5F5F5cf',
      padding:12,
      paddingHorizontal:20,
      borderRadius:50,
      marginBottom:5,
      marginRight:15,
      color:'#282b2db5'
    }

  });

  export default styles