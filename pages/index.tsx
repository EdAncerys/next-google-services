import type { NextPage } from 'next';
// --------------------------------------------------------------------------------
import AppHead from '../components/AppHead';

const Home: NextPage = () => {
  // --------------------------------------------------------------------------------
  // 📌  Main app exit component
  // --------------------------------------------------------------------------------

  return (
    <div className="app-container">
      <AppHead />

      <div>app</div>
    </div>
  );
};

export default Home;
