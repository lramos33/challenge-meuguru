import React, { useEffect, useState } from 'react';
import Response from '../interfaces/response';

function TableButtons(props: { responseData: Response[], setPageData: Function}) {
  const { responseData, setPageData } = props;

  const [disablePreviousButton, setDisablePreviousButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(responseData.length / 10);

  useEffect(() => {
    const max = currentPage * 10;
    const min = max - 10;
    setPageData(responseData.slice(min, max));

    switch (currentPage) {
      case 1:
        setDisablePreviousButton(true);
        setDisableNextButton(false);
        break;
      case totalPages:
        setDisablePreviousButton(false);
        setDisableNextButton(true);
        break;
      default:
        setDisablePreviousButton(false);
        setDisableNextButton(false);
    }
  }, [currentPage]);

  const previousPage = () => {
    setCurrentPage((prevState) => (prevState - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevState) => (prevState + 1));
  };

  return (
    <>
      <button type="button" onClick={previousPage} disabled={disablePreviousButton}>Previous</button>
      <button type="button" onClick={nextPage} disabled={disableNextButton}>Next</button>
      <p>{ `Page ${currentPage} of ${totalPages}` }</p>
    </>

  );
}

export default TableButtons;