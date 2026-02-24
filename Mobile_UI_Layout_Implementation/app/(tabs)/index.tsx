import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, SafeAreaView, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const handlePress = (message: string) => {
    Alert.alert(message);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('@/assets/images/Profile_React.jpg')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileLabelContainer}>
            <Text style={styles.profileName}>Rakha Azzahra</Text>
          </View>
        </View>

        {/* Tab Section */}
        <View style={styles.tabSection}>
          <TouchableOpacity
            style={[styles.tabButton, styles.purpleButton]}
            onPress={() => handlePress('Tab 1 pressed')}
          >
            <Text style={styles.tabButtonText}>Tab 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, styles.blueButton]}
            onPress={() => handlePress('Tab 2 pressed')}
          >
            <Text style={styles.tabButtonText}>Tab 2</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <View style={styles.imageGrid}>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar1.jpg')} style={styles.gridImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar2.jpg')} style={styles.gridImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar3.jpg')} style={styles.gridImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar4.jpg')} style={styles.gridImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar5.jpg')} style={styles.gridImage} />
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/gambar6.jpg')} style={styles.gridImage} />
            </View>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => handlePress('Bottom button pressed')}
          >
            <Text style={styles.bottomButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'teal',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileLabelContainer: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleButton: {
    backgroundColor: 'purple',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  tabButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentSection: {
    width: '90%',
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '32%',
    height: 100,
    backgroundColor: 'orange',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  gridImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomSection: {
    width: '90%',
    alignItems: 'center',
  },
  bottomButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

