import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

export default function HistoryScreen() {
  interface HistoryItem {
    id: number;
    status: string;
    startLocation: string;
    endLocation: string;
    date: string;
  }

  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dummyData = [
    {
      id: 1,
      status: "Present",
      startLocation: "Home->",
      endLocation: "School",
      date: "2025-01-30",
    },
    {
      id: 2,
      status: "Present",
      startLocation: "School->",
      endLocation: "Home",
      date: "2025-01-30",
    },
    {
      id: 3,
      status: "Absent",
      startLocation: "Home->",
      endLocation: "School",
      date: "2025-01-31",
    },
  ];

  useEffect(() => {
    setHistoryData(dummyData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>History</Text>
        {error || historyData.length === 0 ? (
          <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>
              No data available. Try later.
            </Text>
          </View>
        ) : (
          historyData.map((item, index) => (
            <View
              key={index}
              style={[
                styles.card,
                item.status === "Present" ? styles.completedCard : styles.canceledCard,
              ]}
            >
              <Text
                style={
                  item.status === "Present"
                    ? styles.completedText
                    : styles.canceledText
                }
              >
                {item.status}
              </Text>
              <View style={styles.routeContainer}>
                <Text style={styles.routeText}>{item.startLocation}</Text>
                <Text style={styles.routeText}>{item.endLocation}</Text>
              </View>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  fallbackText: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  completedCard: {
    borderLeftColor: "#4CAF50",
    borderLeftWidth: 4,
  },
  canceledCard: {
    borderLeftColor: "#F44336",
    borderLeftWidth: 4,
  },
  completedText: {
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 8,
  },
  canceledText: {
    color: "#F44336",
    fontWeight: "bold",
    marginBottom: 8,
  },
  routeContainer: {
    marginBottom: 8,
  },
  routeText: {
    fontSize: 16,
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#999",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
});
