import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        customerId:
          "Abonemiz merhum abone adına fesih için Sakarya Adapazarı MHM den işlem yapmaya gittiğinde covid kapsamında dışarıda çok beklediğini oturacak yer olmadığını hava şartlarının iyi ya da kötü olması aboneleri çok etkilediklerini hamile ve yaşlıların dışarıda çok beklediğini merhum abone için tc bilgisi istediklerini ve abone merhum olduğu için tcye çok zor ulaştığını bu aşamada şubeye 3 kere gidip gelmek zorunda kaldığını bundan kaynaklı da memnun olmadığını çözüm bulunmadan da memnun olamayacağını belirtti",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell
          style={{
            
            color: row.carbs === "Memnuniyet Sağlandı" ? "#62cdbb" : "#fd7963",
          }}
          align="right"
        >
          {row.carbs === "Memnuniyet Sağlandı" ? (
            <div style={{display:"flex" ,alignItems:"center", justifyContent:"right"}}>
              {row.carbs}{" "}
              <CheckCircleRoundedIcon style={{ transform: "scale(.8)" }} />
            </div>
          ) : (
            <div style={{display:"flex" ,alignItems:"center", justifyContent:"right"}}>
              {row.carbs}{" "}
              <FlagCircleRoundedIcon style={{ transform: "scale(.8)" }} />
            </div>
          )}
        </TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Memnuniyetsizlik Nedeni
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.customerId}>
                      <TableCell>{historyRow.customerId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("FİKRET ALTUNCU", 50, 80, "Memnuniyet Sağlandı", "5353952554"),
  createData("MUHARREM SERKAN ORAN", 50, 80, "Memnuniyet Sağlandı", "5324050281"),
  createData("YÜKSEL ERKAN", 20, 80, "Memnuniyet Sağlandı", "5053577397"),
  createData("YILMAZ MESUT", 20, 80, "Memnuniyet Sağlandı", "5053589707"),
  createData("NUR ODABAŞ SÜZER", 0, 80, "Memnun Değil", "5512120202"),
  createData("MUZAFFER ERCAN", 0, 80, "Memnun Değil", "5324430898"),
  createData("İSMAİL ŞAHİN", 0, 80, "Memnuniyet Sağlandı", "5327671452"),
  createData("NURİ TUNCAY", 0, 80, "Memnuniyet Sağlandı", "5469234800"),
  createData("GÜLCAN BOZOĞLU", 0, 80, "Memnuniyet Sağlandı", "5063840803"),
  createData("BALCAN ÇETİN", 0, 50, "Memnuniyet Sağlandı", "5434075510"),
  createData("KAÇAR ELİF", 0, 50, "Memnun Değil", "5323970211"),
  createData("MEŞE SİNAN", 0, 50, "Memnun Değil", "5315712626"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Old Score</TableCell>
            <TableCell align="right">New Score</TableCell>
            <TableCell align="right">Call Result</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
