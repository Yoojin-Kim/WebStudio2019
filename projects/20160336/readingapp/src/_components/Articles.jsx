import React from 'react'
import Article from './Article'
import './Articles.css'

class Articles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          title: "About Time",
          author: "Number One",
          image:"https://pmcvariety.files.wordpress.com/2013/08/abouttime.jpg?w=1000&h=563&crop=1",
          content: "At the age of 21, Tim Lake (Domhnall Gleeson) discovers he can travel in time. The night after another unsatisfactory New Year party, Tim's father (Bill Nighy) tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life-so he decides to make his world a better place...by getting a girlfriend. Sadly, that turns out not to be as easy as you might think. Moving from the Cornwall coast to London to train as a lawyer, Tim finally meets the beautiful but insecure Mary (Rachel McAdams). They fall in love, then an unfortunate time-travel incident means he's never met her at all. So they meet for the first time again-and again-but finally, after a lot of cunning time-traveling, he wins her heart. Tim then uses his power to create the perfect romantic proposal, to save his wedding from the worst best-man speeches, to save his best friend from professional disaster and to get his pregnant wife to the hospital in time for the birth of their daughter, despite a nasty traffic jam outside Abbey Road. But as his unusual life progresses, Tim finds out that his unique gift can't save him from the sorrows and ups and downs that affect all families, everywhere. There are great limits to what time travel can achieve, and it can be dangerous too.",
          like: 0
        },
        {
          title: "SHERLOCK HOLMES",
          author: "Number Two",
          image: "https://static.rogerebert.com/uploads/review/primary_image/reviews/sherlock-holmes-2009/hero_EB20091223REVIEWS912239991AR.jpg",
          content: "With the arrest of Lord Blackwood, Sherlock Holmes and Dr. John Watson believe they have stopped one of London's most dangerous killers, responsible for five deaths and about to commit a sixth when he is apprehended. Several months later he is hanged for his crimes but rumors begin to circulate that he is in fact still alive, having used managed and the black arts to escape society's judgment. When they disinter his remains, they find the body of another man in the coffin. Soon, all of London is atwitter with the news that Blackwood has risen from the dead and for some, he is the devil incarnate. With the assistance of the very capable Irene Adler, Holmes and Watson must stop Blackwood before he can initiate his master plan: the takeover of the British government and eventually, world domination.",
          like: 0
        },
        {
          title: "SHERLOCK HOLMES 2",
          author: "Number Three",
          image:"https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2011/12/16/1324067020098/sherlock-holmes-game-shad-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=d68b04ebb84a19d496c271f6c7ff7980",
          content: "After finally catching serial killer and occult sorcerer Lord Blackwood, legendary sleuth Sherlock Holmes and his assistant Dr. Watson can close yet another successful case. But when Blackwood mysteriously returns from the grave and resumes his killing spree, Holmes must take up the hunt once again. Contending with his partner's new fiancée and the dimwitted head of Scotland Yard, the dauntless detective must unravel the clues that will lead him into a twisted web of murder, deceit, and black magic - and the deadly embrace of temptress Irene Adler.",
          like: 0
        }
      ]
    }
    this.handleLike = this.handleLike.bind(this)
    fetch('http://127.0.0.1:5000/api/users')
       .then(response => {
         response.json().then(rsp=> {
          	this.setState({ articles: rsp })
          })
        })
  }
  handleLike(idx) {
    let nextStateArticle = [...this.state.articles]
    nextStateArticle[idx].like = nextStateArticle[idx].like + 1
    this.setState({
      articles: nextStateArticle
    })
  }
  render() {
    return (
      <div className="article-container">
      {this.state.articles &&
        this.state.articles.map((article, idx) => (
          <Article 
            title={article.title}
            author={article.author}
            image={article.image}
            content={article.content}
            like={article.like}
            key={idx}
            idx={idx}
            onClick={this.handleLike}
          />
        ))
      }
      </div>
    )
  }
}

export default Articles