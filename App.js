import { Text } from "react-native";
import "react-native-gesture-handler";
import {MyContextControllerProvider} from "./store";
import Register from "./Screens/Register";
import Login from"./Screens/Login";

const App=()=>{
  

  return(
  <MyContextControllerProvider>
    <Login/>
  </MyContextControllerProvider>
  )
}
export default App;