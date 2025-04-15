import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Gọi API GET
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setError('');
    } catch (err) {
      setError('Lỗi khi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Gọi API POST
  const addUser = async () => {
    if (!name || !email) {
      Alert.alert('Lỗi', 'Vui lòng nhập đủ thông tin');
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email
      });
      Alert.alert('Thành công', 'Đã thêm người dùng');
      setUsers([...users, res.data]);
      setName('');
      setEmail('');
      setError('');
    } catch (err) {
      setError('Lỗi khi thêm người dùng');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
      <Text style={styles.title}>Thêm người dùng</Text>
      <TextInput
        placeholder="Tên"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Thêm" onPress={addUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 },
  user: { padding: 10, borderBottomWidth: 1 },
  error: { color: 'red', marginBottom: 10 },
});
