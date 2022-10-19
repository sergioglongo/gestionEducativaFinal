import React from 'react'
import { Box, Typography , Stack, Avatar } from '@mui/material';


export const MoreFunctions = () => {
    const styles = {
        numberStyle: {
          width: 50,
          height: 50,
          color: "white",
          backgroundColor: "#1976d2",
        },
        borderText: {
          border: `1.5px solid #bdbdbd`,
          p: 2.5,
          backgroundColor: "white",
          borderRadius: 1,
          width: "100%",
        },
      };
    return (
    <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                p: 5,
                my: 4,
              }}
            >
              <Stack
                spacing={10}
                direction={{ xs: "column", sm: "row" }}
                sx={{ textAlign: { xs: "center", sm: "left" } }}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h4">
                  Futuras funciones:
                </Typography>

                {/* Items */}
                <Stack direction="column" spacing={4} sx={{ color: "#818589" }}>
                  {/* 1 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar sx={{ color: "white", backgroundColor: "#1976d2" }}>
                      1
                    </Avatar>
                    <Typography variant="h6" sx={styles.borderText}>
                      Boletines de calificaciones digitales
                    </Typography>
                  </Stack>

                  {/* 2 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                    sx={{ pl: { md: 5 } }}
                  >
                    <Avatar sx={styles.numberStyle}>2</Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText}>
                      <Typography variant="h6">Respuestas a notificaciones</Typography>
                    </Stack>
                  </Stack>

                  {/* 3 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar sx={{ color: "white", backgroundColor: "#1976d2" }}>
                      3
                    </Avatar>
                    <Typography variant="h6" sx={styles.borderText}>
                      Estado de Asistencias a clases
                    </Typography>
                  </Stack>

                  {/* 4 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                    sx={{ pl: { md: 5 } }}
                  >
                    <Avatar sx={styles.numberStyle}>4</Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText}>
                      <Typography variant="h6">
                        Carga de Justificaciones Medicas
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* 5 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar sx={{ color: "white", backgroundColor: "#1976d2" }}>
                      5
                    </Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
                      <Typography variant="h6">Encuestas de satisfacción</Typography>
                    </Stack>
                  </Stack>

                  {/* 6 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                    sx={{ pl: { md: 5 } }}
                  >
                    <Avatar sx={styles.numberStyle}>6</Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText}>
                      <Typography variant="h6">
                        Matriculación
                      </Typography>
                      <Typography>
                        - Verificacion de datos
                      </Typography>
                      <Typography>
                        - Carga de documentacion solicitada
                      </Typography>
                      <Typography>
                        - Pago de Matriculas
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* 7 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar sx={{ color: "white", backgroundColor: "#1976d2" }}>
                      7
                    </Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText} spacing={1}>
                      <Typography variant="h6">Gestion de Turnos </Typography>
                      <Typography>Solicitud de Turnos</Typography>
                      <Typography>Cancelación de Turnos</Typography>
                    </Stack>
                  </Stack>

                  {/* 8 */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    spacing={2}
                    sx={{ pl: { md: 5 } }}
                  >
                    <Avatar sx={styles.numberStyle}>8</Avatar>
                    <Stack alignItems="flex-start" sx={styles.borderText}>
                      <Typography variant="h6">
                        Sala de reuniones virtuales
                      </Typography>
                    </Stack>
                  </Stack>

                </Stack>
              </Stack>
            </Box>
  )
}
