import Head from "next/head";
import React, { useState } from "react";
import { Button, Breadcrumb } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import Papa from "papaparse";
import Link from "next/link";


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


      <Breadcrumb>
        <Breadcrumb.Item active>Productos</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <Link href="/productos/importar" style={{border: "solid"}}><Button>Importar CSV</Button></Link>
      </div>

      <br/>

      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}/>

        
    </>
  );
}


function Temp(){
  const [csv, setCsv] = useState(null);

  const subirCsv=e=>{
    setCsv(e);
  }

  const imprimir=()=>{
    console.log(csv[0]);

    Papa.parse(csv[0], {
      complete: function(results) {
        console.log(results);
      }
    });
  }
  
  return(
    <div>
      <input variant="outline-warning" type="file" name="files" multiple onChange={(e)=>subirCsv(e.target.files)} />      
      <Button variant="outline-success" onClick={()=>imprimir()} >Subir </Button>
    </div>
    
  );
  
}


export default Productos;
