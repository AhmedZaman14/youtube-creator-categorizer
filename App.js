import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import CreatorInfoScreen from './components/screens/CreatorInfoScreen';
import CategoryScreen from './components/screens/CategoryScreen';
import SearchResultsScreen from './components/screens/SearchResultsScreen';
import FavoritesScreen from './components/screens/FavoritesScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import CategoriesOverviewScreen from './components/screens/CategoriesOverviewScreen';
import PopularCreatorsScreen from './components/screens/PopularCreatorsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'YouTube Creator Categorizer' }}
        />
        <Stack.Screen
          name="CreatorInfo"
          component={CreatorInfoScreen}
          options={{ title: 'Creator Info' }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route }) => ({ title: `${route.params.category.name} Creators` })}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResultsScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="PopularCreators"
          component={PopularCreatorsScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: '' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: '' }}
        />
       
        <Stack.Screen
          name="CategoriesOverview"
          component={CategoriesOverviewScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
