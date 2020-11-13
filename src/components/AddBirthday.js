import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export default function AddBirthday() {

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [formData, setFormData] = useState({});

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handlerConfirm = (date) => {
        const dateBirth = date;
        dateBirth.setHours(0);
        dateBirth.setMinutes(0);
        dateBirth.setSeconds(0);
        setFormData({ ...formData, dateBirth });
        hideDatePicker();
    };

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text.trim() });
    };

    const onSubmit = () => {
        console.log(formData);
    };

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    placeholderTextColor='#969696'
                    onChange={(e) => onChange(e, 'nombre')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Apellidos'
                    placeholderTextColor='#969696'
                    onChange={(e) => onChange(e, 'apellidos')}
                />
                <View style={[styles.input, styles.datepicker]}>
                    <Text style={{
                        color: formData.dateBirth ? '#FFF' : '#969696',
                        fontSize: 18,
                    }}
                        onPress={showDatePicker} >
                        {formData.dateBirth ? moment(formData.dateBirth).format('LL') : 'Fecha de nacimiento'}
                    </Text>
                </View>
                <TouchableOpacity onPress={onSubmit}>
                    <Text style= {styles.addButton}>Crear cumpleaños</Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode='date'
                onConfirm={handlerConfirm}
                onCancel={hideDatePicker}
            />

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

    },

    datepicker: {
        justifyContent: 'center',
    },

    addButton: {
        fontSize: 18,
        color: '#FFF',
    }
})
