
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GridCardContainer from "./GridCardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery
}
function GameGrid({ gameQuery }: Props) {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    if (error) return <Text>{error} </Text>;
    return (


        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding='10px'>
            {isLoading && skeletons.map(skeleton => <GridCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
            </GridCardContainer>)}
            {data.map(game => <GridCardContainer key={game.id}>
                <GameCard game={game} />
            </GridCardContainer>)}
        </SimpleGrid>

    )
}

export default GameGrid