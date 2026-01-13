import { useState } from 'preact/hooks';
import '../styles/components/greeting.css';

export default function Greeting({messages, thankYous}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const getRandomThankYou = () => thankYous[Math.floor(Math.random() * thankYous.length)];

  const [greeting, setGreeting] = useState(messages[0]);
  const [thankYou, setThankYou] = useState(getRandomThankYou());
  const [count, setCount] = useState(0);
  const [emojiList, setEmojiList] = useState([]);

  const emojis = ['😊', '🎉', '🚀', '💡', '🌟', '✨', '👏', '🔥'];
  
  const handleClick = () => {
    setGreeting(randomMessage());
    setThankYou(getRandomThankYou());
    setCount(count + 1);
    
    // 创建新的表情对象，带有唯一ID和随机位置
    const newEmoji = {
      id: Date.now() + Math.random(),
      text: emojis[Math.floor(Math.random() * emojis.length)],
      offsetX: (Math.random() - 0.5) * 80 // -40 到 40px 的随机偏移
    };
    
    setEmojiList(prev => [...prev, newEmoji]);
    
    // 1.2秒后移除该表情
    setTimeout(() => {
      setEmojiList(prev => prev.filter(e => e.id !== newEmoji.id));
    }, 1200);
  };

  return (
    <div className="greeting-container">
      <div className="greeting-content">
        <h3 className="greeting-text">{greeting}！{thankYou}</h3>
      </div>
      <span className="greeting-count">已切换 {count} 次</span>
      <button 
        className="greeting-button" 
        onClick={handleClick}
        title="获取新的欢迎语"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36M20.49 15a9 9 0 0 1-14.85 3.36" />
        </svg>
      </button>
      {emojiList.map(emoji => (
        <div 
          key={emoji.id} 
          className="emoji-popup"
          style={{
            '--emoji-offset-x': `${emoji.offsetX}px`
          }}
        >
          {emoji.text}
        </div>
      ))}
    </div>
  );
}