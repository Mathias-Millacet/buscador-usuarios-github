import React, { useEffect, useState } from "react";
import {
  deleteSearch,
  getAllSearches,
  updateSearch,
} from "../../api/localServer";
import { formatDistanceToNow, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Searches } from "../../types/search";
import classes from "./SearchHistory.module.css";
import { GoBackArrow } from "../../components/GoBackArrow/GoBackArrow";

const SearchHistory: React.FC = () => {
  const [historic, setHistoric] = useState<Searches>([]);
  const [editMode, setEditMode] = useState<null | string>(null);
  const [editedComment, setEditedComment] = useState("");

  useEffect(() => {
    const historicData = async () => {
      const allSearches = await getAllSearches();
      setHistoric(allSearches);
    };
    historicData();
  }, []);

  const updateComment = (id: string, comment: string | null) => {
    setEditedComment(comment ?? "");
    setEditMode(id);
  };

  const deleteRecord = (id: string) => {
    setHistoric(historic.filter((record) => record._id !== id));
    deleteSearch(id);
  };

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: es });
  };

  const saveComment = () => {
    setHistoric(
      historic.map((record) => {
        if (record._id === editMode) {
          record.comment = editedComment;
          return record;
        }
        return record;
      })
    );
    updateSearch(String(editMode), editedComment);
    setEditMode(null);
  };

  return (
    <div>
      <GoBackArrow />
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}>Palabra de Búsqueda</th>
            <th className={classes.th}>Resultados</th>
            <th className={classes.th}>Fecha de Búsqueda</th>
            <th className={classes.th}>Comentario</th>
            <th className={classes.th}>Actualizar</th>
            <th className={classes.th}>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {historic.map((search) => (
            <tr key={search._id}>
              <td className={classes.td}>{search.searchTerm}</td>
              <td className={classes.td}>
                {search.results.slice(0, 10).map((result, idx) => (
                  <span key={idx}>{result}, </span>
                ))}
              </td>
              <td className={classes.td}>{formatDate(search.dateSearch)}</td>
              <td className={classes.td}>
                {editMode === search._id ? (
                  <textarea
                    className={classes.textArea}
                    value={editedComment}
                    // @ts-ignore
                    onInput={(e) => setEditedComment(e.target.value)}
                  />
                ) : (
                  search.comment ?? ""
                )}
              </td>
              <td className={classes.td}>
                {search._id === editMode ? (
                  <button onClick={saveComment} className={classes.saveComment}>
                    Guardar
                  </button>
                ) : null}
                {editMode === null && (
                  <button
                    className={classes.updateComment}
                    onClick={() => updateComment(search._id, search.comment)}
                  >
                    Actualizar
                  </button>
                )}
              </td>
              <td className={classes.td}>
                {editMode === null && (
                  <button
                    className={classes.deleteRecord}
                    onClick={() => deleteRecord(search._id)}
                  >
                    Borrar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchHistory;
