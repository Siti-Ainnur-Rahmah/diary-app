import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodUri, mood }) {
  // Fungsi untuk memberikan variasi warna border berdasarkan mood
  const getBorderColor = () => {
    switch (mood) {
      case 'happy': return '#10b981';   // Hijau
      case 'focus': return '#3b82f6';   // Biru
      case 'calm': return '#8b5cf6';    // Ungu
      case 'excited': return '#f59e0b'; // Oranye
      default: return '#e5e7eb';        // Abu-abu default
    }
  };

  return (
    <View style={[styles.card, { borderColor: getBorderColor() }]}>
      <Image 
        source={typeof moodUri === 'string' ? { uri: moodUri } : moodUri} 
        style={styles.mood} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2, // Dibuat sedikit lebih tebal agar variasi warnanya terlihat jelas
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});