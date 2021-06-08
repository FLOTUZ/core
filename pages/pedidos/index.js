const { default: DefaultLayout } = require("components/layouts/DefaultLayout");
const { Container, Breadcrumb } = require("react-bootstrap");
import MUIDataTable from "mui-datatables";

function Pedidos() {
<<<<<<< HEAD
    return (
        <div>
            
        </div>
    );
=======
  const columns = ["Nombre de Producto", "Fecha", "Cantidad", "Vendido en "];

  const data = [
    ["Microfono Shure 550L", "13/01/2021", "2", "WooCommerce"],
    ["Proyector Benq MW550", "20/12/2020", "1", "Mercado Libre"],
    ["Teatro 5.0 Wharfeadale  Crystal Cr4.3", "19/12/2020", "3", "Mercado Libre"],
  ];
  const options = {
    filterType: "checkbox",
    textLabels: {
      body: {
        noMatch: "Lo siento,no se encontro",
        toolTip: "Sort",
      },
    }
  };
  return (
    <DefaultLayout>
        <Breadcrumb>
            <Breadcrumb.Item active>
                PEDIDOS 
            </Breadcrumb.Item>
        </Breadcrumb>
      <Container>
        <MUIDataTable
          title={"Lista de Pedidos"}
          data={data}
          columns={columns}
          options={options}
        />
      </Container>
    </DefaultLayout>
  );
>>>>>>> main
}

export default Pedidos;
