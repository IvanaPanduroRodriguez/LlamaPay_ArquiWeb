
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/registro"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/categorias"
  },
  {
    "renderMode": 0,
    "route": "/categorias/insertarcategoria"
  },
  {
    "renderMode": 0,
    "route": "/categorias/ediciones/*"
  },
  {
    "renderMode": 2,
    "route": "/servicios"
  },
  {
    "renderMode": 0,
    "route": "/servicios/insertarservicio"
  },
  {
    "renderMode": 0,
    "route": "/servicios/ediciones/*"
  },
  {
    "renderMode": 2,
    "route": "/metodopagos"
  },
  {
    "renderMode": 0,
    "route": "/metodopagos/formularioM"
  },
  {
    "renderMode": 0,
    "route": "/metodopagos/ediciones/*"
  },
  {
    "renderMode": 2,
    "route": "/users"
  },
  {
    "renderMode": 0,
    "route": "/users/formularioU"
  },
  {
    "renderMode": 0,
    "route": "/users/ediciones/*"
  },
  {
    "renderMode": 2,
    "route": "/roles"
  },
  {
    "renderMode": 0,
    "route": "/roles/formularioR"
  },
  {
    "renderMode": 2,
    "route": "/objetivoahorros"
  },
  {
    "renderMode": 0,
    "route": "/objetivoahorros/formularioOA"
  },
  {
    "renderMode": 0,
    "route": "/objetivoahorros/ediciones/*"
  },
  {
    "renderMode": 2,
    "route": "/reportes"
  },
  {
    "renderMode": 0,
    "route": "/reportes/metodospagosgrafica"
  },
  {
    "renderMode": 0,
    "route": "/reportes/graficUser"
  },
  {
    "renderMode": 0,
    "route": "/reportes/productospriceandunit"
  },
  {
    "renderMode": 0,
    "route": "/reportes/metacestaobjetivo"
  },
  {
    "renderMode": 0,
    "route": "/reportes/montocategorias"
  },
  {
    "renderMode": 0,
    "route": "/reportes/categoriaservicio"
  },
  {
    "renderMode": 0,
    "route": "/reportes/cantidadTransanccionesporFecha"
  },
  {
    "renderMode": 0,
    "route": "/reportes/montotransaccionesporfecha"
  },
  {
    "renderMode": 2,
    "route": "/transaccion"
  },
  {
    "renderMode": 0,
    "route": "/transaccion/listar"
  },
  {
    "renderMode": 0,
    "route": "/transaccion/insertar"
  },
  {
    "renderMode": 0,
    "route": "/transaccion/editar/*"
  },
  {
    "renderMode": 2,
    "route": "/tipotransaccion"
  },
  {
    "renderMode": 0,
    "route": "/tipotransaccion/listar"
  },
  {
    "renderMode": 0,
    "route": "/tipotransaccion/insertar"
  },
  {
    "renderMode": 0,
    "route": "/tipotransaccion/editar/*"
  },
  {
    "renderMode": 2,
    "route": "/tipocuenta"
  },
  {
    "renderMode": 0,
    "route": "/tipocuenta/listar"
  },
  {
    "renderMode": 0,
    "route": "/tipocuenta/insertar"
  },
  {
    "renderMode": 0,
    "route": "/tipocuenta/editar/*"
  },
  {
    "renderMode": 2,
    "route": "/succes"
  },
  {
    "renderMode": 2,
    "route": "/cancel"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 0,
    "route": "/productos/formularioP"
  },
  {
    "renderMode": 0,
    "route": "/productos/editar/*"
  },
  {
    "renderMode": 0,
    "route": "/productos/ediciones/*"
  },
  {
    "renderMode": 0,
    "route": "/productos/buscarproducto"
  },
  {
    "renderMode": 2,
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "route": "/tiendas/formularioT"
  },
  {
    "renderMode": 0,
    "route": "/tiendas/editar/*"
  },
  {
    "renderMode": 0,
    "route": "/tiendas/ediciones/*"
  },
  {
    "renderMode": 0,
    "route": "/tiendas/buscartienda"
  },
  {
    "renderMode": 2,
    "route": "/perfil"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8030, hash: '5bb23535d2b77bce207bdcbf3bf3ddc731538eaceb7aace56215c5f1844c9732', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1350, hash: '8ca884e1ce121f2a0672df0a3cfad8867907d901bd3816850195fa491a1f7250', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31269, hash: '4f9659ae0f9ff1b8c975357c7909d59696b1c763d808cf698c40e252c4266d3c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'reportes/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/reportes_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'tipotransaccion/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/tipotransaccion_index_html.mjs').then(m => m.default)},
    'metodopagos/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/metodopagos_index_html.mjs').then(m => m.default)},
    'succes/index.html': {size: 18118, hash: '240384eafa7585860bf495379ca551cc0325e4ba29c67e49bffaf99d4bf5f617', text: () => import('./assets-chunks/succes_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'tipocuenta/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/tipocuenta_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'objetivoahorros/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/objetivoahorros_index_html.mjs').then(m => m.default)},
    'categorias/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/categorias_index_html.mjs').then(m => m.default)},
    'tiendas/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/tiendas_index_html.mjs').then(m => m.default)},
    'registro/index.html': {size: 26557, hash: '685176571af7a2a34841bb66a11b40bccf9d3de4605be27ebfc4e53f34f18aa0', text: () => import('./assets-chunks/registro_index_html.mjs').then(m => m.default)},
    'transaccion/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/transaccion_index_html.mjs').then(m => m.default)},
    'cancel/index.html': {size: 18116, hash: 'f09ca33ee3c20f218923926de40de5abfb780cc52d83465b2cec462d0a3d6057', text: () => import('./assets-chunks/cancel_index_html.mjs').then(m => m.default)},
    'roles/index.html': {size: 24718, hash: '14eb8aff7d0ca44d3d1316ee61324d78b77940efa0f6351ca38d8fa1a5a4b3d8', text: () => import('./assets-chunks/roles_index_html.mjs').then(m => m.default)},
    'styles-RG2ZIGQY.css': {size: 15056, hash: 'V44aCe56lus', text: () => import('./assets-chunks/styles-RG2ZIGQY_css.mjs').then(m => m.default)}
  },
};
