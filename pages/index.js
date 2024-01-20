import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  let [isOpen, setisOpen]=useState(false);

  return (
    <div>
      <button  onClick={()=>setisOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} >
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={()=>setisOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
