import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Calculator from './src/components/Calculator';
import Default from './src/components/Default';


// const windowWidth = Dimensions.get('window').width;
const windowHeight = parseInt(Dimensions.get('window').height);
const heightScreenTenPercent = (windowHeight * 10) / 100
const heightScreenNintyPercent = windowHeight - heightScreenTenPercent
export default function App() {
  const [project, setProject] = useState(<Default/>)
  return (
    <View style={styles.mainView}>
      <View style={styles.contentArea}>
      {project}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonProject} onPress={()=>(setProject(<Calculator/>))}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonProject}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonProject}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: windowHeight
  },
  contentArea: {
    flex: heightScreenNintyPercent,
    backgroundColor: 'yellow'
  },
  footer: {
    flexDirection: 'row',
    flex: heightScreenTenPercent,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly'
  },
  buttonProject:{
    backgroundColor: 'purple',
    maxWidth: 100,
    height:50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 15
  }
})