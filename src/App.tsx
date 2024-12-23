
import './App.css'
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import HeadingGame from './components/HeadingGame'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortingOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return <Grid templateAreas={{ base: '"nav" "main"', lg: `"nav nav" "aside main"` }} templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
    <GridItem area="nav"><NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText: searchText })} /></GridItem>
    <Show above='lg'><GridItem area="aside" paddingX='5px'><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} /></GridItem></Show>
    <GridItem area="main" padding='10px'>
      <Box paddingLeft={2}>
        <HeadingGame gameQuery={gameQuery}/>
        <Flex marginBottom={5}>
          <Box marginRight={5}><PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} /></Box>
          <SortSelector sortOrder={gameQuery.sortingOrder} onSelectedSortOrder={(order) => setGameQuery({ ...gameQuery, sortingOrder: order })} />
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} /></GridItem>
  </Grid >
}

export default App
