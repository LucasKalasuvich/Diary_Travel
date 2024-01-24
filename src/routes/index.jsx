import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Bookmark from '@pages/Bookmark';
import DetailPost from '@pages/DetailPost';
import NewJourney from '@pages/NewJourney';
import Login from '@pages/Login';
import Register from '@pages/Register';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    protected: false,
    component: Bookmark,
    layout: MainLayout,
  },
  {
    path: '/datailpost',
    name: 'datailpost',
    protected: false,
    component: DetailPost,
    layout: MainLayout,
  },
  {
    path: '/newjourney',
    name: 'newjourney',
    protected: false,
    component: NewJourney,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
