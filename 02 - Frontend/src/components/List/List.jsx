/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Classes, HotkeysProvider } from '@blueprintjs/core';
import { Cell, Column, ColumnHeaderCell2, Table2 } from "@blueprintjs/table";

function List({ tableInfo, tableFields }) {
  function getColumnWidths() {
    let screenSize = window.screen.width;

    if (!tableFields || screenSize <= 600) {
      return null;
    }

    if (screenSize >= 1440) {
      screenSize = 1360;
    } else if (screenSize >= 768) {
      screenSize -= 48;
    }
    
    screenSize /= tableFields.length;

    const screenSizeArray = [];

    for (let i = 0; i < tableFields.length; i += 1) {
      screenSizeArray.push(screenSize);
    }

    return screenSizeArray;
  }

  function renderName(name) {
    return (
      <div className={Classes.TEXT_LARGE}>
        <b>{name}</b>
      </div>
    );
  }

  return tableInfo && (
    <HotkeysProvider>
      <Table2 columnWidths={getColumnWidths()} numRows={tableInfo.length} enableColumnResizing enableRowHeader={false}>
        {tableFields?.length && tableFields.map(tableField => (
          <Column key={tableField?.header} cellRenderer={(i) => <Cell>{ tableInfo[i][tableField?.prop] }</Cell>} columnHeaderCellRenderer={() => <ColumnHeaderCell2 name={tableField?.header} index={0} nameRenderer={() => renderName(tableField?.header)} />} />
        ))}
      </Table2>
    </HotkeysProvider>
  );
}

List.propTypes = {
  tableInfo: PropTypes.array.isRequired,
  tableFields: PropTypes.array.isRequired,
};

export default List;