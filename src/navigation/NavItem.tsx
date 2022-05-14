import React from 'react';
import { motion } from "framer-motion"
import './Navigation.scss';
import '../_colors.scss';
import { AnimationControls } from 'framer-motion/types/animation/types';
import { TargetAndTransition } from 'framer-motion/types/types';
import { VariantLabels } from 'framer-motion/types/motion/types';

type NavItemProps = {
    displayed: boolean;
    index: number;
    onClick: (index: number) => void;
}

export function NavItem(props: NavItemProps) {
    let classList = 'nav-item';

    let animate: AnimationControls | TargetAndTransition | VariantLabels = {};
    if (props.displayed) {
        classList += ' active';
        animate.rotate = 45;
        animate.scale = 1.2;
        animate.background = '#433453';
    }else {
        animate.background = 'rgba(0,0,0,0)';
    }

    return <li><motion.div animate={animate} transition={{ type: "spring", duration: 0.6 }} className={classList} onClick={() => props.onClick(props.index)}/></li>
}
