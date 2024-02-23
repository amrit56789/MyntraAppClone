import { Menu, MenuHandler, MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { MdPerson, MdEdit, MdInbox, MdHelp, MdExitToApp } from 'react-icons/md';

export default function Profile() {
  return (
    <Menu>
      <MenuHandler>
        <img
          src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="tania andrew"
          className="cursor-pointer rounded-full w-8 h-8"
          style={{ objectFit: 'cover' }}
        />
      </MenuHandler>
      <MenuList className="mt-1 z-50">
        <MenuItem className="flex items-center gap-2">
          <MdPerson className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <MdEdit className="h-4 w-4" />
          <Typography variant="small" className="font-normal"> 
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <MdInbox className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Inbox
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <MdHelp className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <MdExitToApp className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
