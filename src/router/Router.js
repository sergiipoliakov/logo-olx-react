import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../Components/UI/Container/Container';
import PrivateRoute from '../Components/PrivateRoute';

import HomePage1 from '../pages/HomePage1';
import HomePage2 from '../pages/HomePage2';
import HomePage3 from '../pages/HomePage3';

import PropertyPage from '../pages/PropertyPage';
import TransportPage from '../pages/TrasportPage';
import WorkPage from '../pages/WorkPage';
import ElectronicsPage from '../pages/ElectronicsPage';
import BusinessAndServicesPage from '../pages/BusinessAndServicesPage';
import RecreationAndSportPage from '../pages/RecreationAndSportPage';
import FreePage from '../pages/FreePage';
import TradePage from '../pages/TradePage';
import UserCards from '../pages/UserCards';
import UserFavouritesCardsPage from '../pages/Favourites';

import SearchPage from '../pages/SearchPage';

export const paths = {
  MAIN: '/',
  SECOND: '/page=2',
  THIRD: '/page=3',

  SEARCH: '/search',

  PROPERTY: '/property',
  TRASPORT: '/transport',
  WORK: '/work',
  ELECTRONICS: '/electronics',
  BISNES: '/businessAndServices',
  SPORT: '/recreationAndSport',
  FREE: '/free',
  TRADE: '/trade',
  OWN: '/userCards',
  FAVOURITES: '/favourites',
};

export default function Router() {
  return (
    <main>
      <Container>
        <Switch>
          <Route path={paths.SECOND} exact component={HomePage2} />
          <Route path={paths.THIRD} exact component={HomePage3} />
          <Route path={paths.MAIN} exact component={HomePage1} />

          <Route path={paths.SEARCH} component={SearchPage} />

          <Route path={paths.PROPERTY} component={PropertyPage} />
          <Route path={paths.TRASPORT} component={TransportPage} />
          <Route path={paths.WORK} component={WorkPage} />
          <Route path={paths.ELECTRONICS} component={ElectronicsPage} />
          <Route path={paths.BISNES} component={BusinessAndServicesPage} />
          <Route path={paths.SPORT} component={RecreationAndSportPage} />
          <Route path={paths.FREE} component={FreePage} />
          <Route path={paths.TRADE} component={TradePage} />
          <PrivateRoute path={paths.OWN} component={UserCards} />
          <PrivateRoute
            path={paths.FAVOURITES}
            component={UserFavouritesCardsPage}
          />
        </Switch>
      </Container>
    </main>
  );
}
