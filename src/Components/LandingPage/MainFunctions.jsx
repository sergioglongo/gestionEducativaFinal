import React from 'react'
import { Box, Grid, Card, Typography , Stack, Avatar } from '@mui/material';
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SmsIcon from "@mui/icons-material/Sms";

export const MainFunctions = () => {

    const cardStyle = {p: 2,my: 2, height:'450px', width:'300px'}

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
                textAlign: "center",
                px: 3,
                height:{xs:'2200px',md:'1000px',lg:'450px'},
                mt:4,
                ml:10,
                mr:10
            }}
        >
            <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Principales Funcionalidades
            </Typography>
            <Typography sx={{ color: "gray" }}>
                Funcionalidades para padres, profesores y alumnos, teniendo en
                cuenta las distintas necesidades de cada uno.
            </Typography>
            <Grid
                container
                direction={{ xs: "column", md: "row" }}
                justifyContent='center'
                alignItems="center"
                spacing={2}
                sx={{ maxWidth: "100%" }}
            >
                {/* SERVICE 1 */}
                <Grid item xs={4}>
                    <Card sx={cardStyle}>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>
                            <Avatar sx={{ width: 60, height: 60 }}>
                                <AssignmentTurnedInIcon sx={{ fontSize: 40 }} />
                            </Avatar>
                            <Typography variant="h5">
                                Reducción de tareas administrativas{" "}
                            </Typography>
                            <Typography sx={{ lineHeight: "2", color: "gray" }}>
                                Ahorra tiempo en tareas administrativas a la hora de enviar
                                mensajes a múltiples grupos, hacer preguntas, pedir
                                autorizaciones, enviar recordatorios, etc.{" "}
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>

                {/* SERVICE 2 */}
                <Grid item xs={4}>
                <Card sx={cardStyle}>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>
                            <Avatar sx={{ width: 60, height: 60 }}>
                                <SupervisorAccountIcon sx={{ fontSize: 40 }} />
                            </Avatar>
                            <Typography variant="h5">Padres contentos</Typography>
                            <Typography sx={{ lineHeight: "2", color: "gray" }}>
                                Es un hecho probado que mejorando la comunicación
                                escuela-familia se aumenta la implicación de los padres en la
                                educación de sus hijos. Y cuanto mayor es la implicación de
                                los padres, mejores son los resultados que obtienen los
                                alumnos.{" "}
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>

                {/* SERVICE 3 */}
                <Grid item xs={4}>
                <Card sx={cardStyle}>
                        <Stack justifyContent="center" alignItems="center" spacing={2}>
                            <Avatar sx={{ width: 60, height: 60 }}>
                                <SmsIcon sx={{ fontSize: 40 }} />
                            </Avatar>
                            <Typography variant="h5">Comunicación más eficiente</Typography>
                            <Typography sx={{ lineHeight: "2", color: "gray" }}>
                                Olvídate de emails, SMS, papeles y grupos de Whatsapp. Verás
                                que la comunicación es mucho más eficiente y fluída.
                            </Typography>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>

    )
}
