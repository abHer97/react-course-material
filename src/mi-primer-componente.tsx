// Un componente SIEMPRE debe tener la letra inicial en mayusculas para que React pueda detectarlo como un componente valido
// Este nombre de componente esta escrito en PascalCase

export function MiPrimerComponente() {
  const message = 'Mi primer componente';
  return (
    <p
      style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#0f0',
      }}
    >
      {message}
    </p>
  );
}

/**
 *
 * Virtual DOM:
 *  Es la copia del DOM que react mantiene en memoria para agilizar los renderizados
 * DOM:
 *  Document
 *  Object
 *  Model
 *  Se refiere al modelo de componentes html que el navegador renderiza. Se estructura en forma de arbol
 *
 *
 *
 * Ciclo de vida del componente
 *
 *
 * Mount:
 *  Se refiere al momento en que el componente es creado por primera vez
 *  React identidica donde debe renderizarse el componente, crea desde 0 todo su contenido y lo envia al navegador para que lo
 *  renderice y muestre al usuario.
 *  React inicializa todas las variables y hooks dentro del componente
 *
 * Update:
 *  Se refiere al momento que el componente recibe una actualizacion de estado o props y se renderiza otra vez
 *  React identifica el lugar exacto donde el componente YA ESTA RENDERIZADO, con el uso del VirtualDOM analiza que partes
 *  del componente han cambiado para cambiar en el DOM solo esas partes. El resto del contenido permanece estatico, sin
 *  cambio alguno
 *
 * Unmount:
 *  Se refiere al momento en que un componente es eliminado tanto del DOM como del VirtualDOM. React elimina el html asociado al
 *  componente para que no se renderice mas. Tambien destruye toda instancia de hooks y destruye todas las variables
 *
 */
