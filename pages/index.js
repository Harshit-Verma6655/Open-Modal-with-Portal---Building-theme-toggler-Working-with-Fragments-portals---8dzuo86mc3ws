import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  let [flag, setflag]=useState(false);

  let isOpen=()=>{
  setflag(true);
}
    let onClose=()=>{
  setflag(false);
}
  return (
    <div>
      <button  onClick={isOpen}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={onClose}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
