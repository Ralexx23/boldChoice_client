import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';


const Udatagrid = ({ data }: any) => {
  return (
    <Box style={{ height: '70vh' }}>
      <Typography variant="h4">Tablero</Typography>
      <br />
      <DataGrid {...data} treeData={true} />
    </Box>
  );
};

export default Udatagrid;