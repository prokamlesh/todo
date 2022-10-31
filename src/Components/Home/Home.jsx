import {React , useEffect ,useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import PropTypes from 'prop-types';



const Home = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState)
    
        
    
    return(
        <div>
            <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
    </div>
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ipsam placeat totam magni eos possimus numquam debitis, blanditiis vitae dicta commodi molestiae, magnam error illum corporis ducimus consectetur nihil ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi molestias quis tempora consequatur adipisci dicta numquam error quaerat dolorum esse! Illo, porro. Dignissimos laborum facilis, voluptatem veritatis culpa explicabo suscipit.
        </p>
    </div>
            
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
    );
    
}
export default Home;