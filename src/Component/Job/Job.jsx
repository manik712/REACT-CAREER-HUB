import { GoLocation } from "react-icons/go";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";

const Job = ({job}) => {
  const {logo,job_title,company_name,remote_or_onsite,location,job_description,job_responsibility,educational_requirements,experiences,contact_information,phone,email,address,job_type,salary} = job
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
      <button  className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
      <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] ">{job_type}</button>
      <div className="mt-4 flex">
        <h2 className="flex mr-4"><GoLocation  className="text-2xl mr-2"></GoLocation>{location}</h2>
        <h2 className="flex items-center"><PiCurrencyCircleDollarDuotone className="text-2xl"></PiCurrencyCircleDollarDuotone>{salary}</h2>

      </div>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
  );
};

export default Job;
