import { Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Layout from "../Layout/Layout";
import AddTeacher from "../../SchoolDirectorArea/AddTeacher/AddTeacher";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Layout/>} />
                <Route path="/home" element={<Home/>} />
                <Route index element={<Home/>} />
                {/* <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} /> */}
                <Route path="/school-director" element={<AddTeacher/>} /> 
            </Routes>
        </div>
    );
}

export default Routing;
