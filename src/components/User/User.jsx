import './User.scss';

const User = ({ avatar, login, url, openPopup, user, onCardClick }) => {

  function handleClick() {
    onCardClick(user);
    console.log(user)
  }

  return (
    <div className="user" onClick={ handleClick }>
      <img 
        className="user_avatar" 
        src={ avatar } 
        alt="Profile"
        onClick={openPopup}
      />
      <h3 className="user_login"> { login } </h3>
      <a 
        className='user_link' 
        href={ url } 
        target="_blank" 
        rel="noopener noreferrer"
      > GitHub page </a>
    </div>
  );
};
  
export default User;