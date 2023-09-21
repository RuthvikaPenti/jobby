import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          className="image"
          alt="not found"
        />
      </div>
      <h1 className="heading"> Page Not Found</h1>
      <p className="found-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
