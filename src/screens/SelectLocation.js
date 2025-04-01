import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const zones = [
  'Banasree',
  'Dhanmondi',
  'Gulshan',
  'Mirpur',
  'Mohakhali',
  'Uttara',
];

const areasByZone = {
  Banasree: ['Block A', 'Block B', 'Block C', 'Block D', 'Block E'],
  Dhanmondi: ['Road 1', 'Road 2', 'Road 3', 'Road 4', 'Road 5'],
  Gulshan: ['Circle 1', 'Circle 2', 'Avenue 1', 'Avenue 2'],
  Mirpur: ['Section 1', 'Section 2', 'Section 10', 'Section 11', 'Section 12'],
  Mohakhali: ['DOHS', 'Old Area', 'New Area', 'Extension'],
  Uttara: ['Sector 1', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 7'],
};

const DropdownSelect = ({ label, value, options, onSelect, disabled, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleDropdown = () => {
    if (disabled) return;
    
    const toValue = isOpen ? 0 : 1;
    setIsOpen(!isOpen);
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const dropdownHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[
          styles.dropdown,
          disabled && styles.disabledDropdown,
          isOpen && styles.dropdownOpen
        ]}
        onPress={toggleDropdown}
        disabled={disabled}
      >
        <Text style={[styles.dropdownText, value && styles.selectedText]}>
          {value || placeholder || `Select ${label.toLowerCase()}`}
        </Text>
        <Text style={[styles.arrow, isOpen && styles.arrowUp]}>▼</Text>
      </TouchableOpacity>
      
      <Animated.View style={[
        styles.dropdownList,
        { maxHeight: dropdownHeight },
        isOpen && styles.dropdownListOpen
      ]}>
        <ScrollView nestedScrollEnabled={true}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => {
                onSelect(item);
                toggleDropdown();
              }}
            >
              <Text style={[
                styles.dropdownItemText,
                value === item && styles.selectedItemText
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const SelectLocation = ({ navigation }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = async () => {
    try {
      if (selectedZone && selectedArea) {
        await AsyncStorage.setItem('userLocation', JSON.stringify({
          zone: selectedZone,
          area: selectedArea,
        }));
      }
      // Chuyển đến màn hình Login ngay lập tức
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error:', error);
      // Nếu có lỗi vẫn chuyển đến màn hình Login
      navigation.navigate('Login');
    }
  };

  const handleZoneSelect = (zone) => {
    setSelectedZone(zone);
    setSelectedArea('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/map-icon.png')}
          style={styles.mapIcon}
        />
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what's happening in your area
        </Text>

        <View style={styles.inputContainer}>
          <DropdownSelect
            label="Your Zone"
            value={selectedZone}
            options={zones}
            onSelect={handleZoneSelect}
          />

          <DropdownSelect
            label="Your Area"
            value={selectedArea}
            options={selectedZone ? areasByZone[selectedZone] : []}
            onSelect={setSelectedArea}
            disabled={!selectedZone}
            placeholder="Types of your area"
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  mapIcon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  dropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  disabledDropdown: {
    backgroundColor: '#f5f5f5',
    borderColor: '#eee',
  },
  dropdownText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  selectedText: {
    color: '#333',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownList: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#ddd',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  dropdownListOpen: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  selectedItemText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SelectLocation; 