
import { useMemo, useState } from "react";
import { matieres } from "../../data/data";
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    TableContainer, Paper, TableSortLabel, TablePagination, TextField, Box
} from "@mui/material";

export default function MatieresTable() {
    const [orderBy, setOrderBy] = useState("libelle");
    const [order, setOrder] = useState("asc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [query, setQuery] = useState("");

    const rows = useMemo(() => {
        const filtered = matieres.filter(m =>
            m.libelle.toLowerCase().includes(query.toLowerCase())
        );
        const sorted = [...filtered].sort((a, b) => {
            const aVal = a[orderBy]; const bVal = b[orderBy];
            if (typeof aVal === "number") return (aVal - bVal) * (order === "asc" ? 1 : -1);
            return aVal.localeCompare(bVal) * (order === "asc" ? 1 : -1);
        });
        return sorted;
    }, [orderBy, order, query]);

    const handleSort = (key) => {
        if (orderBy === key) setOrder(order === "asc" ? "desc" : "asc");
        else { setOrderBy(key); setOrder("asc"); }
    };

    const paginated = useMemo(() => {
        const start = page * rowsPerPage;
        return rows.slice(start, start + rowsPerPage);
    }, [rows, page, rowsPerPage]);

    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField label="Recherche (matière)" value={query} onChange={(e) => setQuery(e.target.value)} size="small" />
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel active={orderBy === "libelle"} direction={orderBy === "libelle" ? order : "asc"} onClick={() => handleSort("libelle")}>
                                    Libellé
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel active={orderBy === "coeff"} direction={orderBy === "coeff" ? order : "asc"} onClick={() => handleSort("coeff")}>
                                    Coefficient
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginated.map((m) => (
                            <TableRow key={m.id} hover>
                                <TableCell>{m.libelle}</TableCell>
                                <TableCell align="right">{m.coeff}</TableCell>
                            </TableRow>
                        ))}
                        {paginated.length === 0 && (
                            <TableRow><TableCell colSpan={2} align="center">Aucun résultat</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={(_, p) => setPage(p)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Paper>
    );
}
