import React from 'react'
import './Article.css'
import LinesEllipsis from 'react-lines-ellipsis'

class Article extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.onClick(this.props.idx)
  }
  render() {
    return (
      <div className="article">
       <h1 className="title">{this.props.title}</h1>
        <p className="image"><img src={this.props.image} alt="books" width="500"/></p>
        <p className="author">{this.props.author} ({this.props.like})
        <button onClick={this.handleClick}>Like</button>
        </p>
        <p className="content">
        <LinesEllipsis 
            text={this.props.content}
            maxLine='5'
            ellipsis='...'
            trimRight
          /></p>
      </div>
    )
  }
}

export default Article
