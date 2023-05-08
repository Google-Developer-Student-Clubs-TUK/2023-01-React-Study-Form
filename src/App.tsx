import tw from 'twin.macro';

import MainPage from '@/pages/MainPage';

const App = () => (
  <Container>
    <MainPage />
  </Container>
);

const Container = tw.div`w-full min-h-screen max-w-[820px] mx-auto border-8 border-gray-300 p-10`;

export default App;
