import './TopNavigation.scss';
import { useLocation } from 'react-router';

type TopNavigationProps = {
  activeIndex: number
}

export default function TopNavigation(props: TopNavigationProps) {
  const classNames = new Array(3).fill('item');
  classNames[props.activeIndex] = ' selected';
  return (
    <div className={'top-navigation'}>
      <a href={'#section1'} className={classNames[0]}>About</a>
      <a href={'#section2'} className={classNames[1]}>Portfolio</a>
      <a href={'#section3'} className={classNames[2]}>Resume</a>
    </div>
  )
}


