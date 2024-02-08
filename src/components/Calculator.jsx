import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Calculator() {
  const [result, setResult] = useState(0)
  const [calcText, setCalcText] = useState("")
  const [operator, setOperator] = useState(null)
  const numberFunction = (num) => {
    setCalcText(calcText.toString() + num.toString())
  }
  const pointFunction = (val) => {
    setCalcText(calcText.toString() + '.')
  }
  const operatorFunction = (op) => {
    if (op == '+') {
      equalFunction(false)
      setCalcText("")
      setOperator('+')
    }
    if (op == '-') {
      equalFunction(false)
      setCalcText("")
      setOperator('-')
    }
    if (op == '*') {
      equalFunction(false)
      setCalcText("")
      setOperator('*')
    }
    if (op == '/') {
      equalFunction(false)
      setCalcText("")
      setOperator('/')
    }
  }
  const equalFunction = (val) => {
    if (!val) {
      if (operator == '+') {
        (result != 0) ? (setResult(result + Number(calcText))) : (setResult(Number(calcText)))
      }
      if (operator == '-') {
        (result != 0) ? (setResult(result - Number(calcText))) : (setResult(Number(calcText)))
      }
      if (operator == '*') {
        (result != 0) ? (setResult(result * Number(calcText))) : (setResult(Number(calcText)))
      }
      if (operator == '/') {
        (result != 0) ? (setResult(result / Number(calcText))) : (setResult(Number(calcText)))
      }
    } else {
      if (operator == '+') {
        equalFunction(false)
        setCalcText(result + Number(calcText))
        setOperator(null)

      }
      if (operator == '-') {
        equalFunction(false)
        setCalcText(result - Number(calcText))
        setOperator(null)
      }
      if (operator == '*') {
        equalFunction(false)
        setCalcText(result * Number(calcText))
        setOperator(null)
      }
      if (operator == '/') {
        equalFunction(false)
        setCalcText(result / Number(calcText))
        setOperator(null)
      }
    }
  }
  const clearFunction = () => {
    setResult(0)
    setCalcText('')
    setOperator(null)
  }
  const reverseSignFunction = () => {
    setCalcText(calcText * (-1))
  }
  const percentFunction = () => {
    if (result != 0) {
      if (operator == '+') {
        setResult(result + (result * Number(calcText) / 100))
        setCalcText(result + (result * Number(calcText) / 100))
        setOperator(null)
      }
      if (operator == '-') {
        setResult(result - (result * Number(calcText) / 100))
        setCalcText(result - (result * Number(calcText) / 100))
        setOperator(null)
      }
      if (operator == '*') {
        setResult(result * Number(calcText) / 100)
        setCalcText(result * Number(calcText) / 100)
        setOperator(null)
      }
      if (operator == '/') {
        setResult(result / (result * Number(calcText) / 100))
        setCalcText(result / (result * Number(calcText) / 100))
        setOperator(null)
      }
    }
  }
  return (
    <View style={{ flex: 4 }}>
      <View style={styles.display}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.operationText}>{calcText}</Text>
      </View>
      <View style={styles.numPad}>
        <View style={{ flex: 5 }}>
          {/* Buttons row one */}
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOthers} onPress={clearFunction}>
                  <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOthers} onPress={reverseSignFunction}>
                  <Text style={styles.buttonText}>+/-</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOthers} onPress={percentFunction}>
                  <Text style={styles.buttonText}>%</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOperator} onPress={() => (operatorFunction('/'))}>
                  <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Buttons row Two */}
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(7))}>
                  <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(8))}>
                  <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(9))}>
                  <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOperator} onPress={() => (operatorFunction('*'))}>
                  <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Buttons row three */}
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(4))}>
                  <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(5))}>
                  <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(6))}>
                  <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOperator} onPress={() => (operatorFunction('-'))}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Buttons row four */}
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(1))}>
                  <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(2))}>
                  <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (numberFunction(3))}>
                  <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOperator} onPress={() => (operatorFunction('+'))}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Buttons row five */}
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 4, alignItems: 'center' }}>
              <View style={{ flex: 2 }}>
                <TouchableOpacity style={styles.zero} onPress={() => (numberFunction(0))}>
                  <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.button} onPress={() => (pointFunction('.'))}>
                  <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.buttonOperator} onPress={() => (equalFunction(true))}>
                  <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#0D0231',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  operationText: {
    color: '#F9F9FB',
    fontSize: 40
  },
  resultText: {
    color: '#635C77',
    fontSize: 30
  },
  numPad: {
    flex: 3,
    backgroundColor: '#0D0231',
  },
  button: {
    backgroundColor: '#221745',
    height: 75,
    width: 75,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // padding: 15,
  },
  buttonOperator: {
    backgroundColor: '#6236F5',
    height: 75,
    width: 75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
  },
  buttonOthers: {
    backgroundColor: '#3E345A',
    height: 75,
    width: 75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
  },
  buttonText: {
    fontSize: 25,
    color: '#F9F9FB',
    fontWeight: 'bold'
  },
  zero: {
    backgroundColor: '#221745',
    height: 75,
    width: 165,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
  }
}) 