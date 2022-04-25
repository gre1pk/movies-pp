import { Card, Typography, Tag, Rate } from 'antd'
import './Movie-item.css'

import { GenresConsumer } from '../Genres-context'

function MovieItem({ title, releaseDate, posterPath, overview, voteAverage, movieGenre }) {
  const { Text, Title } = Typography

  const colorReiting = (reit) => {
    if (reit > 7) {
      return 'max'
    }
    if (reit > 5) {
      return 'norm'
    }

    if (reit > 3) {
      return 'poor'
    }
    return 'low'
  }

  const generis = (genresId, movieGenreList) => {
    const element = movieGenreList.map((id) => {
      const re = genresId.filter((el) => el.id === id)
      return (
        <Tag key={id} size="small">
          {re[0].name}
        </Tag>
      )
    })
    return element
  }

  return (
    <Card className="card">
      <div className="card__img">
        <img alt={`poster ${title}`} src={`https://image.tmdb.org/t/p/w500/${posterPath} `} />
      </div>
      <div className="card__content">
        <div className="card__header">
          <Title level={4} className="card__movie-title">
            {title}
          </Title>
          <div className={`card__reiting ${colorReiting(voteAverage)}`}>{voteAverage}</div>
        </div>
        <Text type="secondary" className="card__release-date">
          {releaseDate}
        </Text>
        <div className="div">
          <GenresConsumer>{(genresId) => generis(genresId, movieGenre)}</GenresConsumer>
        </div>
        <Text className="card__overview">{overview}</Text>
        <Rate className="card__rate" value={2} />
      </div>
    </Card>
  )
}

export default MovieItem
