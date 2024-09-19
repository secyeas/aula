import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://192.168.x.x:8080/processos/login', {
            username: username,
            password: password
        })
        .then(response => {
            Alert.alert('Sucesso', response.data);
        })
        .catch(error => {
            Alert.alert('Erro', 'Credenciais inválidas');
        });
    };

    return (
        <View>
            <TextInput placeholder="Usuário" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Senha" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

export default Login;
