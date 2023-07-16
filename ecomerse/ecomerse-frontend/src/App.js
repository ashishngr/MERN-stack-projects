import Header from './component/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />

       <div>
        <Header />
        <main className='p-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
   
  );
}

export default App;
