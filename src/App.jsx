import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/cartProvider.jsx';

import MainLayout from './components/composite/mainLayout.jsx';
import Login from './pages/logIn.jsx';
import Sales from './pages/sales.jsx';
import History from './pages/history.jsx';
import Stats from './pages/stats.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route element={<MainLayout />}>
              <Route path="/sales" element={<Sales />} />
              <Route path='/history' element={<History />} />
              <Route path='/stats' element={<Stats />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;