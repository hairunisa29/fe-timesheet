import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailProject, getListProject } from "../../actions/projectActions";
import { AddEmployee } from "..";
import { openModal } from "../../actions/projectActions";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import { Box, Button, Card, Modal, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@mui/material";

function ListEmployee() {
  const openHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(true));
    // setOpen(true)
  };

  //   const closeHandler = e => {
  //     e.preventDefault();
  //     dispatch(openModal(false))
  //     // setOpen(false)

  // }
  // const [open, setOpen] = useState(false);
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(0);
  // const handleLimitChange = (event) => {
  //     setLimit(event.target.value);
  //   };

  //   const handlePageChange = (event, newPage) => {
  //     setPage(newPage);
  //   };
  const { getListEmployeeResult, getListEmployeeLoading, getListEmployeeError, openModalResult } = useSelector((state) => state.TimesheetReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getlisttimesheet
    console.log("1. use effect component did mount");
    dispatch(getListProject());
  }, [dispatch]);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
        <Typography variant="h4" gutterBottom>
          Employee
        </Typography>
        <Button variant="contained" onClick={openHandler}>
          New Employee
          <AddIcon />
        </Button>
      </Stack>

      <Modal open={openModalResult} style={{ marginTop: "20px", marginLeft: "500px" }}>
        <div>
          {/* <Button onClick={closeHandler}><CloseIcon/></Button> */}
          <AddEmployee />
        </div>
      </Modal>

      <Card style={{ display: "flex" }}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getListEmployeeResult ? (
                getListEmployeeResult.map((activity) => {
                  return (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>
                        {activity.startworkinghour} - {activity.endworkinghour}
                      </TableCell>
                      <TableCell>{activity.projectname}</TableCell>
                      <TableCell>{activity.activity}</TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          onClick={(e) => {
                            openHandler(e);
                            dispatch(detailProject(activity));
                          }}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : getListEmployeeLoading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>{getListEmployeeError ? getListEmployeeError : "Data Kosong"}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>

    //   {/* <TablePagination
    //     component="div"

    //     onPageChange={handlePageChange}
    //     onRowsPerPageChange={handleLimitChange}
    //     page={page}
    //     rowsPerPage={limit}
    //     rowsPerPageOptions={[5, 10, 25]}
    //   />
    //  */}
  );
}

export default ListEmployee;
