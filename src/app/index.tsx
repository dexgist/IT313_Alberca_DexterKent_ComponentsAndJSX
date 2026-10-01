import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";

const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>

        <View style={styles.studentInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.course}>{course} • Student</Text>
        </View>

        {isFullLoad && (
          <View style={styles.fullLoadBadge}>
            <Text style={styles.fullLoadText}>Full Load</Text>
          </View>
        )}
      </View>

      <View style={styles.divider} />

      <View style={styles.details}>
        <View>
          <Text style={styles.detailLabel}>Course</Text>
          <Text style={styles.detailValue}>{course}</Text>
        </View>

        <View>
          <Text style={styles.detailLabel}>Units Enrolled</Text>
          <Text style={styles.detailValue}>{units} units</Text>
        </View>
      </View>
    </View>
  );
}

export default function StudentRoster() {
  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster([...roster].reverse());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.smallTitle}>IT313 • MOBILE PROGRAMMING</Text>

          <Text style={styles.title}>Student Roster</Text>

          <Text style={styles.subtitle}>
            Currently enrolled students
          </Text>
        </View>

        {/* Student Count */}
        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>TOTAL STUDENTS</Text>

            <Text style={styles.summaryNumber}>
              {roster.length}
            </Text>
          </View>

          <View style={styles.summaryIcon}>
            <Text style={styles.iconText}>👥</Text>
          </View>
        </View>

        {/* Reverse Button */}
        <Pressable
          style={styles.reverseButton}
          onPress={reverseRoster}
        >
          <Text style={styles.reverseButtonText}>
            ↕ Reverse Roster
          </Text>
        </Pressable>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Enrolled Students
          </Text>

          <Text style={styles.sectionCount}>
            {`${roster.length} students`}
          </Text>
        </View>

        {/* Student Cards */}
        {roster.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}

        <Text style={styles.footer}>
          IT313 Student Roster • React Native & Expo
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 22,
  },

  smallTitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#4F6EF7",
    marginBottom: 7,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#172033",
  },

  subtitle: {
    fontSize: 15,
    color: "#7A8499",
    marginTop: 5,
  },

  summaryCard: {
    backgroundColor: "#4F6EF7",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#4F6EF7",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },

  summaryLabel: {
    color: "#DCE3FF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  summaryNumber: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
    marginTop: 2,
  },

  summaryIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    fontSize: 27,
  },

  reverseButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 25,

    shadowColor: "#1A2740",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },

  reverseButtonText: {
    color: "#4F6EF7",
    fontSize: 14,
    fontWeight: "800",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172033",
  },

  sectionCount: {
    fontSize: 13,
    color: "#7A8499",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,

    shadowColor: "#1A2740",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#E9EDFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  avatarText: {
    fontSize: 21,
    fontWeight: "800",
    color: "#4F6EF7",
  },

  studentInfo: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "800",
    color: "#172033",
  },

  course: {
    fontSize: 12,
    color: "#8791A5",
    marginTop: 4,
  },

  fullLoadBadge: {
    backgroundColor: "#E8F8EF",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
  },

  fullLoadText: {
    color: "#20834A",
    fontSize: 10,
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEF1F5",
    marginVertical: 16,
  },

  details: {
    flexDirection: "row",
    gap: 45,
  },

  detailLabel: {
    fontSize: 11,
    color: "#9AA3B3",
    marginBottom: 4,
  },

  detailValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#30394D",
  },

  footer: {
    textAlign: "center",
    color: "#A0A8B8",
    fontSize: 11,
    marginTop: 15,
  },
});