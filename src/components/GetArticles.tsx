import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleArticle from './SingleArticle'
import { type Article } from '../types/Article'


const URL = 'https://api.spaceflightnewsapi.net/v4/articles/'

const GetArticles = function () {
    const [articles, setArticles] = useState<Article[]>([]);


    const getArticles = () => {
        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Problema con il recupero dati')
                }
            })
            .then((articles) => {
                console.log("Questi sono gli articles:", articles)
                setArticles(articles.results)
            })
            .catch((err) => {
                console.log('ERRORE', err)
            })
    }


    useEffect(() => {
        getArticles()
    }, [])


    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <h2 className="text-center">Articoli spaziali!!!</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {articles.map((article) => (
                    <Col xs={3} md={4}>
                        <SingleArticle articleDalleProps={article} key={article.id} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default GetArticles