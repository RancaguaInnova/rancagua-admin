import React from "react"
import PropTypes from "prop-types"
import { FaRegFilePdf } from "react-icons/fa"

const PdfFileField = ({ source, record, label = {} }) => {
  return (
    <div className="gridPdf">
      {record && record.src ? (
        <a href={record.src} title={record.title} target="_blank" rel="noopener noreferrer">
          <FaRegFilePdf size="48"></FaRegFilePdf>
          <span>{record.title}</span>
        </a>
      ) : (
        ""
      )}
    </div>
  )
}
PdfFileField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
}

export default PdfFileField
