import React from 'react';
import './Navigation.scss';
import { useLocation } from 'react-router';
import { NavItem } from './NavItem';

type NavigationProps = {
  onSectionClick: (index: number) => void;
  activeIndex: number;
}

export function Navigation(props: NavigationProps) {

    return (
        <nav>
            <ul>
                <NavItem displayed={props.activeIndex === 0} index={0} onClick={props.onSectionClick}/>
                <NavItem displayed={props.activeIndex === 1} index={1} onClick={props.onSectionClick}/>
                <NavItem displayed={props.activeIndex === 2} index={2} onClick={props.onSectionClick}/>
            </ul>
        </nav>);
}
