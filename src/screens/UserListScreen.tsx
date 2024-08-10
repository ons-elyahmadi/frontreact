import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import api from '../api';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

const UserListScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Text>{item.firstName} {item.lastName}</Text>
      )}
    />
  );
};

export default UserListScreen;
 
