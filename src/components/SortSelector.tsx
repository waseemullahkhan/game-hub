import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectedSortOrder: (sorting: string) => void;
    sortOrder: string;
}
function SortSelector({ onSelectedSortOrder, sortOrder }: Props) {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-release', label: 'Release date' },
        { value: 'm', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const current = sortOrders.find(sort => sort.value == sortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {current?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() => onSelectedSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default SortSelector