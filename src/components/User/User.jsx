const User = ({ avatar, login }) => (
  <div className="user">
    <img className="user_avatar" src={avatar} alt="Profile"/>
    <h3>{login}</h3>
  </div>
);

export default User;