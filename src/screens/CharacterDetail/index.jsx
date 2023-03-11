import React from 'react';
import {View, FlatList} from 'react-native';
import md5 from 'crypto-js/md5';
import styled from 'styled-components';
import {
  MARVEL_API,
  PRIVATE_MARVEL_KEY,
  PUBLIC_MARVEL_KEY,
} from '../../config/defaultValues';
import axios from 'axios';
import {Character} from '../../components/Character';

const TextHeader = styled.Text`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  padding: 16px 0;
`;

const CharacterDetail = ({navigation}) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const fetchData = () => {
    const ts = Date.now();

    axios
      .get(`${MARVEL_API}/character`, {
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
      <TextHeader>Character</TextHeader>
      <FlatList
        initialNumToRender={20}
        data={data}
        renderItem={({item}) => <Character {...item} />}
        keyExtractor={item => item.id}
        onEndThreshold={10}
        onEndReached={() => {
          fetchData();
        }}
      />
    </View>
  );
};

export default CharacterDetail;
