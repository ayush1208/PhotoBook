import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import Upload from './components/Upload';
import SideMenu from './components/Sidebar';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <div className="App">
      <Title/>
      <Upload />
      <br></br><br></br><br></br><br></br>
      <SideMenu setShowFavourites={setShowFavourites}/>
      <br></br>
      <ImageGrid showFavourites={showFavourites} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
