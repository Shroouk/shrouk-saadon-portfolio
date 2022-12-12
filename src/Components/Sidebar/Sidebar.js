import React from 'react'; 
import { Link , NavLink} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

import styled, { css } from 'styled-components';

const Container = styled.div`
position: fixed;
z-index:1001;
${'' /* .active {
  border-right: 4px solid var(--purplecolor);
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
  }
} */}
`;

const Button = styled.button`
background-color: var(--background);
border: none;
width: 2.5rem;
height: 2.5rem;
border-radius: 50%;
margin: 0.5rem 0 0 0.5rem;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
position: relative;
color:transparent;
&::before,
&::after {
  content: "";
  background-color: var(--bg);
  height: 2px;
  width: 1rem;
  position: absolute;
  transition: all 0.3s ease;
}
&::before {
  top: ${(props) => (props.clicked ? "1.5" : "1rem")};
  transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
&::after {
  top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
  transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
`;

const SidebarContainer = styled.div`
background-color: var(--background);
width: 3.5rem;
height: 80vh;
margin-top: 1rem;
border-radius: 0 30px 30px 0;
padding: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
position: relative;

`;

const Logo = styled.div`
${'' /* width: 2rem; */}
color:var(--bg);
svg {
  
  width: 100%;
  height: auto;
}
`;

const SlickBar = styled.ul`
color: var(--bg);
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--background);
padding: 2rem 0;
position: absolute;
top: 6rem;
left: 0;
width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
transition: all 0.5s ease;
border-radius: 0 30px 30px 0;
`;

const Item = styled.a`
text-decoration: none;
color: var(--bg);
width: 100%;
padding: 1rem 0;
cursor: pointer;
display: flex;
padding-left: 1rem;
&:hover {
  color: var(--purplecolor);
  border-right: 4px solid var(--purplecolor);
  svg {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
  }
}
svg {
  width: 1.2rem;
  height: auto;
  filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
    brightness(78%) contrast(85%);
}
`;

const Text = styled.span`
width: ${(props) => (props.clicked ? "100%" : "0")};
overflow: hidden;
margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
transition: all 0.3s ease;
`;

const Profile = styled.div`
width: ${(props) => (props.clicked ? "14rem" : "3rem")};
height: 3rem;
padding: 0.5rem 0.25rem;
/* border: 2px solid var(--white); */
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
background-color: var(--background);
color: var(--bg);
transition: all 0.3s ease;
.icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--grey);
    padding: 2px;
  }
}
`;

const Details = styled.div`
display: ${(props) => (props.clicked ? "flex" : "none")};
justify-content: space-between;
align-items: center;
`;

const Name = styled.div`
padding: 0 1.5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h4 {
  display: inline-block;
}
a {
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--grey);
  &:hover {
    text-decoration: underline;
  }
}
`;

const Logout = styled.button`
border: none;
width: 2rem;
height: 2rem;
background-color: transparent;
svg {
  width: 100%;
  height: auto;
  filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
    brightness(100%) contrast(126%);
  transition: all 0.3s ease;
  &:hover {
    border: none;
    padding: 0;
    opacity: 0.5;
  }
}
`;

const Sidebar = () => {

  const navigate = useNavigate();

const [click, setClick] = React.useState(false);
const handleClick = () => setClick(!click);

const [profileClick, setprofileClick] = React.useState(false);
const handleProfileClick = () => setprofileClick(!profileClick);

const [profileClick2, setprofileClick2] = React.useState(false);
const handleProfileClick2 = () => setprofileClick2(!profileClick2);


const clickLink = (page)=>{
  console.log("hh")
  navigate(page)
}
return (
  <Container>
    <Button clicked={click} onClick={() => handleClick()}>
      Click
    </Button>
    <SidebarContainer>
      <Logo>
        {/* <h2>SH</h2> */}
        <img src='./assests/shrouksaadon.jpeg' width='50px' className="rounded-circle"/>
      </Logo>
      <SlickBar clicked={click}>


        <NavLink 
        className='link'
          onClick={() => setClick(false)}
          activeclassname="active"
          end to="/"
        >
<svg viewBox="0 0 576 512" width="100" title="home">
<path  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
</svg>
          <Text clicked={click}>Home</Text>
        </NavLink>
        <NavLink 
        className='link'
          onClick={() => setClick(false)}
          activeclassname="active"
          to="/skills"
        >
    <svg viewBox="0 0 512 512" width="100" title="book-reader">
<path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z" />
</svg>
          <Text clicked={click} >Skills</Text>
        </NavLink>
        <NavLink 
        className='link'
          onClick={() =>  setClick(false)}
          activeclassname="active"
          to="/projects"
        >
        <svg viewBox="0 0 448 512" width="100" title="paperclip">
        <path d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z" />
        </svg>
          <Text clicked={click}>Projects</Text>
        </NavLink>
        <NavLink 
        className='link'
          onClick={() => setClick(false)}
          activeclassname="active"
          to="/experiences"
        >


        <svg viewBox="0 0 640 512" width="100" title="user-clock">
        <path d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
        </svg>
          <Text clicked={click}>Experiences</Text>
        </NavLink>

        <NavLink 
        className='link'
          onClick={() => setClick(false)}
          activeclassname="active"
          to="/feedback"
        >


        <svg viewBox="0 0 640 512" width="100" title="user-clock">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
        </svg>
          <Text clicked={click}>Feedback</Text>
        </NavLink>


        
      </SlickBar>
<div>
    
<Profile clicked={profileClick}>
        
        <svg width="55px" height="55px" viewBox="0 0 55 55" onClick={() => handleProfileClick()}><path fill="#706aec" fillRule="evenodd" d="M27.498 2.292C13.579 2.292 2.292 13.578 2.292 27.501C2.292 38.638 9.514 48.086 19.531 51.419C20.792 51.651 21.252 50.873 21.252 50.204C21.252 49.607 21.23 48.021 21.218 45.918C14.206 47.441 12.727 42.538 12.727 42.538C11.58 39.626 9.927 38.85 9.927 38.85C7.638 37.287 10.1 37.318 10.1 37.318C12.631 37.496 13.962 39.917 13.962 39.917C16.21 43.768 19.862 42.656 21.298 42.01C21.527 40.382 22.179 39.271 22.898 38.641C17.301 38.005 11.416 35.842 11.416 26.182C11.416 23.431 12.399 21.179 14.011 19.418C13.751 18.781 12.886 16.216 14.259 12.747C14.259 12.747 16.374 12.069 21.19 15.331C23.2 14.771 25.357 14.492 27.501 14.482C29.643 14.492 31.798 14.771 33.812 15.331C38.624 12.069 40.737 12.747 40.737 12.747C42.113 16.216 41.247 18.781 40.989 19.418C42.605 21.179 43.579 23.431 43.579 26.182C43.579 35.867 37.685 37.998 32.071 38.621C32.974 39.4 33.781 40.938 33.781 43.29C33.781 46.659 33.75 49.378 33.75 50.204C33.75 50.879 34.205 51.664 35.483 51.418C45.492 48.077 52.708 38.635 52.708 27.501C52.708 13.578 41.421 2.292 27.498 2.292"/></svg>
        <Details clicked={profileClick}>
          <Name>
           
            <a href="https://github.com/Shroouk" target="_blank">view&nbsp;profile</a>
          </Name>

        
        </Details>
      </Profile>

      <Profile clicked={profileClick2}>
      
        <svg width="55px" height="55px" viewBox="0 0 55 55"  onClick={() => handleProfileClick2()}><path fill="#706aec" d="M27.5 1.1C12.92 1.1 1.1 12.92 1.1 27.5s11.819 26.4 26.4 26.4 26.4 -11.819 26.4 -26.4S42.081 1.1 27.5 1.1zM21.038 38.442H15.692V21.238H21.038v17.204zm-2.706 -19.316c-1.688 0 -2.78 -1.196 -2.78 -2.676 0 -1.51 1.125 -2.67 2.849 -2.67s2.78 1.16 2.813 2.67c0 1.48 -1.089 2.676 -2.882 2.676zm22.231 19.316h-5.346v-9.534c0 -2.219 -0.775 -3.726 -2.709 -3.726 -1.477 0 -2.354 1.02 -2.742 2.002 -0.143 0.349 -0.179 0.844 -0.179 1.337v9.919H24.239v-11.715c0 -2.148 -0.069 -3.943 -0.14 -5.489h4.645l0.245 2.39h0.107c0.704 -1.122 2.428 -2.777 5.313 -2.777 3.517 0 6.154 2.357 6.154 7.422v10.172z"/></svg>

              <Details clicked={profileClick2}>
          <Name>
           
            <a href="https://www.linkedin.com/in/shrouk-saadon/" target="_blank">view&nbsp;profile</a>
          </Name>

        
        </Details>
      </Profile>
</div>
    

    </SidebarContainer>
  </Container>
);
};

export default Sidebar;