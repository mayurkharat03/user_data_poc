import {
  ActivityIndicator,
  FlatList,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/card/Card';
import {getUserFromApi} from '../../services/GetUser';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const userData = await getUserFromApi();
      setData(userData);
      setFilterData(userData);
      setLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const filterUserList = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = event.nativeEvent.text;
    if (value) {
      setFilterData(
        data.filter(
          it =>
            JSON.stringify(it.name.first)
              .toLowerCase()
              .indexOf(value.toLowerCase()) !== -1,
        ),
      );
    } else {
      setFilterData(data);
    }
  };

  return (
    <SafeAreaView style={styles.flexContainer}>
      <ActivityIndicator
        style={styles.activity}
        animating={isLoading}
        size="large"
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Search..."
        onChange={filterUserList}
      />
      {data.length > 0 && (
        <FlatList
          data={filterData}
          renderItem={({item}) => <Card cardData={item} />}
          keyExtractor={item => item.login.uuid}
          style={styles.mt}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  activity: {
    position: 'absolute',
    zIndex: 99,
    top: '50%',
    left: '45%',
  },
  mt: {
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});
