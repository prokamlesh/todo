import {React , useEffect ,useState } from 'react';
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button, Badge } from "reactstrap";
import { Link ,useNavigate} from "react-router-dom";

const Task = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        

        console.log("USE EFFECT");
        fetch('http://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>{setUsers(json)})
  
  
  

    },[]) 
    
    return(
        <div>
            
            {
              users && users && users.length>0 ? users.map(user => {
            
                return (
                    <div >
                <Card >
                    <CardBody className="d-flex p-5">
                        
                        <CardTitle  tag="p-5">
                         {user.id}
                        </CardTitle>
                        
                        <CardSubtitle className=" p-5"
                        >
                         {user.title}
                         
                        </CardSubtitle>
                        <CardText>
                         {user.userId}
                         {user.completed}
    
                        </CardText>
                        <Button color="danger">
                            Delete
                        </Button>
                        
                    </CardBody>

                </Card>
                
                
                
                
                </div>
                
                );
                }):
        console.log("no display" )


            }
        </div>
    );
    
}
export default Task;