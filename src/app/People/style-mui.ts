"use client"
import { Box, Button, Grid } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyleBoxRow = muiStyled(Box)(({ theme }) => ({
    display: "flex",
}));

export const StyleBoxColumn = muiStyled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column"
}));

export const StyleDetailStudent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    background: "#FFFFFF",
    borderRadius: '20px 0 0 20px',
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
    padding: '30px 20px',
    boxShadow: "-4px 2px 6px 0px rgb(179 179 179 / 50%)",
    gap: "20px"
}));

export const StyleTitleDetailStu = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.8)",
    fontSize: "20px"
}));

export const StyleMainContent = muiStyled('p')(({ color, theme }) => ({
    color: color,
    fontSize: "15px"
}));

export const StyleTitleContent = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.8)",
    fontSize: "10px",
    textTransform: "uppercase",
}));

export const StyleBoxContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '5px'
}));

export const StyleBoxContact = muiStyled(StyleBoxColumn)(({ theme }) => ({
    gap: '20px'
}));

export const StyleBtnEdit = muiStyled(Button)(({ theme }) => ({
    color: 'rgb(35,50,85,0.8)',
    border: '1px solid rgb(35,50,85,0.8)',
    fontSize: '16px',
}));

export const StyleBtnDelete = muiStyled(Button)(({ theme }) => ({
    color: '#F62B2B',
    border: '1px solid #F62B2B',
    fontSize: '16px',
}));

export const StyleBoxBtn = muiStyled(StyleBoxRow)(({ theme }) => ({
    justifyContent: 'space-between'
}));

export const StyleButton = muiStyled(Button)(({ theme }) => ({
    background: "white",
    color: "rgb(35, 50, 85, 0.8)",
    fontSize: "16px",
}));

export const StyleButtonCreate = muiStyled(Button)(({ theme }) => ({
    background: "rgb(35, 50, 85, 0.8)",
    color: "#FDFDF5",
    fontSize: "16px",
}));

export const StyleBoxBtnHandle = muiStyled(StyleBoxRow)(({ theme }) => ({
    gap: '10px',
    justifyContent: 'end',
    width: '100%'
}));

export const StyleContent = muiStyled(StyleBoxColumn)(({ theme }) => ({
    margin: '120px 0 0 100px',
    gap: "20px",
    background: "#F8F8F8",
    padding: '15px',
    borderRadius: '10px 10px 0 0',
    height: '100%'
}));


export const StyleSearch = muiStyled(StyleBoxRow)(({ theme }) => ({
    border: '0.5px solid #E5E5E5',
    borderRadius: '5px',
    alignItems: 'center',
    gap: '15px',
    paddingLeft: '15px',
    background: 'white',
    fontSize: '16px',
    height: '100%',
    width: '100%'
}));

export const StyleFilter = muiStyled(Grid)(({ theme }) => ({
    borderTop: '1px solid rgb(35,50,85,0.1)',
    borderBottom: '1px solid rgb(35,50,85,0.1)',
    paddingBottom: '16px'
}));

export const StyleCountStu = muiStyled('p')(({ theme }) => ({
    color: "rgb(35,50,85,0.5)",
    fontSize: '14px',
    padding: "20px 10px",
    background: "white",
    marginBottom: '3px'
}));