// import './index.css';
// import styled from "styled-components"
import style from './Navbar.module.css';

function Navbar(props) {
 const{cartCount} = props
      return (
      <>
      <div className={style.Nav}>
        
      <div className={style.title}>MOVIE APP</div>
        
        <div className={style.CartIconContainer}>
            <img alt="Cart-Icon"
            className={style.cartImg} 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
            />
            <span className={style.CartCount}>{cartCount}</span>
        </div>
      </div>

      </>
      )
    }
  
 
  
  export default Navbar;
  