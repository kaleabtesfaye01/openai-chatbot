'use client'
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone' 
import {Inbox} from 'lucide-react'

const FileUpload = () => {
    let [file, setFile] = React.useState(null);

    const {getRootProps, getInputProps} = useDropzone({
        accept: {'application/pdf': ['.pdf']},
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            file = acceptedFiles[0];
            setFile(file);
        }
    });

  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps({
            className: 'border-dashed border-2 border-gray-300 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
        })}>
            <input {...getInputProps()} />
            <>
            <Inbox className="w-10 h-10 text-blue-500"/>
            <p className='mt-2 text-sm text-slate-400'>Drop PDF here</p>
            </>
        </div>
    </div>
  )
}

export {FileUpload}
