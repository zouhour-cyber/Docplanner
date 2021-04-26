import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Countries(){
    return(
      <div> 
<div className="row mb-3">

<div className="col-md-4 col-12"> 
<Card >
  <Card.Img variant="top" src="/warsaw.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> warsaw <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div>
<div className="col-md-4 col-12"> 
<Card >
  <Card.Img variant="top" src="/barcelona.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> warsaw <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button></span>
  </div>
  </Card.Body>
</Card>


</div>
<div className="col-md-4 col-12"> 
<Card >
  <Card.Img variant="top" src="/istanbul.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> warsaw <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button></span>
  </div>
  </Card.Body>
</Card>


</div>

</div>
<div className="row mb-3">
<div className="col-md-4 col-12"> 
<Card style={{width: '100%'  }}>
  <Card.Img variant="top" src="/rome.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> Rome <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div>
<div className="col-md-4 col-12"> 
<Card style={{width: '100%'  }}>
  <Card.Img variant="top" src="/bologna.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> Bologna <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div>
<div className="col-md-4 col-12"> 
<Card style={{width: '100%'  }}>
  <Card.Img variant="top" src="/curitiba.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> Curtibia <span> <Button className="btn-sm" variant="primary">SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div>
</div>

<div className="row">
<div className="col-md-4 col-12"> 
<Card style={{width: '100%'  }}>
  <Card.Img variant="top" src="/mexico-city.png" />
  <Card.Body>
   
  <div className="d-flex justify-content-between"> Mexico city <span> <Button className="btn-sm" className="btn-sm" variant="primary"> SEE OPNINGS</Button> </span>
  </div>
  </Card.Body>
</Card>


</div>

</div>

</div>
        );
    }
    
export default Countries;