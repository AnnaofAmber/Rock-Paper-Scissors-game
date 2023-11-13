import { useState } from 'react';
import scss from './ModalRules.module.scss';

export const ModalRules = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(true);
  };
  return (
    <div>
      <button onClick={handleModalClick}>Rules</button>
      {isModal && (
        <div className={scss.overlay}>
          <div className={scss.modal}>
            <div className={scss['modal-container']}>
              {' '}
              <h2 className={scss.title}>rules</h2>
              <div className={scss.rules}></div>
              <button className={scss['btn-close']}></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
