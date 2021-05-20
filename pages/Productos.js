import Head from "next/head";
import NavBar from "@common/NavBar";
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'

function Productos() {
    return (
        <div>
            <Head>
                <title> Productos </title>
                <meta
                    name="Core es un administrador productos en tiendas online"
                    content="CORE Admin"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <h1 class="Title" title="Productos">Productos</h1>
            <form busqueda>
                <input type="text" placeholder="Buscar..." />
                <Button variant="contained"
                    color="default" size="lg">Descargar Excel  </Button>
            </form>
            <Table striped bordered hover>
                <thead>
                    <p>Todos</p>
                    <tr>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Inventario</th>
                        <th>Publicado en..</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Par De Bocinas Yamaha NS-WA150 Blancas</td>
                        <td>$550</td>
                        <td>2</td>
                        <td>AMAZON</td>
                    </tr>
                    <tr>
                        <td>Proyector Benq MW550</td>
                        <td>$10,550</td>
                        <td>15</td>
                        <td>TODOS</td>
                    </tr>
                    <tr>
                        <td>Teatro 5.0 Wharfedale Crystal Cr4.3</td>
                        <td>$2,300</td>
                        <td>4</td>
                        <td>MERCADO LIBRE</td>
                    </tr>
                    <Pagination size="sm">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
                </tbody>
               
            </Table>

        </div>
    );
}

export default Productos;