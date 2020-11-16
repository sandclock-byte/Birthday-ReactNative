import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddBirthday from './AddBirthday';
import ActionBar from './ActionBar';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import moment from 'moment';

firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore(firebase);

export default function ListBirthday(props) {
    const { user } = props;
    const [showList, setShowList] = useState(true);
    const [birthday, setBirthday] = useState([]);
    const [pasatBirthday, setPasatBirthday] = useState([]);


    useEffect(() => {
        setBirthday([]);
        setPasatBirthday([]);

        db.collection(user.uid)
            .orderBy('dateBirth', 'asc')
            .get()
            .then((response) => {
                const itemsArray = [];
                response.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    itemsArray.push(data);
                });
                formatData(itemsArray);
            });
    }, []);

    const formatData = (items) => {
        const currentDate = moment().set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        });

        const birthdayTempArray = [];
        const pasatBirthdayTempArray = [];

        items.forEach((item) => {
            const dateBirth = new Date(item.dateBirth.seconds * 1000);
            const dateBirthday = moment(dateBirth);
            const currentYear = moment().get('year');
            dateBirthday.set({ year: currentYear });

            const diffDate = currentDate.diff(dateBirthday, 'days');
            const itemTemp = item;
            itemTemp.dateBirth = dateBirthday;
            itemTemp.days = diffDate;

            (diffDate <= 0) ? birthdayTempArray.push(itemTemp) : pasatBirthdayTempArray.push(itemTemp);

            setBirthday(birthdayTempArray);
            setPasatBirthday(pasatBirthdayTempArray);
        });

    }

    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                </>
            ) : (
                    <AddBirthday user={user} setShowList={setShowList} />
                )}
            <ActionBar showList={showList} setShowList={setShowList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    }
})
