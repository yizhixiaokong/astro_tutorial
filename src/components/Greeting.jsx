import { useState } from 'preact/hooks';
import './Greeting.css';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className="greeting-container">
      <h3 className="greeting-text">{greeting}！感谢来访！</h3>
      <button 
        className="greeting-button" 
        onClick={() => setGreeting(randomMessage())}
        title="获取新的欢迎语"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36M20.49 15a9 9 0 0 1-14.85 3.36" />
        </svg>
      </button>
    </div>
  );
}