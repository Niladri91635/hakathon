import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard', 
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Result',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'organizational tree',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'analysis',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
