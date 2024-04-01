import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oppss!!!!!!!!</h2>
           <button className="px-4 py-2 rounded bg-black text-white"><Link to='/'>Go Home</Link></button> 
        </div>
    );
};

export default ErrorPage;