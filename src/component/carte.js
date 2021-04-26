import {Card} from 'react-bootstrap';

function Carte(props){
    return(
<div>
<div className="col-md-3 col-12 mx-auto"> 
<Card className="" border="light" text="light" style={props.style}>
   
    <Card.Body>
  
      <Card.Title>  <img
        src="/icon-patients.svg"
        max-width="100%"
        height="auto"
        className="align-top"
        alt="React Bootstrap logo"
      /> <div className="title-card"> {props.titre}
           </div>
      </Card.Title>
      <Card.Text >
      <h5> {props.description}</h5> </Card.Text>
     <div className="d-flex mt-5"> 
     
     
     {props.selection}</div> 
    </Card.Body>
  </Card>
  </div>


</div>





    )
}

export default Carte