// src/App.jsx
import React, { useState } from "react";
import "./App.css";

const videos = [
  "https://www.youtube.com/embed/LjbsNdJnJlQ?si=VfzCjp_ATBETDP5g",
  "https://www.youtube.com/embed/bN_mxfBahEo?si=TciWEBV0M9c5hngH",
  "https://www.youtube.com/embed/GtHxfgLr6Qw?si=E5vHGVqN60NJNPzx",
  "https://www.youtube.com/embed/odW0pz1eDb4?si=guAgVLe8iCT9Bk7l",
  "https://www.youtube.com/embed/moVsbfqq5iw?si=TGiyA81ELtsX43JU",
  "https://www.youtube.com/embed/6yQGUvS_Qbc?si=I3L6ccT85Q4fETgA",
  "https://www.youtube.com/embed/ktzza5_FuIQ?si=imUICCVSgCw-JMAY",
  "https://www.youtube.com/embed/Hckut613qDo?si=IelxBLuVXBzWlsdN",
  "https://www.youtube.com/embed/VoB84bYm2TM?si=eZlAWqHjXcXnkzMV",
  "https://www.youtube.com/embed/oTONa18LeQY?si=twYrLYo7E1D4amWz",
  "https://www.youtube.com/embed/znJ_sMQgvY4?si=6f6ddjt9cObxigkB",
  "https://www.youtube.com/embed/8o2UZtle-vM?si=09zKcA__TCD1X5E8",
  "https://www.youtube.com/embed/XuvcrPknaiM?si=cRCNFqqedT3O_I_u",
  "https://www.youtube.com/embed/tLYwIV9nw7E?si=lTEjsLrNgUib8WNf",
  "https://www.youtube.com/embed/5lzGpSd_kqs?si=8f-GqJ2eYSR9dbJ7",
  "https://www.youtube.com/embed/7g71yKDV4Vw?si=YbCiGndD4F9Zliwj",
  "https://www.youtube.com/embed/rGF8zPyIi1k?si=4niRJTP5S57FcNR_",
  "https://www.youtube.com/embed/hN3whZh9m6M?si=K05dtteZLX0VDBKV",
  "https://www.youtube.com/embed/SVrZl4FJFdM?si=oeHFmC6_AoZ7r3zN",
  "https://www.youtube.com/embed/PhWz-YPjnd4?si=KRY4I_CbFS59iLvq",
  "https://www.youtube.com/embed/2zQlxXNxjQM?si=aX85Wpf9kCalmr4C",
  "https://www.youtube.com/embed/41VgnUihPJs?si=hZZxvG1rfdMGCCgl",
  "https://www.youtube.com/embed/sukS_YYlWrY?si=IHGhAIAe9IVoQQKe",
  "https://www.youtube.com/embed/JaHb-VMs-QE?si=f6wnDEAO9pJQ84vC",
  "https://www.youtube.com/embed/RWxuPNFVKdw?si=IGYA1ojoLEYFFYpe",
  "https://www.youtube.com/embed/JEW_ZlGmY4M?si=TFV18mXjlZ8CVwDq",
  "https://www.youtube.com/embed/J6NmUun0Dk8?si=9faxv1RDVnF2iS0g",
];



function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="main-bg">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2 className="arabic">ٱلسَّلَامُ عَلَيْكُمْ</h2>
            <p>Добро пожаловать на сайт изучения арабских букв!</p>
            <button onClick={() => setShowPopup(false)}>Спасибо</button>
          </div>
        </div>
      )}
      <header>
        <h1>Изучение арабского алфавита</h1>
        <p>Видео-уроки по каждой букве с исламским оформлением</p>
      </header>
      <div className="video-grid">
        {videos.map((src) => (
          <div className="video-card" key={src}>
            
                <iframe width="560" height="315"
                src={src}
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            
          </div>
        ))}
      </div>
      <footer>
        <p>© 2025 Изучение арабского алфавита. Мир вам!</p>
      </footer>
    </div>
  );
}

export default App;

/*<iframe
              src={src}
              title={`Буква ${arabicLetters[idx]}`}
              allowFullScreen
              loading="lazy"
            >
              
            </iframe> */
