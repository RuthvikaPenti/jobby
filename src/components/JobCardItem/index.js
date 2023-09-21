import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCardItem = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = item

  return (
    <>
      <Link to={`/jobs/${id}`} className="link">
        <li className="job-item">
          <div className="part-container">
            <div className="title-container">
              <img
                className="company-logo"
                src={companyLogoUrl}
                alt="company logo"
              />
              <div className="rating-container">
                <h1 className="heading">{title}</h1>
                <div className="rating-container">
                  <AiFillStar className="icon" />
                  <p className="rating-text">{rating}</p>
                </div>
              </div>
            </div>
            <div className="package-container">
              <div className="type-container">
                <div className="location-container">
                  <MdLocationOn className="location-icon" />
                  <p className="location">{location}</p>
                </div>
                <div className="type-container">
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
          <hr className="hr-line" />
          <div className="part-container">
            <h1 className="description"> Description</h1>
            <p className="para"> {jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobCardItem
