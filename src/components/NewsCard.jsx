import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsCard(props) {
    return (
        <>
                <Card className='col-sm-3 p-0 m-2'>
                    <Card.Img variant="top" src={props.urlToImage} />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        
                        <Card.Link href={props.url} target="_blank">
                            Read More 
                        </Card.Link>
                    </Card.Body>
                </Card>
        </>
    )
}

NewsCard.defaultProps = {
    urlToImage: '../assets/img/404-img.png',
    title: 'Unable to get title of the News',
    description: 'Unable to get description of the News',
    url: null
}

export default NewsCard