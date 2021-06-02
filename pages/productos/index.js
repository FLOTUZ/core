import Head from "next/head";
import NavBar from "@common/NavBar";
import React from 'react';
import  MDBDataTable  from 'mdbreact';
import { Button, Breadcrumb } from "react-bootstrap";

function Productos() {
  const DatatablePage = () => {
    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Position',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Office',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170'
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          date: '2009/01/12',
          salary: '$86'
        },
        {
          name: 'Donna Snider',
          position: 'Customer Support',
          office: 'New York',
          age: '27',
          date: '2011/01/25',
          salary: '$112'
        }
      ]
    };

    return (
      <MDBDataTable
        striped
        bordered
        hover
        data={data}
      />
    );

  }
  return (
    <div>
      <Head>
        <title> Productos </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Breadcrumb>
        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="Title" title="Productos">
        Productos
      </h1>
      <form busqueda>
        <input type="text" placeholder="Buscar..." />
        <Button variant="contained" color="default" size="lg">
          Descargar Excel{" "}
        </Button>
      </form>
      <DatatablePage/>
    </div>
    
  );
  
}

export default Productos;
