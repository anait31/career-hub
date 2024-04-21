import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded-md border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded-md border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex my-2">
                    <h2 className="flex items-center mr-7"><CiLocationOn className="text-2xl"></CiLocationOn>{location}</h2>
                    <h2 className="flex items-center"><MdCurrencyExchange></MdCurrencyExchange>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;