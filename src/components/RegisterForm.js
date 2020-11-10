import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { validateEmail } from '../utils/validations'

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    let errors;

    const register = () => {
        errors = {};
        if (!formData.email || !formData.password || !formData.repeatPassword) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
            if (!formData.repeatPassword) errors.repeatPassword = true;
        } else if (!validateEmail(formData.email)) {
            errors.email = true;
        } else if (formData.password !== formData.repeatPassword) {
            errors.password = true;
            errors.repeatPassword = true;
        } else if (formData.password < 6) {
            errors.password = true;
            errors.repeatPassword = true;
        } else {
            console.log('Formulario corecto');
        }
        setFormError(errors);
    }

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder='Correo electronico'
                placeholderTextColor='#969696'
                onChange={(e) => setFormData({ ...formData, email: e.nativeEvent.text.trim() })}
            />
            <TextInput
                style={[styles.input, formError.password && styles.error]}
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, password: e.nativeEvent.text.trim() })}
            />
            <TextInput
                style={[styles.input, formError.repeatPassword && styles.error]}
                placeholder='Repetir contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, repeatPassword: e.nativeEvent.text.trim() })}
            />
            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const defaultValue = () => {
    return {
        email: '',
        password: '',
        repeatPassword: '',
    }
}

const styles = StyleSheet.create({
    btnText: {
        color: '#FFF',
        fontSize: 18,
    },

    input: {
        height: 50,
        color: '#FFF',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1E3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1E3040'
    },

    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },

    error: {
        borderColor: '#940C0C'
    },
});
