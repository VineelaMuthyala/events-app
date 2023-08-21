import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    avatarUrl,
    name,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryItemDetails

  return (
    <div className="repository-item-container">
      <img className="rep-item-image" alt={name} src={avatarUrl} />
      <h1 className="rep-item-heading">{name}</h1>
      <div className="rep-item-counts-container">
        <img
          className="counts-images"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
        />
        <p className="counts-text">{starsCount} stars</p>
      </div>
      <div className="rep-item-counts-container">
        <img
          className="counts-images"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
        />
        <p className="counts-text">{forksCount} forks</p>
      </div>
      <div className="rep-item-counts-container">
        <img
          className="counts-images"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
        />
        <p className="counts-text">{issuesCount} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
