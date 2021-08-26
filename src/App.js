import { useState } from 'react';
import './App.css';
import ImageGrid from './component/imageGrid';
import Modal from './component/Modal';
import Title from './component/Title';
import UploadForm from './component/uploadForm';

function App() {
  const [selectedImage,setSelectedImage] = useState(null);
  return (
    <div className="App">
         <Title/>
         <UploadForm/>
         <ImageGrid setSelectedImage={setSelectedImage}/>
         {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
