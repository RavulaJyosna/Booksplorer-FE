import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
const Cards = (props) => {
  console.log(props)
  return (
    
    <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
      {
        
        props.books.map((book) => {
          return (
            <Card style={{width:'350px', margin:'10px', height:'500px'}}>
            <CardImg top width="20%" height="65%" src={book.imageUrls} alt="Card image cap" />
            <CardBody>
              <CardTitle>Title:{book.title}</CardTitle>
              <CardSubtitle>Author:{book.author}</CardSubtitle>
              <CardTitle>Price:  {book.price}</CardTitle>
              {/*<CardSubtitle>{book.category}</CardSubtitle>
              <CardSubtitle>{book.count}</CardSubtitle>
          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
              <Button href="/locatebook">View More</Button>
            </CardBody>
          </Card>
          )
        })
      }

    </div>
  );
};

export default Cards;
