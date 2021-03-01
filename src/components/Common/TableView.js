import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(id, name, email) {
    return { id, name, email};
  }
  
 /* const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
*/
  


class TableView extends Component{
    render(){
        const {rows,columns} = this.props;
             return(
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                    {columns ?
                    columns.map((col,i)=>{
                        return (
                            <TableCell key={i}>{col.label}</TableCell>
                        )
                    })
                    :null
                    }
                </TableRow>
              </TableHead>
              <TableBody>
                  {rows ?
                    rows.map((row,i) => {
                      return(
                        <TableRow>
                        {
                          columns.map((col,colIndex)=>{
                            return(
                                <TableCell key={colIndex} >
                                    {row[col.name]}
                                </TableCell>
                            )
                        })

                        }
                      </TableRow>

                      )               
                    })
                :null }
              </TableBody>
            </Table>
          </TableContainer>


        )
    }
}

export default TableView;