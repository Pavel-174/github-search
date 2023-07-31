import './Popup.scss';

const Popup = ({ onClose, isOpen, user }) => {
  return (
    <section 
      className={ `popup ${ isOpen ? 'popup_opened' : '' }` } 
      onClick={ onClose }
    >
      <div 
        className="popup__box" 
        onClick={ (evt) => {evt.stopPropagation();} }
      >
        <img
          className='popup_image' 
          src={ user === null ? user : user.avatar_url } 
          alt="avatar"
        />
        <h2 className="popup__header">
            { user === null ? user : user.login }
        </h2>
        <span> id: { user === null ? user : user.id } </span>
        <span> status: { user === null ? user : user.type } </span>
        <span> score: { user === null ? user : user.score } </span>
        <button 
          className="popup__button-close" 
          type="button" 
          onClick={ onClose } 
        />
      </div>
    </section>
  );
};

export default Popup;