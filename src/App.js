
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex justify-center items-center m-4 gap-3'>
        <img src='images/logo.png' alt='Logo' width={30}></img>
        <h1 className='text-3xl font-bold'>WebDeals</h1>
      </div>
      <h3 className='text-xl font-vold underline m-3 mt-0'><a className='cursor-pointer'>Our Products</a></h3>
    </div>
  );
}

export default App;
