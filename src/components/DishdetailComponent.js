import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function RenderDish({dish}) {
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

function RenderComments({comments}) {
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

const DishDetail = (props) => {


    if (props.dish == null) {
        return (<div></div>);
    }

    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments}/>
            </div>
        </div>
    );

}

export default DishDetail;