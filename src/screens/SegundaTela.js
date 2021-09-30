import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SegundaTela = (props) => {
    return (
        <View>
            <Text>Você esta na Segunda tela!</Text>
            <Button
                title='Primeira tela'
                onPress={() => props.navigation.navigate("Inicial")}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SegundaTela;