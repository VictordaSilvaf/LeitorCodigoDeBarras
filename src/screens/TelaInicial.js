import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TelaInicial = (props) => {
    return (
        <View style={styles.view}>
            <Text>Você esta na primeira tela!</Text>
            <Button
                title='Segunda Tela'
                onPress={() => props.navigation.navigate("Segunda")}
            />

            <Button
                title='Scanner'
                onPress={() => props.navigation.navigate("CodeScanner")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#2e2e2e',
        flex: 1,
    }
});

export default TelaInicial