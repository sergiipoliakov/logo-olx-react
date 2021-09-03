import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../Components/UI/Container/Container';

import HomePage from '../pages/HomePage';
import PropertyPage from '../pages/PropertyPage';
import TransportPage from '../pages/TrasportPage';
import WorkPage from '../pages/WorkPage';
import ElectronicsPage from '../pages/ElectronicsPage';
import BusinessAndServicesPage from '../pages/BusinessAndServicesPage';
import RecreationAndSportPage from '../pages/RecreationAndSportPage';
import FreePage from '../pages/FreePage';
import TradePage from '../pages/TradePage';

const paths = {
  MAIN: '/',
  PROPERTY: '/property',
  TRASPORT: '/transport',
  WORK: '/work',
  ELECTRONICS: '/electronics',
  BISNES: '/businessAndServices',
  SPORT: '/recreationAndSport',
  FREE: '/free',
  TRADE: '/trade',
};

export default function Router() {
  return (
    <main>
      <Container>
        <Switch>
          <Route path={paths.MAIN} exact component={HomePage} />
          <Route path={paths.PROPERTY} component={PropertyPage} />
          <Route path={paths.TRASPORT} component={TransportPage} />
          <Route path={paths.WORK} component={WorkPage} />
          <Route path={paths.ELECTRONICS} component={ElectronicsPage} />
          <Route path={paths.BISNES} component={BusinessAndServicesPage} />
          <Route path={paths.SPORT} component={RecreationAndSportPage} />
          <Route path={paths.FREE} component={FreePage} />
          <Route path={paths.TRADE} component={TradePage} />
        </Switch>
      </Container>
    </main>
  );
}
