import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function AddBirthday() {
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    placeholderTextColor='#969696'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Apellidos'
                    placeholderTextColor='#969696'
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: 50,
        color: '#FFF',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1E3040',
        paddingHorizontal: 20,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1E3040',
        borderRadius: 50,

    }
})
