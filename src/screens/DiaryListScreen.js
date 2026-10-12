import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: require('../../assets/moods/happy.png'), // Menggunakan gambar lokal sesuai ketentuan tugas
    mood: 'happy',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    mood: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    mood: 'calm',
  },
  {
    id: 4,
    title: 'Seru-seruan Bareng Teman',
    date: '2025-10-03',
    preview: 'Nongkrong sejenak di kafe dekat kampus setelah penat kuliah seharian penuh.',
    moodUri: 'https://picsum.photos/seed/excited/80',
    mood: 'excited',
  },
  {
    id: 5,
    title: 'Ngedit & Ngoding Malam',
    date: '2025-10-02',
    preview: 'Fokus menyelesaikan fitur aplikasi React Native dan merapikan video dokumentasi.',
    moodUri: 'https://picsum.photos/seed/night/80',
    mood: 'focus',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header dengan Avatar Pengguna */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerSubtitle}>Catatan Harian</Text>
          <Text style={styles.headerTitle}>Siti Ainnur Rahmah</Text>
        </View>
        <Image 
          source={{ uri: 'https://picsum.photos/seed/avatar/100' }} 
          style={styles.avatar} 
        />
      </View>

      {/* Render Daftar Kartu Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
});