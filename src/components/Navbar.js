import AppBar from '@mui/material/AppBar';
import {Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom'

const Header=styled(AppBar)`
background:black;
`

const Tabs=styled(NavLink)`
   font-size:20px;
   margin-right:20px;
   color:inherit;
   text-decoration:none;
`
function Navbar(){
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Dashboard</Tabs>  {/* navigate the link */}
                <Tabs to='/all'>All User</Tabs>
                <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}
export default Navbar