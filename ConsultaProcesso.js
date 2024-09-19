import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';

const ConsultaProcesso = () => {
    const [numeroProcesso, setNumeroProcesso] = useState('');
    const [processo, setProcesso] = useState(null);

    const handleConsulta = () => {
        axios.get(`http://192.168.x.x:8080/processos/consultar/${numeroProcesso}`)
        .then(response => {
            setProcesso(response.data);
        })
        .catch(error => {
            Alert.alert('Erro', 'Processo não encontrado');
        });
    };

    return (
        <View>
            <TextInput placeholder="Número do Processo" value={numeroProcesso} onChangeText={setNumeroProcesso} />
            <Button title="Consultar" onPress={handleConsulta} />
            {processo && (
                <View>
                    <Text>Número: {processo.numeroProcesso}</Text>
                    <Text>Descrição: {processo.descricao}</Text>
                    <Text>Status: {processo.status}</Text>
                </View>
            )}
        </View>
    );
};

export default ConsultaProcesso;
