import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { validateEmail } from '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const login = () => {
        let errors = {};
        if (!formData.email || !formData.password) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
        } else if (!validateEmail(formData.email)) {
            errors.email = true;
        } else if (formData.password < 6) {
            errors.password = true;
        } else {
            console.log('Login OK');
        }
        setFormError(errors);
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text.trim() });
    }

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder='Correo electronico'
                placeholderTextColor='#969696'
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={[styles.input, formError.password && styles.error]}
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => onChange(e, 'password')}
            />
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Registrate</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

const defaultValue = () => {
    return {
        email: '',
        password: '',
    };
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
        borderColor: '#1E3040',
    },

    register: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },

    error: {
        borderColor: '#940C0C'
    },

})
