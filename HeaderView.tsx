import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import MobileSideContainer from "./MobileSideButton/Container";
import MenubarContainer from "./Menubar/Container";

const HeaderView = () => {
    const navRef = useRef<HTMLElement>(null);

    return (
        <header id="header">
            <div className="hd_inner">
                <MobileSideContainer navRef={navRef} isOpen={true} />
                <div className="hd_left">
                    <h1 className="logo">
                        <a href="/">IDTHUB</a>
                    </h1>
                    <div className="menu">
                        <ul>
                            <MenubarContainer />
                            <li>
                                <a href="#none">Explore</a>
                                <ul className="sub_menu">
                                    <li>
                                        <a href="#none">Explore</a>
                                    </li>
                                    <li>
                                        <a href="#none">Template</a>
                                    </li>
                                    <li>
                                        <a href="#none">Product</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#none">Workspace</a>
                                <ul className="sub_menu">
                                    <li>
                                        <a href="#none">Template</a>
                                    </li>
                                    <li>
                                        <a href="#none">Product</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="util">
                    <div className="btn_search">
                        <i className="icon search"></i>
                    </div>
                    <div className="btn_login">
                        <a href="./login.html">Sign in</a>
                    </div>
                </div>
            </div>

            <nav id="nav" ref={navRef}>
                <div className="nav_inner">
                    <div className="nav_hd">
                        <h2 className="logo">
                            <a href="#none">IDTHUB</a>
                        </h2>
                        <MobileSideContainer navRef={navRef} isOpen={false} />
                    </div>
                    <div className="nav_bd">
                        <div className="inp_box">
                            <div className="inp search">
                                <input type="search" name="" id="" placeholder="Search IDTHUB" />
                                <button type="submit" className="btn_search"></button>
                            </div>
                        </div>
                        <ul className="menu_list acc_wrap">
                            <li className="acc_box">
                                <div className="acc_tit">
                                    <span className="tit">Explore</span>
                                    <i className="icon arrow arrow_d"></i>
                                </div>
                                <div className="acc_cont">
                                    <ul className="sub_menu_list">
                                        <li>
                                            <a href="#none">Overview</a>
                                        </li>
                                        <li>
                                            <a href="#none">Template</a>
                                        </li>
                                        <li>
                                            <a href="#none">Product</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="acc_box">
                                <div className="acc_tit">
                                    <span className="tit">Workspace</span>
                                    <i className="icon arrow arrow_d"></i>
                                </div>
                                <div className="acc_cont">
                                    <ul className="sub_menu_list">
                                        <li>
                                            <a href="#none">Template</a>
                                        </li>
                                        <li>
                                            <a href="#none">Product</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderView;
