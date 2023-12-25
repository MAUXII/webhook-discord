'use-client'

import {Toaster as ToasterProvider} from 'react-hot-toast'

export const Toast=()=>{
    return(
        <ToasterProvider position="top-center" toastOptions={{success: { style: {background:'#4338CA', color: '#fff',},iconTheme:{primary:'#fff',secondary:'#4338CA',},}, error:{style:{background:'#ef4444',color: '#fff',},iconTheme:{primary: '#fff',secondary: '#ef4444',},},}}></ToasterProvider>
    )
}
