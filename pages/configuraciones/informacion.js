import Tabs from "react-bootstrap/Tabs";
import React from "react";
import DefaultLayout from "components/layouts/DefaultLayout";
import styles from "./Index.module.css";


function Informacion() {
  return (
    <DefaultLayout>
      <div class="container" className={styles.container}>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor "
            class="bi bi-info-circle-fill text-warning"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          Informacion Del Sistema
        </h1>

        <div class="card">

            <h3>
            <img src="logos\amazon_icon.png"></img>
             Amazon</h3>
            <label for="inputPassword5" class="form-label">
              
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control "
              placeholder="Api key Amazon"
              aria-describedby="passwordHelpBlock"
            ></input>

            <h3>
                <img width="80" src="https://seeklogo.com/images/M/mercado-libre-logo-7848A94FE8-seeklogo.com.png"></img>
                
                Mercado Libre</h3>
            <label for="inputPassword5" class="form-label">
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              placeholder="Api key Mercado Libre"
              aria-describedby="passwordHelpBlock"
            ></input>

            <h3>
            <img width="100" src="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg" alt="WooCommerce"></img>
            <br/>WooComerce</h3>
            <label for="inputPassword5" class="form-label">
            </label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              placeholder="Api key WooCommerce"
              aria-describedby="passwordHelpBlock"
            ></input>
          </div>
        </div>

    </DefaultLayout>
  );
}

export default Informacion;
