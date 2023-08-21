import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repositoryList: [], isLoading: true, selectedLanguageId: 'ALL'}

  componentDidMount() {
    this.getRepositoryItems()
  }

  getRepositoryItems = async () => {
    const {selectedLanguageId} = this.state
    this.setState({isLoading: true})
    const apiUrl = `https://apis.ccbp.in/popular-repos?language= ${selectedLanguageId}`
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState(
      {repositoryList: updatedData, isLoading: false},
      this.renderRepositoryList,
    )
  }

  languageSelectedClicked = id => {
    this.setState({selectedLanguageId: id}, this.getRepositoryItems)
  }

  renderRepositoryList = () => {
    const {repositoryList} = this.state

    return (
      <div className="ul-repository-item-container">
        {repositoryList.map(eachItem => (
          <RepositoryItem key={eachItem.id} repositoryItemDetails={eachItem} />
        ))}
      </div>
    )
  }

  renderIsLoading = () => (
    <Loader type="ThreeDots" color="#0284c7" height={80} width={80} data-testid="loader"/>
  )

  render() {
    const {isLoading, selectedLanguageId} = this.state
    return (
      <div className="github-container">
        <h1 className="popular-heading">Popular</h1>
        <ul>
          <li className="languages-container">
            {languageFiltersData.map(eachItem => (
              <LanguageFilterItem
                key={eachItem.id}
                languagesList={eachItem}
                languageSelectedClicked={this.languageSelectedClicked}
                isSelected={eachItem.id === selectedLanguageId}
              />
            ))}
          </li>
          <li className="items-container">
            {isLoading ? this.renderIsLoading() : this.renderRepositoryList()}
          </li>
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
