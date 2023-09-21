import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="li-container">
      <div className="title-container">
        <img
          className="job-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="rating-container">
          <h1 className="heading">{title}</h1>
          <div className="container">
            <AiFillStar className="job-icon" />
            <p className="rating-job"> {rating} </p>
          </div>
        </div>
      </div>
      <div className="job-container">
        <h1 className="job-heading">Description</h1>
        <p className="job-para">{jobDescription}</p>
      </div>
      <div className="type-container">
        <div className="container">
          <MdLocationOn className="job-icon" />
          <p className="location-job">{location}</p>
        </div>
        <div className="type-container">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
