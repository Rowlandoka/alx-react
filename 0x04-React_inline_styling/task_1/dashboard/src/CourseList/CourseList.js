import React from "react";
import PropType from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length == 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : null}
        {listCourses.map((val, idx) => {
          return (
            <CourseListRow
              isHeader={false}
              textFirstCell={val.name}
              textSecondCell={val.credit}
              key={val.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
const styles = StyleSheet.create({
  table: {
    marginTop: "2em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
    marginBottom: "15em",
    marginLeft: "auto",
    marginRight: "auto",
  },

  th: {
    borderBottom: "1px solid #ddd",
    width: "80%",
  },

  td: {
    width: "80%",
  },

  tr: {
    "nth-child(2)": {
      textAlign: "left",
    },
  },
});

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propType = {
  listCourses: PropType.arrayOf(CourseShape),
};

export default CourseList;
