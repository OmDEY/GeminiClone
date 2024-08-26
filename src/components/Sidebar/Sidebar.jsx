import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Sidebar = () => {
  
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompts, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    // setRecentPrompts(prompt);
    await onSent(prompt);
  }


  const toggleExtended = () => {
    console.log('Toggling extended:', !extended);
    setExtended(!extended);
  };

  return (
    <div className='sidebar'>
      <div className='top'>
        <img className='menu' src={assets.menu_icon} alt='menu' onClick={toggleExtended} />
        <div onClick={() => newChat()} className='new_chat'>
          <img src={assets.plus_icon} alt='plus' />
          <p className= {extended ? 'show' : ''}>New Chat</p>
        </div>
        {extended && (
          <div className='recent'>
            <p className={extended ? 'recent_title show' : ''}>Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'>
                  <img src={assets.message_icon} alt='message' />
                  <p className={extended ? 'show' : ''}>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className='bottom'>
        <div className="bottom_item recent-entry">
          <img src={assets.question_icon} alt='question' />
          <p className={extended ? 'show' : ''}>Help</p>
        </div>
        <div className="bottom_item recent-entry">
          <img src={assets.history_icon} alt='history' />
          <p className={extended ? 'show' : ''}>Activity</p>
        </div>
        <div className="bottom_item recent-entry">
          <img src={assets.setting_icon} alt='settings' />
          <p className={extended ? 'show' : ''}>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
