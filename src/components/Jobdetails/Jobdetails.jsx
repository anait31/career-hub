import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    // console.log(id, job);

    const handleApplyJob = () => {
        toast('You Have Applied Successfully')
    }

    return (
        <div>
            <h2 className="text-center my-5 text-3xl font-bold">Job Details Of: {id}</h2>
            <div className="grid gap-16 md:grid-cols-4">
                <div className="md:col-span-3 space-y-4">
                    <h2 className="text-justify"><span className="font-semibold">Job Description:</span>  {job.job_description}</h2>
                    <h2 className="text-justify"><span className="font-semibold">Job Responsibilities:</span>  {job.job_responsibility}</h2>
                    <h2 className="text-justify"><span className="font-semibold">Education Requirements: </span>{job.educational_requirements}</h2>
                    <h2 className="text-justify"><span className="font-semibold">Job Experience:</span>{job.experiences}</h2>
                </div>
                <div className="md:col-span-1 mb-8 space-y-4 bg-slate-200 p-6 rounded-md">
                    <h2 className="text-xl font-semibold">Job Details</h2>
                    <div>
                        <h2><span className="font-semibold">Salary: </span>{job.salary} / Month</h2>
                        <h2><span className="font-semibold">Job Title: </span>{job.job_title}</h2>
                    </div>
                    <h2 className="text-xl font-semibold">Contact Information</h2>
                    <div>
                        <h2><span className="font-semibold">Phone: </span>{job.contact_information.phone}</h2>
                        <h2><span className="font-semibold">Email: </span>{job.contact_information.email}</h2>
                        <h2><span className="font-semibold">Address: </span>{job.contact_information.address}</h2>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;