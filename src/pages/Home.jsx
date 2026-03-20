import './Home.css'
import { useState } from 'react';

function Home() {
  // Array of artworks - edit this to add your images
  const artworks = [
    { id: 1, src: '/art/Art1.jpg', title: 'Friends', description: 'Original piece: Friends' },
    { id: 2, src: '/art/Art2.jpg', title: 'Buttefly', description: 'Original piece: Buttefly' },
    { id: 3, src: '/art/Art3.jpg', title: 'Birb faithful friend', description: 'Original piece: Birb faithful friend' },
    { id: 1, src: '/art/Art1.jpg', title: 'Friends', description: 'Original piece: Friends' },
    { id: 2, src: '/art/Art2.jpg', title: 'Buttefly', description: 'Original piece: Buttefly' },
    { id: 3, src: '/art/Art3.jpg', title: 'Birb faithful friend', description: 'Original piece: Birb faithful friend' },
    { id: 1, src: '/art/Art1.jpg', title: 'Friends', description: 'Original piece: Friends' },
    { id: 2, src: '/art/Art2.jpg', title: 'Buttefly', description: 'Original piece: Buttefly' },
    { id: 3, src: '/art/Art3.jpg', title: 'Birb faithful friend', description: 'Original piece: Birb faithful friend' },
    { id: 1, src: '/art/Art1.jpg', title: 'Friends', description: 'Original piece: Friends' },
    { id: 2, src: '/art/Art2.jpg', title: 'Buttefly', description: 'Original piece: Buttefly' },
    { id: 3, src: '/art/Art3.jpg', title: 'Birb faithful friend', description: 'Original piece: Birb faithful friend' },
  ];

  const [modalArt, setModalArt] = useState(null);
  const openModal = (art) => setModalArt(art);
  const closeModal = () => setModalArt(null);

  return (
    <div className="home">
      <header>
        <h1>Summer's Wonderful Works</h1>
        <br></br>
        <p>Welcome to my collection of artwork. Commissions available!</p>
      </header>
      <main>
        <div className="gallery">
          {artworks.map(art => (
            <div key={art.id} className="art-piece" style={{ cursor: 'pointer' }} onClick={() => openModal(art)}>
              <img src={art.src} alt={art.title} />
              <h3>{art.title}</h3>
              <p>{art.description}</p>
            </div>
          ))}
        </div>
        {modalArt && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <img src={modalArt.src} alt={modalArt.title} style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '12px' }} />
              <h2>{modalArt.title}</h2>
              <p>{modalArt.description}</p>
              <button onClick={closeModal} style={{ marginTop: '16px', padding: '8px 18px', borderRadius: '6px', background: '#f59e0b', color: '#2c2418', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        )}
      </main>
      <footer>
        <p>Please visit the <a href="/contact">Contact</a> page for commissions and to connect with me</p>
      </footer>
    </div>
  );
}

export default Home;