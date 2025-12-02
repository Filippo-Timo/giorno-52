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
                    <h2 className="text-center text-light my-5 fw-bold">- - - Articoli spaziali !!! - - -</h2>
                </Col>
            </Row>
            <Row className="justify-content-evenly">
                {articles.map((article) => (
                    <Col xs={3} md={4} key={article.id}>
                        <SingleArticle articleDalleProps={article} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default GetArticles