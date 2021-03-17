import React, { useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../FakeData/FakeData.json';
import Event from '../Event/Event';

const Home = () => {
    const [item, setItem] = useState(fakeData);
    const colors = ['#FF8042', '#FFBB28', '#3090C7', '#0000A0', '#0000A0', '#3090C7',  '#FFBB28', '#FF8042', '#FF8042', '#FFBB28', '#3090C7', '#0000A0', '#0000A0', '#3090C7', '#FF8042', '#FFBB28', '#3090C7', '#FFBB28', '#3090C7', '#0000A0', '#FF8042'];

    return (
      <div>
          <Header></Header>
          {
              item.map((event,i) => <Event colors={colors[i]} event={event}></Event>)
          }
      </div>
    );
};

export default Home;