import React from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native'

const App = () =>
{
    return(
      <View style={Mystyle.ViewStyle}>
        <Text style={Mystyle.TextStyle}>Hello World</Text>
      </View>
    );
}
var Mystyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            ImageBackgroundColor:'aqua',
            alignItems:'center',
            justifycontent:'center',
        },
        TextStyle:{
            color:'black'
        }
    }
)
export default App;
