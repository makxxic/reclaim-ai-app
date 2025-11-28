import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Shield, Users, Lock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <Header />
      <main>
        <section
          className='relative h-[60vh] sm:h-[70vh] md:h-screen flex items-center justify-center text-center bg-cover bg-center'
          style={{
            backgroundImage:
              'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/80752e7d-bd2b-4c91-852a-2577e00f4628/reclaim-ai-hero-gfrn00p-1764363685514.webp)',
          }}
        >
          <div className='absolute inset-0 bg-black/50'></div>
          <div className='relative z-10 p-4 text-white'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight'>
              Reclaim Your Digital Space
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8'>
              Securely collect and manage evidence of digital abuse with a tool
              designed for your safety and privacy.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link
                to='/register'
                className='w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105'
              >
                Start Collecting Evidence
              </Link>
              <Link
                to='/onboarding'
                className='w-full sm:w-auto bg-transparent hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white transition-colors'
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section id='trust' className='py-16 sm:py-24 bg-white'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-12'>
              Built on a Foundation of Trust & Safety
            </h2>
            <div className='grid md:grid-cols-3 gap-8 text-center'>
              <div className='flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow'>
                <Shield size={48} className='text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>End-to-End Encryption</h3>
                <p className='text-gray-600'>
                  Your data is encrypted and accessible only by you. We cannot view
                  your evidence.
                </p>
              </div>
              <div className='flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow'>
                <Lock size={48} className='text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Total Anonymity</h3>
                <p className='text-gray-600'>
                  Create your account without personal identifiers. Your privacy is
                  paramount.
                </p>
              </div>
              <div className='flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow'>
                <Users size={48} className='text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold mb-2'>NGO Endorsed</h3>
                <p className='text-gray-600'>
                  Recommended by leading organizations dedicated to combating online
                  harassment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-gray-800 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2025 Reclaim AI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}