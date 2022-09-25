import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken() {
    const { granted } = await Notifications.getPermissionsAsync();

    // se não tem autorização
    if (!granted) {
        await Notifications.requestPermissionsAsync();
    }

    // se tem autorização
    if (granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICATION TOKEN =>', pushToken.data);

        return pushToken.data;
    }
}