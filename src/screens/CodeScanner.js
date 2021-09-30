import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const CodeScanner = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(null);
    const [text, setText] = useState(null);

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted');
        })()
    }

    /* Resquest permissions */
    useEffect(() => {
        askForCameraPermission();
    }, []);

    /* Whsen you scan teh bar code */
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '\nData: ' + data)
    }

    /* Check permissions and return the screens */
    if (hasPermission === null) {
        return (
            <View style={styles.view}>
                <Text>Aguardando aceitar a permição da camera.</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={styles.view}>
                <Text>Sem acesso a camera.</Text>
                <Button title="Permitir acesso a camera" onPress={() => askForCameraPermission()} />
            </View>
        )
    }

    /* Return view */
    return (
        <View style={styles.view}>
            <View style={styles.barcodebox}> 
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{height:400, width:400}} />
            </View>
            <Text style={styles.mainText}>{text}</Text>

            {scanned && <Button title={'Scannear novamente'} onPress={() => setScanned(false)} color='#0080ff'/>}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#2e2e2e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barcodebox: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    mainText: {
        fontSize: 16,
        margin: 20,
        color: 'white'
    }
});

export default CodeScanner