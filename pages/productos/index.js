import Head from "next/head";
import React, { useState } from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import MUIDataTable from "mui-datatables";

function Productos() {
  const columns = ["Nombre", "Precio", "En Inventario", "Publicado en"];

  const data = [
    ["Par De Bocinas Yamaha NS-WA150 Blancas", "$550", "2", "Todos"],
    ["Proyector Benq MW550", "$10,550", "10", "Mercado Libre"],
    [
      "Teatro 5.0 Wharfedale Crystal Cr4.3",
      "$2300",
      "4",
      "Mercado Libre, Amazon",
    ],
    ["Micrófono Shure 550L", "$3100", "20", "Todos"],
    ["Par De Bocinas Yamaha NS-WA150 Blancas", "$550", "31", "Todos"],
    ["Proyector Benq MW550", "$10,550", "12", "Mercado Libre"],
    [
      "Teatro 5.0 Wharfedale Crystal Cr4.3",
      "$2300",
      "2",
      "Mercado Libre, Amazon",
    ],
    ["Micrófono Shure 550L", "$3100", "1", "Todos"],
    ["Par De Bocinas Yamaha NS-WA150 Blancas", "$550", "5", "Todos"],
    ["Proyector Benq MW550", "$10,550", "2", "Mercado Libre"],
    [
      "Teatro 5.0 Wharfedale Crystal Cr4.3",
      "$2300",
      "1",
      "Mercado Libre, Amazon",
    ],
    ["Micrófono Shure 550L", "$3100", "4", "Todos"],
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <>
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

      <Temp/>

      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
}


function Temp(){
  const [csv, setCsv] = useState(null);

  const subirCsv=e=>{
    setCsv(e);
  }

  const imprimir=()=>{
    console.log(csv);
  }
  
  return(
    <div>
      <input type="file" name="files" multiple onChange={(e)=>subirCsv(e.target.files)} />
      <button onClick={()=>imprimir()} >Subir</button>
    </div>
  );
}


export default Productos;
