import Menu from './menu/Menu';
import Date from './Date/Date'; 

export default function TypeSwitchers({title}) {
    return (
        <header>
            <Date />
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