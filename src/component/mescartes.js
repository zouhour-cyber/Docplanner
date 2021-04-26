import Carte from './carte.js';


const tabCartes =[
 {title:"For patients",desc:"Find a doctor, book a visit and solve any health-related doubt" ,select:"Choose a country" , style:{width: '17rem',height:'18rem',backgroundColor: '#00b39b'} },
 {title:"For doctors",desc:"Save time managing visits and cut no-shows by half ", select:"Choose a country",style:{width: '17rem',height:'18rem',backgroundColor: '#3d83df'}},
 {title:"For clincs", desc:"Deliver an exceptional patient experience in your clinic" ,select:"2 to 20 specialist",style:{width: '17rem',height:'18rem', backgroundColor: '#1b2734'} }
]

function MesCartes(){
    return(
<div>
<div className="row d-flex"> 
{ tabCartes.map(el => 
<div> 
    <Carte style={el.style} titre={el.title} description={el.desc} selection={el.select} />
</div>
)
}

</div>
</div>

    )
}


export default MesCartes;