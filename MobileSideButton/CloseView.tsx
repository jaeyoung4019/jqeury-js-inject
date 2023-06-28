import React from 'react';

const MobileSideCloseView = ( {onClickHandler} : {onClickHandler: () => void}) => {
    return (
        <div id="nav_close" onClick={onClickHandler}><span className="sound_only">닫기</span><i className="icon close"></i></div>
    )
}

export default MobileSideCloseView;