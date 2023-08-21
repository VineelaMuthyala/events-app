import './index.css'

const LanguageFilterItem = props => {
  const {languagesList, languageSelectedClicked, isSelected} = props
  const {language, id} = languagesList

  const buttonClass = isSelected ? 'blue lang-button' : 'lang-button'
  const onClickLanguage = () => {
    languageSelectedClicked(id)
  }

  return (
    <button className={buttonClass} type="button" onClick={onClickLanguage}>
      {language}
    </button>
  )
}
export default LanguageFilterItem
