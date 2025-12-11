import demo1 from '@/assets/img/demo/demo1.jpg'
import demo2 from '@/assets/img/demo/demo2.jpg'
/* Removed demo3..demo9 images (pages removed) */
import rtl from '@/assets/img/demo/rtl.png'

const menu = [
  {
    title: 'Home',
    icon: 'FaAngleDown',
    demos: [
      {
        image: demo1,
        multiPage: '/home-1',
        title: '01. Website Builder',
      },
      {
        image: demo2,
        multiPage: '/home-2',
        title: '02. Landing Page Builder',
      },
      /* Removed demos for home-3 .. home-9 */
      { image: rtl, multiPage: '/rtl', title: '10. RTL Version' },
    ],
  },
  {
    title: 'About Us',
    link: '/about',
  },
  {
    title: 'Pages',
    subMenu: [
      { title: 'Templates', link: '/features' },
      { title: 'Features', link: '/features' },
      { title: 'Integrations', link: '/download' },
      { title: 'Pricing', link: '/pricing' },
      { title: 'Resources', link: '/download' },
      { title: '404', link: '/error' },
    ],
  },
  {
    title: 'Blog',
    subMenu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Details Left', link: '/blog-details-sidebar-left' },
      { title: 'Details Right', link: '/blog-details-sidebar-right' },
      { title: 'Blog Details', link: '/blog-details' },
    ],
  },
  {
    title: 'Account',
    subMenu: [
      { title: 'Sign Up', link: '/account' },
      { title: 'Login', link: '/login' },
      { title: 'Forgot', link: '/forgot' },
      { title: 'Reset', link: '/reset' },
      { title: 'Verify Email', link: '/verify' },
      { title: 'Success', link: '/form-success' },
    ],
  },
]

export default menu