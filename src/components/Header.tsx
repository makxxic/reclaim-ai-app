import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='absolute top-0 left-0 w-full z-10 p-4 sm:p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold text-white'>
          Reclaim AI
        </Link>
        <nav className='hidden sm:flex items-center space-x-6'>
          <Link to='/login' className='text-white hover:text-gray-200'>
            Login
          </Link>
          <Link
            to='/register'
            className='bg-white text-blue-600 hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg transition-colors'
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}