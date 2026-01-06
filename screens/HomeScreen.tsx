import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../types';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MultiRoute!</Text>
      <Button
        title="Plan a Trip"
        onPress={() => navigation.navigate('Planner')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});