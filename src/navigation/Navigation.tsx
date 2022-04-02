import React from 'react';
import './Navigation.scss';
import { useLocation } from 'react-router';
import { NavItem } from './NavItem';

export function Navigation() {
    const { hash } = useLocation();

    return (
        <nav>
            <ul>
                <NavItem displayed={'#section1' === hash} sectionName={'section1'} />
                <NavItem displayed={'#section2' === hash} sectionName={'section2'} />
                <NavItem displayed={'#section3' === hash} sectionName={'section3'} />
            </ul>
        </nav>);
}
