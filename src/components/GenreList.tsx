import { Box, Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
    const { data, isLoading, error } = useGenres();
    if (isLoading) return <Spinner />;
    if (error) return null;
    return (
        <Box>
            <Heading fontSize='2xl' marginBottom={2}>Genre</Heading>
            <List>{data.map(genre => <ListItem key={genre.id} paddingY='5px'><HStack>
                <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={8} />
                <Button whiteSpace='normal' objectFit='cover' textAlign='left' fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button>
            </HStack></ListItem>)}</List>
        </Box>
    )
}

export default GenreList