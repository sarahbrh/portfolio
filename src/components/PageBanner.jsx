import bannerImg from '../assets/images/banner.jpg'

function PageBanner() {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    ></div>
  )
}

export default PageBanner