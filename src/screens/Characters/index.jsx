import React from 'react';
import {View, Text, FlatList} from 'react-native';
import md5 from 'crypto-js/md5';
import {
  MARVEL_API,
  PRIVATE_MARVEL_KEY,
  PUBLIC_MARVEL_KEY,
} from '../../config/defaultValues';
import axios from 'axios';

const Characters = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const fetchData = () => {
    const ts = Date.now();

    axios
      .get(`${MARVEL_API}/characters`, {
        params: {
          ts: ts,
          apikey: PUBLIC_MARVEL_KEY,
          hash: md5(ts + PRIVATE_MARVEL_KEY + PUBLIC_MARVEL_KEY),
          offset: page * 20,
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          setData(prev => [...prev, ...res.data.data.results]);
          setPage(prev => prev + 1);
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  React.useEffect(() => {
    if (loading && page === 0) {
      fetchData();
      setLoading(false);
    }
  }, []);

  return (
    <View>
      <Text style={{paddingVertical: 100}}>Characters</Text>
      <FlatList
        initialNumToRender={20}
        data={data}
        renderItem={({item}) => (
          <Text style={{paddingVertical: 20}}>{item.name}</Text>
        )}
        keyExtractor={item => item.id}
        onEndThreshold={1.5}
        onEndReached={() => {
          fetchData();
        }}
      />
    </View>
  );
};

export default Characters;
