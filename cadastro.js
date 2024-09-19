import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const CadastroProcesso = () => {
    const [numeroProcesso, setNumeroProcesso] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('');

    const handleCadastro = () => {
        axios.post('http://192.168.x.x:8080/processos/cadastrar', {
            numeroProcesso: numeroProcesso,
            descricao: descricao,
            status: status
        })
        .then(response => {
            Alert.alert('Sucesso', response.data);
        })
        .catch(error => {
            Alert.alert('Erro', 'Erro no cadastro');
        });
    };

    return (
        <View>
            <TextInput placeholder="Número do Processo" value={numeroProcesso} onChangeText={setNumeroProcesso} />
            <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <TextInput placeholder="Status" value={status} onChangeText={setStatus} />
            <Button title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

export default CadastroProcesso;
