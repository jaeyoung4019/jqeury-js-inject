import React, { useCallback } from "react";
import MobileSideOpenView from "./OpenView";
import MobileSideCloseView from "./CloseView";

const MobileSideContainer = ({ navRef, isOpen }: { navRef: React.MutableRefObject<any>; isOpen: boolean }) => {
    const onClickOpenHandler = useCallback(() => {
        const refClassList = navRef.current.classList;

        if (refClassList.contains("open")) {
            refClassList.remove("open");
            refClassList.add("close");
            document.body.classList.remove("no-scroll");
        } else {
            refClassList.remove("close");
            refClassList.add("open");
            document.body.classList.add("no-scroll");
        }
    }, [navRef]);

    return isOpen ? <MobileSideOpenView onClickHandler={onClickOpenHandler} /> : <MobileSideCloseView onClickHandler={onClickOpenHandler} />;
};

export default MobileSideContainer;
