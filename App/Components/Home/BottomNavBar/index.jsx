import { BottomNavigation, Text } from 'react-native-paper';
import { useState } from 'react';
import MarketPlace from '../Marketplace';
import Invest from '../Invest';
import Community from '../Community';

const MarketPlaceRoute = () => <MarketPlace />;

const InvestRoute = () => <Invest />;

const CommunityRoute = () => <Community />;

const BottomNavBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'market', title: 'Marketplace', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'invest', title: 'Invest', focusedIcon: 'album' },
    { key: 'community', title: 'Community', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    market: MarketPlaceRoute,
    invest: InvestRoute,
    community: CommunityRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavBar;