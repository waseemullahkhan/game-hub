import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}
function Emoji({ rating }: Props) {
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'good', boxSize: '25px' },
        5: { src: bullsEye, alt: 'very god', boxSize: '35px' },
    }
    return (
        <Image marginTop={1} {...emojiMap[rating]} />
    )
}

export default Emoji