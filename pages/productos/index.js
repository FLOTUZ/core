import Head from "next/head";
import NavBar from "@common/NavBar";
import React from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import DefaultLayout from "components/layouts/DefaultLayout";

function Productos() {
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <DefaultLayout>
      <Head>
        <title> Productos </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="Title" title="Productos">
        Productos
      </h1>

      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </DefaultLayout>
  );
}

export default Productos;
