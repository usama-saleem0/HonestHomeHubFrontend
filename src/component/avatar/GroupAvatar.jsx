import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={2}>
      <Avatar sx={{width:20,height:20}} alt="Remy Sharp" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" />
      <Avatar sx={{width:20,height:20}} alt="Travis Howard" src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg" />
      
    </AvatarGroup>
  );
}