import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button } from '@mui/material';

function EjercitoView({ tropas, eliminarGuerrero }) {
  return (
    <TableContainer component={Paper} elevation={3} className="tabla-ejercito">
      <Table aria-label="Ejército registrado">
        <TableHead>
          <TableRow>
            <TableCell><strong>Guerrero</strong></TableCell>
            <TableCell><strong>Linaje</strong></TableCell>
            <TableCell><strong>Rango</strong></TableCell>
            <TableCell align="center"><strong>Poder</strong></TableCell>
            <TableCell><strong>Clasificación</strong></TableCell>
            <TableCell align="right"><strong>Acción</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tropas.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="tabla-vacia">
                <span className="titulo-vacio">Aún no hay guerreros</span>
                <span>Registra el primero para formar tu ejército.</span>
              </TableCell>
            </TableRow>
          )}
          {tropas.map((tropa, indice) => (
            <TableRow key={indice}>
              <TableCell className="nombre-guerrero">{tropa.nombre}</TableCell>
              <TableCell>{tropa.tipo}</TableCell>
              <TableCell>{tropa.rango}</TableCell>
              <TableCell align="center">
                <span className="nivel-guerrero">{tropa.nivel}</span>
              </TableCell>
              <TableCell>
                <Chip
                  label={tropa.tipo}
                  color={tropa.tipo === 'Orco' ? 'primary' : 'secondary'}
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="secondary" onClick={() => eliminarGuerrero(indice)}>
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EjercitoView;