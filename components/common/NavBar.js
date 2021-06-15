import styles from "./NavBar.module.css";
import Link from "next/link";

import { useState } from "react";
import {
  FiActivity,
  FiTag,
  FiPackage,
  FiArrowLeft,
  FiArrowRight,
  FiSettings,
} from "react-icons/fi";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import {useRouter} from "next/router"

function NavBar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()

  
  //Aca pon la ruta como un objeto
  let rutas = [
    {
      key: 1,
      icon: <FiActivity />,
      name: "Dashboard",
      route: "/Dashboard",
      subroutes: [],
    },
    {
      key: 2,
      icon: <FiPackage />,
      name: "Productos",
      route: "/productos",
      subroutes: [
        {
          key: 1,
          name: "Productos",
          route: "/productos",
        },
        {
          key: 2,
          name: "Detalles",
          route: "/productos/detalles",
        },
      ],
    },
    {
      key: 3,
      icon: <FiTag />,
      name: "Pedidos",
      route: "/pedidos",
      subroutes: [],
    },
  ];
  return (
    <ProSidebar collapsed={collapsed} width="200px" className={styles.proSideBar}>
      <Menu iconShape="square">
        {/*Recorremos la lista de rutas*/}
        {rutas.map((r) => {
          {
            /* si la lista de rutas esta vacia retorna un MenuItem*/
          }
          if (r.subroutes.length === 0) {
            return (
              <MenuItem key={r.key} icon={r.icon}>
                <Link href={r.route}>
                  <a>{r.name}</a>
                </Link>
              </MenuItem>
            );
            {
              /*Si la lista no esta vacia retorna un SubMenu*/
            }
          } else {
            return (
              <SubMenu key={r.key} title={r.name} icon={r.icon}>
                {r.subroutes.map((sr) => {
                  return (
                    <MenuItem key={sr.key}>
                      <Link key={sr.key} href={sr.route}>
                        <a>{sr.name}</a>
                      </Link>
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>

      <SidebarFooter>
        {/*Boton para colapsar menu */}
        <button
          className={styles.button}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? (
            <FiArrowRight color={"white"} />
          ) : (
            <FiArrowLeft color={"white"} />
          )}
        </button>

        {/* Boton de configuracion*/}
        <button className={styles.button} onClick={()=>{router.push("/configuraciones")}} >
          <FiSettings color={"white"} />
        </button>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default NavBar;
