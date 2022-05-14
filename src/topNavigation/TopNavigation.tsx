import './TopNavigation.scss';

type TopNavigationProps = {
  activeIndex: number,
  onClick: (index: number) => void;
}

export default function TopNavigation(props: TopNavigationProps) {
  const classNames = new Array(3).fill('item');
  classNames[props.activeIndex] = ' selected';
  return (
    <div className={'top-navigation'}>
      <span onClick={() => props.onClick(0)} className={classNames[0]}>About</span>
      <span onClick={() => props.onClick(1)} className={classNames[1]}>Portfolio</span>
      <span onClick={() => props.onClick(2)} className={classNames[2]}>Resume</span>
    </div>
  )
}


