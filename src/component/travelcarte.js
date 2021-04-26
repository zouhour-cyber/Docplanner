
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function TravelCarte(props){
return (
<div className="">
<div className="px-2 mb-3"> 
<Card>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> {props.titre} <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div> 


</div>

)


}


export default TravelCarte