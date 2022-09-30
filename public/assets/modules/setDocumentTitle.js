// 이름 내보내기 export
// 기본 내보내기 export default

// export const INITIAL_DOCUMENT_TITLE = document.title;
export const INITIAL_DOCUMENT_TITLE = document.title;

export const setDocumentTitle = (targetCount) => {
    document.title = `(${targetCount}) ${INITIAL_DOCUMENT_TITLE}`;
};


// { setDocumentTitle, INITIAL_DOCUMENT_TITLE }
// export default {
//     INITIAL_DOCUMENT_TITLE,
//     setDocumentTitle
// };

