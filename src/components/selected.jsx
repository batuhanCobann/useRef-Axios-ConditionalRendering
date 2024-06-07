import { 
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select
 } from "@mui/material";
import { useState } from "react"
import Hacker from "./hacker";
import Json from "./json"


export default function Selected(){
const [selected, setSelected] = useState("");
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Api Seçiniz</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected}
                label="Age"
                onChange={(e) => {setSelected(e.target.value);}}
            >
                <MenuItem value={1}>Json Api</MenuItem>
                <MenuItem value={2}>Hacker Api</MenuItem>
            </Select>
            </FormControl>
            {selected == 1 && <Json />}
            {selected == 2 && <Hacker />}
        </Box>
    )
}