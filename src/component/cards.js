import {Card} from 'react-bootstrap';
import carte from './component/carte.js';

function Cards(){
    return(
<div className="row d-flex justify-content-around my-5"> 
<div className="col-md-3 col-12 mx-auto"> 
<Card className="" border="light" text="light"style={{ width: '17rem',height:'18rem',backgroundColor:'#00b39b'}}>
   
    <Card.Body>
  
      <Card.Title>  <img
        src="/icon-patients.svg"
        max-width="100%"
        height="auto"
        className="align-top"
        alt="React Bootstrap logo"
      /> <div className="title-card"> For patients
           </div>
      </Card.Title>
      <Card.Text >
      <h5>Find a doctor, book a visit and solve any health-related doubt </h5>
      </Card.Text>
     <a className="d-flex align-item-end"> 
     
     
     Choose a country</a> 
    </Card.Body>
  </Card>
  </div>
  <div className="col-md-3 col-12 mx-auto"> 
<Card className="" text="light"style={{  width: '17rem',height:'18rem' ,backgroundColor:'#3d83df'}}>
   
    <Card.Body>
      <Card.Title><img
        src="/icon-doctors.svg"
        max-width="100%"
        height="auto"
        className="align-top"
        alt="React Bootstrap logo"
      /> <div className="title-card"> For doctors 
           </div></Card.Title>
      <Card.Text >
   <h5>  Save time managing visits and cut no-shows by half </h5> 
      </Card.Text>
      <a> Choose a country </a>
    </Card.Body>
  </Card>
  </div>
  <div className="col-md-3 col-12 mx-auto"> 
<Card className="" text="light" style={{ width: '17rem',height:'18rem' ,backgroundColor:'#1b2734'}}>
   
    <Card.Body>
      <Card.Title> <img
        src="/icon-clinics.svg"
        max-width="100%"
        height="auto"
        className="align-top"
        alt="React Bootstrap logo"
      /> <div className="title-card">  For clinics 
           </div></Card.Title>
      <Card.Text >
    <h5> Deliver an exceptional patient experience in your clinic </h5> 

      </Card.Text>
      <a> 2 to 20specialist</a>
      <a> More than 20 specialist </a>
    </Card.Body>
  </Card>
  </div>

</div>



    );
}

export default Cards;