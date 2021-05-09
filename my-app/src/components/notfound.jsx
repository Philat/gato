import React from "react";
import Layout from "./shared/layout";

const Notfound = () => {
    const  style = {
        fontWeight: 'bold',
        textAlign: 'center'
    }

    return (
      <Layout>
          <p style={style}>Unfortunately we cannot find this page</p>
      </Layout>
    );
}

export default Notfound