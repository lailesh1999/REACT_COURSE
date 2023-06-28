
  const Title =() => (
    <a href="/">  
        <img className="logo" alt="logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33-768x591.png"></img>
    </a>
);

 const Header = () =>{
        return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACTS</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );
};   

export default Header;
