
import { Heart, Home, ListVideo, MessageCircleQuestion, Settings } from 'lucide-react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    
    path: '/home',
    icon: <Home color="#ffffff" />,
  },
  {
   
    path: '/playlists',
    icon: <ListVideo color="#ffffff" />,
    submenu: true,
  },
  {
   
    path: '/likes',
    icon: <Heart color="#ffffff" />,
  },
  {
   
    path: '/settings',
    icon: <Settings color="#ffffff" />,
    submenu: true,
  },
  {

    path: '/help',
    icon: <MessageCircleQuestion color="#ffffff" />,
  },
];