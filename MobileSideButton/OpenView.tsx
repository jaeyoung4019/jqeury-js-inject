import React from 'react';

const MobileSideOpenView = ({onClickHandler} : {onClickHandler: () => void}) => {
    return (
        <div id="ham_btn" onClick={onClickHandler}>
            <div className="line_box">
                <span className="top"></span>
                <span className="mid"></span>
                <span className="bot"></span>
            </div>
        </div>
    )
}

export default MobileSideOpenView;