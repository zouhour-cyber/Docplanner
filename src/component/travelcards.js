import TravelCarte from './travelcarte.js';


const Traveltab =[
 {title:"Warsaw",img:"./warsaw.png" },
 {title:"Barcelona" , img:"./barcelona.png"},
 {title:"Istanbul",img:"./istanbul.png"},
 {title:"Rome", img:"./rome.png"},
 {title:"Bologna", img:"./bologna.png"},
 {title:"Curtibia",img:"./curitiba.png"},
 {title:"Mexico City", img:"mexico-city.png"}
     
]


function TravelCards(){
    return(
        <div>
<div className="row d-flex flex-wrap justify-content-between" >
{
    Traveltab.map(el =>
    <div>
<TravelCarte titre={el.title} img={el.img} />
    
    </div>)
}

</div>
</div>

    )
}

export default TravelCards