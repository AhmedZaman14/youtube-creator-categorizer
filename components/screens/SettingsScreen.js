import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isNotificationsEnabled}
        />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
 
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SettingsScreen;
