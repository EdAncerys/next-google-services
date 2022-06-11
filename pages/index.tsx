import type { NextPage } from 'next';
// --------------------------------------------------------------------------------
import AppHead from '../components/AppHead';
import GoogleAutocomplete from '../components/GoogleAutocomplete';

const Home: NextPage = () => {
  // --------------------------------------------------------------------------------
  // 📌  Main app exit component
  // --------------------------------------------------------------------------------

  return (
    <div className="app-container">
      <AppHead />

      <div className="flex title center">Google Services</div>

      <GoogleAutocomplete />
    </div>
  );
};

export default Home;
