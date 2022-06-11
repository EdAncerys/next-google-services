import type { NextPage } from 'next';
// --------------------------------------------------------------------------------
import AppHead from '../components/AppHead';
import GoogleAutocomplete from '../components/GoogleAutocomplete';
import { useScript } from '../hooks';

const Home: NextPage = () => {
  // --------------------------------------------------------------------------------
  // 📌  Main app exit component
  // --------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  // 📌  Script loader
  // --------------------------------------------------------------------------------
  useScript({
    url: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
  });

  console.log('🐞 ', process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

  return (
    <div className="app-container">
      <AppHead />

      <div className="flex title center">Google Services</div>

      <GoogleAutocomplete />
    </div>
  );
};

export default Home;
