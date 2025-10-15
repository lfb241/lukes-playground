import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import { Link, Stack } from 'expo-router';

/*
convention from expo-router for not found pages
*/

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen does not exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen! </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}


