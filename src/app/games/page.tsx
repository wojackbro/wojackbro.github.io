import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';
import { profileData } from '../data/profile';
import Link from 'next/link';

export default function GamesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-100" style={{ backgroundImage: 'url(/images/queen.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
      <section className="w-full py-32 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">Games</h1>
          <p className="text-xl text-blue-200 text-center mb-12">
            Explore various games and interactive experiences.
          </p>
        </div>
      </section>

      {/* New Section for Game Links */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <Link href="/games/racing-game" className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
              Racing Game
            </Link>
            <Link href="/games/shooter-game" className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 hover:bg-blue-700">
              Shooter Game
            </Link>
          </div>
        </div>
      </section>
      <Footer profile={profileData} />
    </main>
  );
} 