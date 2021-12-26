import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {

        if (comments != null) {
            const listOfComments = comments.map((comment) => {
                return (
                    <div>
                        <p key={comment.id}>
                            {comment.comment}
                        </p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('pt-BR', {
                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                        }).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {listOfComments}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {

        const dishInfo = this.props.dish;

        if (dishInfo == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dishInfo);
        const dishComments = this.renderComments(dishInfo.comments);

        return (
            <div className="container">
                <div className="row">
                    {dishItem}
                    {dishComments}
                </div>
            </div>
        );
    }
}

export default DishDetail;