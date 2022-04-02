import './Footer.scss';

export function Footer() {
    return (
        <footer>
            <div>
                <div className={'section'}>
                    <span><a href={'mailto:abc@test.de'}>Contact me</a></span>
                </div>
                <div className={'splitter'}/>
                <div className={'section'}>
                    <span> ©Frederik Wulf 2022</span>
                </div>
            </div>
        </footer>
    )
}
