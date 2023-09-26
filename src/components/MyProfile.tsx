import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import Total from './Total';

import LogoutConfirmation from './LogoutConfirmation';

import LanguageSelector from './LanguageSelector';
import Tenzimleme from './Tenzimleme';
import FavoritesScreen from '../FavoritesScreen';
import { useTranslation } from 'react-i18next';
import ContactScreen from '../screens/ContactScreen';
import Policy from './Policy';
import Terms from './Terms';
import EditCategoryScreen from './EditCategoryScreen';


const MyProfile = () => {
  const [profileButton, setProfileButton] = useState(1);
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const handlePress = (buttonNumber: React.SetStateAction<number>) => {
    setProfileButton(buttonNumber);
  };
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Perform logout action here
    setShowLogoutModal(false);
  };



  return (
 <ScrollView  style={{flex:1}}>
     <View style={{backgroundColor:isDarkMode ? '#131313' : '#F4F9FD',}}>
      <View style={[styles.innerContainer, {backgroundColor: isDarkMode ? "#1B1523" : '#F4F9FD'}]}>
        <Pressable
           onPress={() => handlePress(1)}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 1 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 1 ? styles.activeText : styles.text,
            ]}
          >
           {t('profile')}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handlePress(2)}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
 profileButton === 2 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 2 ? styles.activeText : styles.text,
            ]}
          >
           {t('favorites')}
          </Text>
        </Pressable>

        <Pressable
              onPress={() => handlePress(3)}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 3 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,

              profileButton === 3 ? styles.activeText : styles.text,
            ]}
          >
            {t('settings')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(4);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 4 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 4 ? styles.activeText : styles.text,
            ]}
          >
        {t('log_out')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(5);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 5 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 5 ? styles.activeText : styles.text,
            ]}
          >
      {t('change')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(6);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 6 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 6 ? styles.activeText : styles.text,
            ]}
          >
      {t('contact_7')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(7);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 7 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 7 ? styles.activeText : styles.text,
            ]}
          >
      {t('mexfi')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(8);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 8 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 8 ? styles.activeText : styles.text,
            ]}
          >
      {t('istifadec')}
          </Text>
        </Pressable>
        <Pressable
            onPress={() => {
              handlePress(9);
              setShowLogoutModal(true); 
            }}
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? "#1B1523" : 'white'},
            profileButton === 9 ? styles.activeCard : styles.card,
          ]}
        >
          <Text
            style={[
              styles.text,
              profileButton === 9 ? styles.activeText : styles.text,
            ]}
          >
   {t('edit')}
          </Text>
        </Pressable>
        
      </View>
      {profileButton === 1 && <Total />}
      {profileButton === 2 && <FavoritesScreen />}
      {profileButton === 3 && <Tenzimleme />}
      {profileButton === 4 &&     <LogoutConfirmation
        visible={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />}
           {profileButton === 5 && <LanguageSelector />}
           {profileButton === 6 && <ContactScreen />}
           {profileButton === 7 && <Policy />}
           {profileButton === 8 && <Terms />}
           {profileButton === 9 && <EditCategoryScreen />}
    </View>
 </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
marginHorizontal:20
  },
  innerContainer: {
    flex: 1,
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  card: {
    height: 60,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
  },
  activeCard: {
    backgroundColor: '#9559E5',
  },
  text: {
    color: "#9559E5",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 3,
  },
  activeText: {
    color: "white",
  },
});