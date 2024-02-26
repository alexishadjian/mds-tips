import Menu from './menu/Menu';


export default function TypeSwitchers({title}) {
    return (
        <header>
            <span>Jeudi, 21 avr</span>
            <div className="flex space">
                <div className="col4">
                    <h1>{title}</h1>
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </header>
    );
}