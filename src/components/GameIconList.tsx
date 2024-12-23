import { FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
    platforms: Platform[]
}
function GameIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map(p => <Icon key={p.id} as={iconMap[p.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default GameIconList