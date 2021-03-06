import React from "react";

import { useSelector } from "react-redux";

const Home = () => {
  const login = useSelector((state) => state.isLogged);

  return (
    <div>
      {login ? (
        <p>
          ImmunifyMe is a cloud-based eco-system complete with a web interface,
          Mobile App and a Smart Card. We target to improve vaccination
          monitoring and surveillance systems to ensure up-to-date data critical
          to close the existing immunization gap. Individuals who rely on the
          medical system may find themselves in a dire situation: the most
          critical information about health and quality of life is the data
          which should guide future treatment that many healthcare providers
          can’t access right now. Monitoring data at subnational levels and
          reaching
        </p>
      ) : (
        <h2 className="msg">Content Hidden! Log in to see the content!</h2>
      )}
      <br />
      <br />
    </div>
  );
};

export default Home;
