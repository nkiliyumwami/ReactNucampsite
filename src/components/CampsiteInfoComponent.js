import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle, CardImg} from 'reactstrap';


  class CampsiteInfo extends Component {
      constructor(props) {
          super(props);
          this.state = {
              campsite: null
          };
      }

      renderCampsite(campsite) {
          return(
              <div className="col-md-5 m-1">
                  <Card>
                    <CardImg top src = {campsite.image} alt = {campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
              </div>
          )
      }
      //Task 3
      renderComments(comments) {
        if(comments){
            return(
                <div className="md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(
                            <div>
                               <p> {comment.text}</p> 
                               <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
        return(
            <div></div>
        )
      }

    render() {
        if(this.props.campsite) {
            return(
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            )
            
            
        } 
            return (
                <div></div>
            )
        }
    }


export default CampsiteInfo;
