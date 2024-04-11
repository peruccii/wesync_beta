
import { Heart, Home, ListVideo, MessageCircleQuestion, Settings } from 'lucide-react';
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    
    path: '/home',
    tooltip: 'Home',
    icon: <Home size={20} color="#ffffff" />,
  },
  {
   
    path: '/playlists',
    tooltip: 'Playlists',
    icon: <ListVideo size={20} color="#ffffff" />,
  },
  {
   
    path: '/likes',
    tooltip: 'Liked',
    icon: <Heart size={20} color="#ffffff" />,
  },
  {
   
    path: '/settings',
    tooltip: 'Settings',
    icon: <Settings size={20} color="#ffffff" />,
  },
  {

    path: '/help',
    tooltip: 'Help',
    icon: <MessageCircleQuestion size={20} color="#ffffff" />,
  },
];