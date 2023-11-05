import {PDFLoader} from 'langchain/document_loaders/fs/pdf'


export const getEmbeddedComponent = async (file) => {
    const loader = await new PDFLoader(file[0]);
    const pages = await loader.load();
    return pages;
};
