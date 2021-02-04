import React from 'react'
import logo from "./../images/icons/icon.png";
import "./../App.scss";
import Button from './../modules/button';

export default function Header(props) {
    
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

    return (
        <>
          <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-top"/>
      Bootstrap
    </a>
  </div>
</nav>
        </>
    )
}
