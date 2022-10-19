import * as React from 'react';
import MUIDataTable from "mui-datatables";
import { FormControl, Checkbox, Box, Grid, Button, FormControlLabel, Typography, Divider } from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DialogContainer from '../Layout/DialogContainer'
import CreateNews from './CreateNews';
import { editNews, getAllNews, createNews } from './NewsActions';

export default function NewsAdmin() {

    const dispatch = useDispatch()
    //traigo las notificaciones que estan en el estado
    let newsAllState = useSelector(state => state.news)
    let user = useSelector(state => state.user)

    const [change, setChange] = useState(false)
    const [mode, setMode] = useState("new")
    useEffect(() => {
        dispatch(getAllNews())
    }, [dispatch, change])

    const [newSelected, setNewSelected] = useState({})
    const [open, setOpen] = useState(false);
    const [newsRows, setNewsRows] = useState([])

    function dataForm(data, mode) {
        let dataFormated = {
            idNews: data.idNews ? data.idNews : null,
            title: data.title,
            body: data.body,
            image: data.image,
            users_news: user[0]?.idUser ? user[0]?.idUser : 1
        }
        if (mode === "new") {
            createNews(dataFormated)
        }
        else {
            editNews(dataFormated)
        }
        setChange(!change)
    }

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false)
        setChange(!change)
    };

    function handleOnclickNew() {
        handleClickOpen()
        setNewSelected({})
        setMode("new")
    }
    function handleOnclickEdit(newItem) {
        setNewSelected(newItem)
        setMode("edit")
        handleClickOpen()
    }

    let newsRowsFormated = newsAllState?.map((newItem) => {

        let fecha = newItem.creationDate.split('-')
        let fechaFormated = `${fecha[2]}/${fecha[1]}/${fecha[0]}`
        let bodyTrundated = newItem?.body?.substring(0, 160)
        if (newItem?.body.length > 160)
            bodyTrundated = bodyTrundated + '...'
        return ([fechaFormated, newItem?.title, bodyTrundated, newItem?.active ? "Activo" : "Inactivo",
            <FormControl >
                <FormControlLabel control={<Checkbox checked={newItem?.active} />} name="active" value={newItem?.active} />
            </FormControl>,
            <div>
                <img src={newItem?.image} alt="" width="80" height="50" />
            </div>
            ,
            <div key={newItem?.idNews}>
                <Button variant="outlined" onClick={() => handleOnclickEdit(newItem)} >Editar</Button>
            </div>]
        )

    })

    useEffect(() => {
        setNewsRows(newsRowsFormated)
        // eslint-disable-next-line
    }, [newsAllState])

    let columns = [
        {
            name: "creationDate",
            label: "Creación",
            options: { filter: false, sort: true }
        },
        {
            name: "title",
            label: "Titulo",
            options: { filter: false, sort: false }
        },
        {
            name: "body",
            label: "Descripción",
            options: { filter: false, sort: false }
        },
        {
            name: "activeHide",
            label: "Activo",
            options: { filter: true, sort: false, display: 'false', searchable: false }
        },
        {
            name: "active",
            label: "Activo",
            options: { filter: false, sort: true, searchable: false }
        },
        {
            name: "image",
            label: "Imagen",
            options: { filter: false, sort: false, searchable: false }
        },
        {
            name: "acciones",
            label: "Acciones",
            options: { filter: false, sort: false, searchable: false }
        },

    ]

    const options = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "multiselect",
        elevation: 2,
        rowsPerPageOptions: [10, 15, 30, 100],
        tableBodyHeight: '100%',
        tableBodyMaxHeight: '100%',
        searchPlaceholder: "titulo / descripción / fecha",
        searchAlwaysOpen: true,
        selectableRows: "none",
        responsive: "vertical",
        hideSelectColumn: true,

        textLabels: {
            body: {
                noMatch: "Disculpa, no se encontraron registros",
                toolTip: "Ordenar",
                columnHeaderTooltip: column => `Ordenar por ${column.label}`
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Filas por Pagina:",
                displayRows: "of",
            },
            toolbar: {
                search: "Buscar",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filtrar Tabla",
            },
            filter: {
                all: "Todos",
                title: "FILTROS",
                reset: "Restablecer",
            },
            viewColumns: {
                title: "Show Columns",
                titleAria: "Show/Hide Table Columns",
            },
            selectedRows: {
                text: "fila(s) seleccionadas",
                delete: "Borrar",
                deleteAria: "Quitar Filas Seleccionadas",
            },
        }
    }

    return (
        <div>
            <div>
                <Typography align={"center"} sx={{ mt: 2 }} gutterBottom variant="h4" >Administración de Noticias</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Divider />
                    <Box sx={{ alignSelf: 'center' }}>
                        <Button variant="outlined" onClick={() => handleOnclickNew()}>Crear Noticia</Button>
                    </Box>
                    <Divider />
                </Box>
                <Box sx={{ m: 2 }}>
                    <MUIDataTable
                        title={"Listado de Noticias"}
                        data={newsRows}
                        columns={columns}
                        options={options}
                    />
                </Box>
            </div>
            <Grid Container >
                <DialogContainer open={open}  >
                    <CreateNews handleClose={handleClose} newData={newSelected} mode={mode} dataForm={dataForm} title={'Crear Noticia'} />
                </DialogContainer>
            </Grid>
        </div>
    )
}
