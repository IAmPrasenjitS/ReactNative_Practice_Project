import { Alert, Clipboard, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

export default function PasswordGenerator() {
    const [password, setPassword] = useState('Password Here')
    const [length, setLength] = useState(6)
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isLowerCase, setIsLowerCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isSpecialChar, setIsSpecialChar] = useState(false)

    let passwordGenerator = () => {
        let pass = ''
        let str = ""
        if (isUpperCase || isLowerCase || isSpecialChar) {
            if (isUpperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            if (isLowerCase) str += "abcdefghijklmnopqrstuvwxyz"
            if (isNumber) str += "0123456789"
            if (isSpecialChar) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
            for (let i = 0; i < length; i++) {
                let ch = str.charAt(Math.round(Math.random() * str.length))
                pass += ch
            }
            setPassword(pass)
        }else{
            Alert.alert(
                "Please choose any of the following",
                "Uppercase, Lowercase, Character",
                [
                    {text: 'Ok'}
                ]
            )
        }
    }
    let copyPassword = () => {
        Clipboard.setString(password)
    }
    let resetPassword = () => {
        setPassword('Password Here')
        setLength(6)
        setIsUpperCase(false)
        setIsLowerCase(false)
        setIsNumber(false)
        setIsSpecialChar(false)
    }

    return (
        <View style={styles.containerMain}>
            <Text style={styles.header}>Password Generator</Text>
            <View style={styles.passwordArea}>
                <Text style={styles.passwordText}>{password}</Text>
                <TouchableOpacity style={styles.tapToCopy} onPress={copyPassword}><Text style={styles.tapToCopyText}>Tap to Copy</Text></TouchableOpacity>
            </View>
            <Text></Text>
            <Text style={styles.lengthText}>Length: <Text style={styles.lengthTextUnit}>{length}</Text></Text>
            {/* Slider Starts Here */}
            <View style={styles.sliderArea}>
                <Text style={styles.sliderMinMax}>6</Text>
                <Slider
                    minimumValue={6}
                    maximumValue={16}
                    step={1}
                    width={300}
                    value={length}
                    onValueChange={(e) => (setLength(e))}
                    minimumTrackTintColor='#0B1EDF'
                    maximumTrackTintColor='#4E516A'
                />
                <Text style={styles.sliderMinMax}>16</Text>
            </View>
            {/* Settings Starts Here */}
            <Text></Text>
            <Text style={styles.lengthText}>SETTINGS</Text>
            <Text></Text>
            <View style={styles.settings}>
                <Text style={styles.sliderMinMax}>Include Uppercase</Text>
                <Switch
                    style={{ alignSelf: 'center' }}
                    value={isUpperCase}
                    onValueChange={() => (setIsUpperCase(!isUpperCase))}
                    trackColor={{ true: '#677BE6', false: 'grey' }}
                />
            </View>
            <Text></Text>
            <View style={styles.settings}>
                <Text style={styles.sliderMinMax}>Include Lowercase</Text>
                <Switch
                    style={{ alignSelf: 'center' }}
                    value={isLowerCase}
                    onValueChange={() => (setIsLowerCase(!isLowerCase))}
                    trackColor={{ true: '#677BE6', false: 'grey' }}
                />
            </View>
            <Text></Text>
            <View style={styles.settings}>
                <Text style={styles.sliderMinMax}>Include Number</Text>
                <Switch
                    style={{ alignSelf: 'center' }}
                    value={isNumber}
                    onValueChange={() => (setIsNumber(!isNumber))}
                    trackColor={{ true: '#677BE6', false: 'grey' }}
                />
            </View>
            <Text></Text>
            <View style={styles.settings}>
                <Text style={styles.sliderMinMax}>Include Special Character</Text>
                <Switch
                    style={{ alignSelf: 'center' }}
                    value={isSpecialChar}
                    onValueChange={() => (setIsSpecialChar(!isSpecialChar))}
                    trackColor={{ true: '#677BE6', false: 'grey' }}
                />
            </View>

            <Text></Text>
            <TouchableOpacity style={styles.generateButtonArea} onPress={passwordGenerator}>
                <Text style={styles.generateButton}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity style={styles.resetuttonArea} onPress={resetPassword}>
                <Text style={styles.generateButton}>RESET PASSWORD</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text style={{ color: 'yellow' }}>Made with Love by Prasenjit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#0A0E31',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    header: {
        fontSize: 25,
        color: '#FFFFFF',
        marginTop: 20,
        marginBottom: 50,
    },
    passwordArea: {
        width: '100%',
        backgroundColor: '#1D2141',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    passwordText: {
        fontSize: 25,
        color: '#FFFFFF'
    },
    tapToCopy: {
        alignSelf: 'flex-end'
    },
    tapToCopyText: {
        color: '#FFFFFF',
    },
    lengthText: {
        color: '#766A70',
        alignSelf: 'flex-start'
    },
    lengthTextUnit: {
        color: '#FFFFFF',
    },
    sliderArea: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1D2141',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    sliderMinMax: {
        fontSize: 22,
        color: '#FFFFFF'
    },
    settings: {
        flexDirection: 'row',
        backgroundColor: '#1D2141',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    generateButtonArea: {
        backgroundColor: '#677BE6',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 5,
    },
    generateButton: {
        color: '#FFFFFF',
        fontSize: 18
    },
    resetuttonArea: {
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 5,
    },
})