import React from "react";
import Layout from "./shared/layout";

const Notfound = () => {
    const  style = {
        fontWeight: 'bold',
        textAlign: 'center'
    }

    return (
      <Layout>
          <p style={style}>К Сожалению, мы не нашли эту страницу</p>
      </Layout>
    );
}

export default Notfound