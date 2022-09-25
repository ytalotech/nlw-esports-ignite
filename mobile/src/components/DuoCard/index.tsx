import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { Duoinfo } from '../Duoinfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
    id: string;
    hoursEnd: string;
    hoursStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {

    return (
        <View style={styles.container}>
            <Duoinfo
                label='Nome'
                value={`${data.name}`}
            />

            <Duoinfo
                label='Tempo de jogo'
                value={`${data.yearsPlaying} anos`}
            />

            <Duoinfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
            />

            <Duoinfo
                label='Chamada de áudio'
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />

                <Text style={styles.buttonTitle}>
                    Connectar
                </Text>
            </TouchableOpacity>
        </View>
    );
}