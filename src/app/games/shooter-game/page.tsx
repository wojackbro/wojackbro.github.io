import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';
import { profileData } from '../../data/profile';

export default function ShooterGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 dark:bg-gray-900">
      <TabNavigation />
      <section className="w-full py-32 bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">Shooter Game</h1>
          <p className="text-xl text-blue-200 text-center">
            Engage in thrilling shooting action.
          </p>
        </div>
      </section>
      <Footer profile={profileData} />
    </main>
  );
} 