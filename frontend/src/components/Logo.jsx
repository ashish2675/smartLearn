import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to='/' className='w-32 h-auto rounded-md'>
    <img src='/logo.jpg' alt='' className='rounded-md' />
  </Link>
);

export default Logo;
