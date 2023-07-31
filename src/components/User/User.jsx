import './User.scss';

const User = ({ avatar, login, url }) => {

    return (
      <div className="user">
        <img 
          className="user_avatar" 
          src={ avatar } 
          alt="Profile"
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