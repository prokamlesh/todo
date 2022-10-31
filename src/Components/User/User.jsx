import {React , useEffect ,useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';

const User = () => {
    return(
        <div className="d-flex p-5">
            <Form  >
  <FormGroup>
    <Label for="username">
      User Name
    </Label>
    <Input
      id="username"
      name="username"
      
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="newpassword">
      New Password
    </Label>
    <Input
      id="newpassword"
      name="newpassword"
      
      type="password"
    />
  </FormGroup>
  <FormGroup className='p-4'>
  <Button  color="primary" >
                            Save Password
                        </Button>
                        <FormGroup>
  <Button  color="primary">
                            Logout
                        </Button>
  </FormGroup>
  </FormGroup>
  </Form>
        </div>
    )

}

export default User;
