import {Card,CardActions,CardMedia,CardContent,Typography,Button} from "@mui/material";
import React, { useEffect, useState } from 'react';

const DataEffect =()=>{
    const[userdata,setUserData]=useState([]);



    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUserData(data));
    },[]);

    const handleClick=()=>{
      setUserData("https://m.media-amazon.com/images/I/71RFdy6y6LL._SY450_.jpg");
    }

    return(
        <div style={{display:"flex",gap:10,flexWrap:"wrap", padding:"40px"}}>
            {userdata.map(item=>(
                <Card sx={{ maxWidth: 400, }} >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  
                  //src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?ga=GA1.1.1491670711.1735317060&semt=ais_hybrid"
                  src="https://m.media-amazon.com/images/I/71RFdy6y6LL._SY450_.jpg"
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     USER  DATA
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      id:{item.id}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    name:{item.name}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    username:{item.username}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    email:{item.email}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                  Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                   geo: Latitude {item.address.geo.lat}, Longitude {item.address.geo.lng}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    phone:{item.phone}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    website:{item.website}  
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    company:{item.company.name}  
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>}>Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            ))}
        </div>
    )
}


export default DataEffect;