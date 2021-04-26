import {Card} from 'react-bootstrap';

function Carte(props){
    return(
<div>
<div className=""> 
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
     <div className="d-flex selection mt-5"> 
     
     
     
     <select  name="country" id="country">
    <option value="Choose a country" > Choose a country</option>
    <option value="Argentina">Argentina</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Itali">Itali</option>
    <option value="Mexico">Mexico</option>
    <option value="Spain">Spain</option>
    <option value="Turquie">Turquie</option>
    {props.selection}


  </select>
     
     
     
     
     
     </div> 
   
    </Card.Body>
  </Card>
  </div>


</div>





    )
}

export default Carte