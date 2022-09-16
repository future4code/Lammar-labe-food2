import Rotas from './routes/routes'
import StyledGlobal from './StyledGlobal';
import { FutureEatsProvider } from './GlobalContext/FutureEatsProvider';

function App() {
  return (
    <FutureEatsProvider>
      <Rotas/>
      <StyledGlobal/>
    </FutureEatsProvider>
  );
}

export default App;
