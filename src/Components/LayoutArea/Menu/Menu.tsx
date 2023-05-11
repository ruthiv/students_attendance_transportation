import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to={"/home"}>דף הבית</NavLink>
            <span> | </span>

			<NavLink to={"/school-director"}>הנהלה</NavLink>
            <span> | </span>
			<NavLink to={"/school-director"}>מורות</NavLink>
            <span> | </span>
			<NavLink to={"/school-director"}>פרטי בית הספר</NavLink>
        </div>
    );
}

export default Menu;
