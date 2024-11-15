import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { BsThreeDotsVertical } from "react-icons/bs";
import { ListSubheader } from '@mui/material';

export default function UserList() {




    const userData = [
        {

            name: 'James Smith',
            price: '$65.00',
            date: 'Sept 10 2023',
            isComplete: 'Completed'
        },
        {

            name: 'James Smith',
            price: '$65.00',
            date: 'Sept 10 2023',
            isComplete: 'Cancelled'
        },
        {

            name: 'James Smith',
            price: '$65.00',
            date: 'Sept 10 2023',
            isComplete: 'Completed'
        },
        {

            name: 'James Smith',
            price: '$65.00',
            date: 'Sept 10 2023',
            isComplete: 'Cancelled'
        },
        {

            name: 'James Smith',
            price: '$65.00',
            date: 'Sept 10 2023',
            isComplete: 'Completed'
        },

    ]

    return (
        <List dense sx={{ width: '100%', }}
        subheader={<ListSubheader sx={{textAlign:'start'}}>Users</ListSubheader>}
        >

            {userData.map((e, i) => {
                const labelId = `checkbox-list-secondary-label-${i}`;
                return (
                    <ListItem
                        key={i}

                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    //   alt={`Avatar n°${value + 1}`}
                                    src={"https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg"}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={e.name} />
                            <ListItemText id={labelId} primary={e.price} />
                            <ListItemText id={labelId} primary={e.date} />

                            <ListItemText sx={{ backgroundColor: e.isComplete === "Completed" ? "#3B82F6" : e.isComplete === "Cancelled" ? "#F63B3B" : 'white', color: 'white', borderRadius: 20, alignItems: 'center', textAlign: 'center', p: 0.5 }} id={labelId} primary={e.isComplete} />
                            <ListItemText id={labelId} primary={''} />
                            <ListItemText id={labelId} primary={''} />
                            <ListItemText id={labelId} primary={<BsThreeDotsVertical />} />
                        </ListItemButton>

                    </ListItem>
                );
            })}
        </List>
    );
}