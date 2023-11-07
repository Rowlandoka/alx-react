import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const headerStyle = { backgroundColor: "#deb5b545" };
const rowStyle = { backgroundColor: "#f5f5f5ab" };
const selectedStyle = isHeader ? headerStyle : rowStyle;

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={css(listRowStyle.thcenter)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={css(listRowStyle.th)}>{textFirstCell}</th>
            <th style={css(listRowStyle.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(listRowStyle.td)}>{textFirstCell}</td>
          <td className={css(listRowStyle.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const listRowStyle = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    padding: 0,
    margin: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
