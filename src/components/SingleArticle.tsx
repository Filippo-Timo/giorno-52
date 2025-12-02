import { Card } from 'react-bootstrap'
import { type Article } from '../types/Article'

interface SingleArticleProps {
    articleDalleProps: Article
}

const SingleArticle = function ({ articleDalleProps }: SingleArticleProps) {
    return (
        <Card className="my-3">
            <Card.Img variant="top" src={articleDalleProps.image_url} />
            <Card.Body>
                <Card.Title>{articleDalleProps.title}</Card.Title>
                <Card.Text>{articleDalleProps.summary}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleArticle