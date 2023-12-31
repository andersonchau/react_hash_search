import React from 'react'
import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createStyles, makeStyles, Theme  } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {DataService} from '../service/DataService';
import { HashTagSearchReq,HashTagSearchResp,HashTagDetails,HashTagUpdateResp } from '../interfaces/AppInterface';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MaintainHash() {


 
  const [tableData, setTableData] = useState<string[][]>([]);

  const [searchStrValue, setSearchStrValue] = useState<string>("");
 


  const muiTableHeaders = [
    {
      name: "ID",
      options: {
        filter: false
      }
    },
    {
      name:"Tag Name",
      options: {
        filter: true,
      }
    },
    {
      name: "Description",
      options: {
        filter: true,
      }
    },
    {
      name: "Operation",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <IconButton aria-label="delete" onClick={() => 
            { 
              console.log(JSON.stringify(tableMeta.rowData[0])); 
              DataService.deleteHashTagById(tableMeta.rowData[0]).then((res:HashTagUpdateResp)  => {
                if ( res.result==="OK"){
                  let searchReq : HashTagSearchReq = {
                    searchStr : "",
                    pageNumber : 10
                  };
            
                  DataService.searchAllHashTag(searchReq)
                  .then((result:HashTagSearchResp)  => {
                    //alert(JSON.stringify(result));
                    // construct result list to table 
                    var tableDataList : string[][] = [];
                    result.hashTagDetailList.map(detail =>{
                      var singleRowData : string[] = [];
                      singleRowData.push(detail.htId.toString());
                      singleRowData.push(detail.label);
                      singleRowData.push(detail.description);
                      singleRowData.push('');
                      tableDataList.push(singleRowData);
                      
                    });
                    console.log('setBackTableData');
                    setTableData(tableDataList);
                  });
              
                
                }
              });
            }} >
            <DeleteIcon />
          </IconButton>
        )
      }
    }
  ];

  const data = [
  ["Joe James", "Test Corp", "Yonkers",""],
  ["John Walsh", "Test Corp", "Hartford",""],
  ["Bob Herm", "Test Corp", "Tampa",""],
  ["James Houston", "Test Corp", "Dallas",""],
];

  const muiTableOptions = {
    filterType: 'checkbox',
    responsive: 'simple'
  };

  
  
  function handleSearchTableData(){
      let searchReq : HashTagSearchReq = {
        searchStr : searchStrValue,
        pageNumber : 10
      };

      DataService.searchAllHashTag(searchReq)
        .then((result:HashTagSearchResp)  => {
          //alert(JSON.stringify(result));
          // construct result list to table 
          var tableDataList : string[][] = [];
          result.hashTagDetailList.map(detail =>{
            var singleRowData : string[] = [];
            singleRowData.push(detail.htId.toString());
            singleRowData.push(detail.label);
            singleRowData.push(detail.description);
            singleRowData.push('');
            tableDataList.push(singleRowData);
            
          });
          setTableData(tableDataList);
        });
    
      

    }
    const onTextChange = (e: any) => setSearchStrValue(e.target.value);
  
  return (
    <>
    <Container>
      <Row>
      <Col >
      <Stack direction="row" m={2} spacing={2}>
      <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Hashtag Name" variant="outlined"  value={searchStrValue} onChange={onTextChange} />
     </Box>
     <Button variant="contained"  
     onClick={() => {
      handleSearchTableData();}}   
    >
        Search</Button>
</Stack>
      
     
      </Col>
      <Col >

      </Col>
      </Row>

      <Row>
        <Col>
          <MUIDataTable
            title={"#HashTag List"}
            data={tableData}
            columns={muiTableHeaders}
            options={muiTableOptions} />
        </Col>
  
      </Row>
      
    </Container>

    {/*}
     
  {*/}
    
  
  
    
  
    </>
  )
}


