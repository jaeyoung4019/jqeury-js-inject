# 퍼블리싱이 jquery로 와서 React Function 으로 변경하여 사용할 시간이 없을 때 Injection 하는 방법

![image](https://github.com/jaeyoung4019/jqeury-js-inject/assets/135151752/d37e0203-ba0d-4e72-9edb-6d9a838a63ae)

간단하게 컨벤션을 지켜서 assets 에 js 파일과 css 를 넣어준다.

예를 들어

```js
    //모바일 navi open 이벤트
    $(hamBtn).on("click", function(){
        if(navMenu.hasClass('open')){
            navMenu.removeClass('open');
            navMenu.addClass('close');
            body.removeClass('no-scroll');
        }else{
            navMenu.addClass('open');
            navMenu.removeClass('close');
            body.addClass('no-scroll');
        }
    });
    모바일 navi close 이벤트
    $(navClose).on("click", function(){
        if(navMenu.hasClass('open')){
            navMenu.removeClass('open');
            navMenu.addClass('close');
            body.removeClass('no-scroll');
        }else{
            navMenu.addClass('open');
            navMenu.removeClass('close');
            body.addClass('no-scroll');
        }
    });

```

이러한 버튼 클릭 시 DOM 을 직접 핸들링하는 js 가 있다고 가정하면,

Function 자체의 의미는 같기 때문에 Container 와 Presentation 으로 만들어서 적용한다.

Container 는

```ts
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

```

이렇게 ref 로 변경할 수 있는 부분은 변경하고 body 부분은 root 밖이기 때문에 핸들링하기 위해서 document 객체를 사용합니다.

이렇게 되면 View 를 알 수 있는 프롭스만 넘겨서 서로 다른 view 를 보여주고 같은 기능을 하는 컴포넌트를 만들 수 있습니다.
