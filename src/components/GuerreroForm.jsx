import { Card, CardContent, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, InputLabel, Select, MenuItem, Rating, Button } from '@mui/material';

function GuerreroForm({ formulario, handleChange, handleSubmit, setFormulario }) {
  return (
    <Card elevation={3} className="warrior-form">
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: 'primary.light',
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Registrar Guerrero
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Nombre del Guerrero" name="nombre" value={formulario.nombre} onChange={handleChange} required margin="normal" />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Tipo de Guerrero</FormLabel>
            <RadioGroup row name="tipo" value={formulario.tipo} onChange={handleChange}>
              <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
              <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
            </RadioGroup>
          </FormControl>

          <Typography className="warrior-form__label" gutterBottom mt={2}>Nivel de Combate</Typography>
          <Slider name="nivel" value={formulario.nivel} onChange={handleChange} min={1} max={100} valueLabelDisplay="auto" />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Categoría / Rango</InputLabel>
            <Select name="rango" value={formulario.rango} label="Categoría / Rango" onChange={handleChange}>
              <MenuItem value="Capitán">Capitán</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Explorador">Explorador</MenuItem>
              <MenuItem value="Asediador">Asediador</MenuItem>
            </Select>
          </FormControl>

          <Typography className="warrior-form__label" gutterBottom mt={2}>Nivel de Amenaza / Furia</Typography>
          <Rating
            name="rating"
            aria-label="Nivel de amenaza o furia"
            size="large"
            value={formulario.rating}
            onChange={(_, newValue) => setFormulario({ ...formulario, rating: newValue || 1 })}
            min={1}
            max={5}
            sx={{
              fontSize: '2.5rem',
              '& .MuiRating-iconFilled': { color: '#fbbf24' },
              '& .MuiRating-iconHover': { color: '#fde047' },
              '& .MuiRating-iconEmpty': { color: 'rgba(251, 191, 36, 0.35)' },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.25,
              background: 'linear-gradient(100deg, #9333ea, #db2777)',
              boxShadow: '0 8px 24px rgba(219, 39, 119, 0.25)',
              '&:hover': {
                background: 'linear-gradient(100deg, #a855f7, #ec4899)',
                boxShadow: '0 10px 28px rgba(219, 39, 119, 0.35)',
              },
            }}
          >
            Registrar Guerrero
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default GuerreroForm;