import React from "react"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider } from "@mui/material"
import { theme } from "@/theme/theme"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Select, { SelectChangeEvent } from "@mui/material/Select"

import InputLabel from "@mui/material/InputLabel"

import FormControl from "@mui/material/FormControl"

export function BasicSelect() {
  const [age, setAge] = React.useState("")
  console.log("REAL VALUE: ", age)
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    // console.log("age", age)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
// export function SelectTextFields() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             // border before click
//             "& fieldset": {
//               transition: "all 0.3s ease-in-out",
//               borderColor: "#000000",
//             },

//             // border after click
//             "&.Mui-focused fieldset": {
//               transition: "all 0.3s ease-in-out",
//               color: theme.palette.primary.main,
//               border: "1px solid",
//             },
//           },
//           "& .MuiTextField-root": {
//             width: "23vw",
//             color: "#000000",
//           },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField
//             id="outlined-select-currency"
//             select
//             label="ID"
//             defaultValue="1"
//             SelectProps={{
//               IconComponent: ({ className }) => (
//                 <ArrowDropDownIcon className={className} style={{}} />
//               ),
//             }}
//           >
//             {optionss.map(option => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//       </Box>
//     </ThemeProvider>
//   )
// }

// interface SelectFieldProps {
//   options: string[]
//   value: string
//   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
// }

// const SelectField: React.FC<SelectFieldProps> = ({
//   options,
//   value,
//   onChange,
// }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             // border before click
//             "& fieldset": {
//               transition: "all 0.3s ease-in-out",
//               borderColor: "#000000",
//             },

//             // border after click
//             "&.Mui-focused fieldset": {
//               transition: "all 0.3s ease-in-out",
//               color: theme.palette.primary.main,
//               border: "1px solid",
//             },
//           },
//           "& .MuiTextField-root": {
//             width: "23vw",
//             color: "#000000",
//           },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <Select value={value} onChange={onChange}>
//             {options.map(option => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </Select>
//         </div>
//       </Box>
//     </ThemeProvider>
//   )
// }

// export default SelectField
