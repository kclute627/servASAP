import React, { useState, useEffect } from "react";
import JobsBtn from './JobBtn';
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";







const services = [
  "Service of Process",
  "Witness Fee",
  "Investigations",
  "ASAP Rush Serve",
  "Document Retrieval",
];

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });
 
 

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      decimalScale={2}
      fixedDecimalScale
      isNumericString
      prefix='$'
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const InvoiceSection = (props) => {
  const [service, setService] = useState("Service of Process");
  const [value, setValue] = useState('');
  const [jobDescription, setJobDescription] = useState("");
  
  const [qty, setQty] = useState(1);
  const [rows, setRows] = useState([]);

  const handleChange = (event) => {
    setService(event.target.value);
  };


  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
      
        console.log("Enter key was pressed. Run your function.", service, jobDescription, value, qty);
        // callMyFunction();

        if(value && jobDescription){
          handleInvoice(service, jobDescription, value, qty)
        }
        
      
       
        
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [service, jobDescription, value, qty]);







  const handleInvoice = (service, description, price, qty) => {
    
    let total = (price * qty)

    total = formatter.format(total)
   
    setRows([
      ...rows,
      {
        service,
        description,
        price,
        qty,
        total,
      },
    ]);

    

    

    setService("");
    setValue('');
    setQty(1);
    setJobDescription("");
    
  };
  const handleDelete = (id) => {
    const oldRows = [...rows];

    const newRows = oldRows.filter((row, i) => i !== id);

    setRows(newRows);
    
  };


  return (

    <div className="invoice__container">

   

    <div className='invoice'>
      <div className='invoice-top'>
        <h3>Invoice </h3>
        <div className='invoice-span'></div>
        <div className='invoice-item'>
          <FormControl style={{ width: "25%" }}>
            <InputLabel id='demo-mutiple-name-label'>Service Name</InputLabel>
            <Select
              labelId='demo-mutiple-name-label'
              id='demo-mutiple-name'
              value={service}
              onChange={handleChange}
              input={<Input />}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={jobDescription}
            onChange={(dec) => setJobDescription(dec.target.value)}
            label='Description'
            style={{ width: "45%" }}
            placeholder='Description'
            variant='standard'
          />
          <TextField
            label='Qty'
            variant='standard'
            type='number'
            value={qty}
            style={{ width: "5%" }}
            onChange={(val) => setQty(val.target.value)}
          />
          <TextField
            label='Price'
            id='price'
            style={{ width: "10%" }}
            value={value.numberformat}
            onChange={(val) => setValue(val.target.value)}
            name='numberformat'
            id='formatted-numberformat-input'
            variant='standard'
            value={value}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <Button
            type="submit"
            variant='contained' 
            id='addInvoice'
            disabled={!value}    
            onClick={() => handleInvoice(service, jobDescription, value, qty)}
          >
            Add
          </Button>
        </div>
      </div>
      <div className='invoice-bottom'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Service</TableCell>
                <TableCell align='left'>Description</TableCell>
                <TableCell align='right'>Qty.</TableCell>
                <TableCell align='right'>Price</TableCell>
                <TableCell align='right'>Total</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align='left'>{row.service}</TableCell>
                  <TableCell align='left'>{row.description}</TableCell>
                  <TableCell align='right'>{row.qty}</TableCell>
                  <TableCell align='right'>${row.price}</TableCell>
                  <TableCell align='right'>${row.total}</TableCell> 
                  <TableCell align='left'>
                    <IconButton onClick={() => handleDelete(i)}>
                      <HighlightOffIcon
                        style={{ color: "rgb(194, 13, 13)", margin: "0 auto" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            
              <TableRow>
                <TableCell  align='right' colSpan={4}>Total</TableCell> 
                <TableCell align='right'>${

                    rows.reduce((a, {total}) => {
                      
                      total = total.replace(',', '')
                      a = a.replace(',', '')


                         

                        let newTotal = parseFloat(a) + (parseFloat(total))    
                            
                        newTotal = formatter.format(newTotal)
                         
                       return newTotal
                     
                    
                        
                    }, "0")
                
                }</TableCell>
              </TableRow>
            </TableBody>  
          </Table>    
        </TableContainer>
      </div>
    </div>
    <JobsBtn/>
    </div>
  ); 
};

export default InvoiceSection;
