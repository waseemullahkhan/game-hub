import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}
function HeadingGame({ gameQuery }: Props) {
    return (
        <Heading marginY={5}>{`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}</Heading>
    )
}

export default HeadingGame