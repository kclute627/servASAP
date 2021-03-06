import React, { useState } from "react";
import {Link} from 'react-router-dom';  
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import Checkbox from "@material-ui/core/Checkbox";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Chip from '@material-ui/core/Chip'
import Paper from "@material-ui/core/Paper";
import TableFooter from '@material-ui/core/TableFooter';

const JobsDasboard = ({ jobs, history }) => {
  console.log(jobs, "jobs dashboard");
  const [checked, setChecked] = useState([]);
  const [allChecked, setAllChecked] = useState(false)  
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0);

  const handleRowClick = (id) => {
    const index = checked.indexOf(id); 
    if (index !== -1) {
      const newChecked = checked.filter((cur) => cur !== id);
      setAllChecked(false)
      return setChecked(newChecked);
    }
    
    setChecked([...checked, id]);
  };
  const handleTableClick = () => {
    if(!allChecked){
      const newChecked = jobs.map(cur=> cur.id)
      setAllChecked(!allChecked)
      return setChecked(newChecked)
    }
    setAllChecked(!allChecked) 
    setChecked([])
  } 

  const dateHandler = (date) => { 
    const newDate = new Date(date)
    const month = newDate.getUTCMonth() + 1;
    const day = newDate.getUTCDay() 
    const year = newDate.getUTCFullYear() 

    console.log('date', month)

    return `${month}/${day}/${year}`

  }

  const chipHandler = (arr) => {
    if(!arr){
      return null
    }
   let chip = arr.map(cur => {
      let style;
      if(cur === 'Out For Service'){
        style = {backgroundColor: "#fcb26d", color: "#696969" , fontSize: '1.1rem', padding: '1rem' } 
      }

      console.log('chip')  
      return (<Chip label={cur} style={style}/>)
    })

    return chip

  }


  jobs = jobs.sort((a,b) => a.jobNumber - b.jobNumber)
  return (
    <div>
      <div className='jobs_dash-middle'>
        <div className='jobs-table' style={{ width: "95%", margin: "0 auto" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ background: "#f2f2f2" }}>
                  <TableCell style={{ width: "5%" }}>
                    {" "}
                    <Checkbox checked={allChecked} onClick={handleTableClick} color='primary'/>{" "}
                  </TableCell>
                  <TableCell align='center' style={{width: '9%'}}>Job Number</TableCell>
                  <TableCell align='center' style={{width: '11%'}}>Status</TableCell>
                  <TableCell align='center' style={{width: '17%'}}>Client</TableCell>
                  <TableCell align='center' style={{width: '14%'}}>Server</TableCell>
                  <TableCell align='center' style={{width: '27%'}}>Reciepent</TableCell>
                  <TableCell align='center' style={{width: '6%'}}>Due Date</TableCell>
                  <TableCell align='center'>Notes </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{fontSize: '2rem'}}> 
                {jobs.map((job, i) => (
                  
                  <TableRow
                    key={job.id}
                    className={checked.includes(job.id) ? "checked" : i%2=== 0 ? 'row-1' : 'row'}
                    
                  >
        
                    
                    <TableCell>
                      <Checkbox
                        color='primary'
                        checked={checked.includes(job.id)} 
                        onClick={() => handleRowClick(job.id)} 
                      /> 
                    </TableCell> 
                    <TableCell align='center' style={{fontSize: '1rem', color: 'black', fontWeight: '700', paddingBottom: '1rem', }}><Link style={{borderBottom: 'solid black 1px'}} to={`/jobs/${job.jobNumber}`}>{job.jobNumber}</Link></TableCell>
                    <TableCell align='center'>{chipHandler(job.status)}</TableCell>
                    <TableCell align='center' style={{fontSize: '1.2rem'}}> {job.clientName}</TableCell> 
                    <TableCell align='center' style={{fontSize: '1.2rem'}}>{job.server}</TableCell>
                    <TableCell align='center' style={{fontSize: '1.2rem'}}>{job.personServed}</TableCell>
                    <TableCell align='center' style={{fontSize: '1.2rem'}}>{dateHandler(job.dueDate)}</TableCell>
                    <TableCell align='center'></TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={jobs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    // onChangePage={handleChangePage}
                    // onChangeRowsPerPage={handleChangeRowsPerPage}
                    // ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default JobsDasboard;
