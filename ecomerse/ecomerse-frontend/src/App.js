import Header from './component/Header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <main className='p-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
    </div>
  );
}

export default App;
