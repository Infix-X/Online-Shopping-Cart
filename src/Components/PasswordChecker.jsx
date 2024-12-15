/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState,useCallback, useEffect,useRef} from 'react'
import './app.css'

const PasswordChecker = () => {
    const useref = useRef(null);
    const [length ,setLength] =useState(0);
    const [numberAllowed,setnumberAllowed] =useState(false)
    const[characterAllowed,setcharacteAllowed] =useState(false);
    const[password,setPassword] =useState("");
    const passwordGenereator = useCallback(() => {
        var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        var pass=""
        if(numberAllowed){str += "123456789"}
        if(characterAllowed){str += "!@#$%^&*()?{}[]"}
        for(let i = 0;i<length;i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char);

        }
        setPassword(pass);
        
      },
      [length,numberAllowed,characterAllowed,setPassword])
      useEffect(()=>{
            passwordGenereator()
      },[length,numberAllowed,characterAllowed,passwordGenereator])

      const copyClipBoard =useCallback(()=>{

        useref.current?.select()
        useref.current?.setSelectionRange(0,6)

        window.navigator.clipboard.writeText(password)
       
      },[password])
    
    
  return (
    <div className=' w-full max-w-md mx-auto text-center shadow-md rounded-lg my-8  text-black-200 bg-gray-200'
    >
    Password Generator
    
        <div className='flex-shadow  align-middle rounded-lg overflow-hidden shadow-sm my-5 mx-8 '>
        <div className='CopyandPassword w-full '>
        <input
        type='text'
        value={password}
        className=' outline-none py-1 px-3 mb-36'
        placeholder='Password'
        ref={useref}
        readOnly
        />
        <button className='copy-button outline-none h-10 rounded-md bg-blue-600 text-white px-1 py-1 shrink-0 cursor-pointer'
        onClick={copyClipBoard}
        >copy</button>


        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
                    <input
                    type="Range"
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label>Length:{length}</label>

            </div>
            {/* <!---> checkbox<---/> */}
            <div className='flex items-center gap-x-1'>
                <input
                    type="checkbox"
                    id='numAllowed'
                    defaultChecked={numberAllowed}
                    onChange={()=>{
                        // eslint-disable-next-line no-undef
                        setnumberAllowed((prev)=>!prev)

                        }
                    }
                />
                <label>Number</label>


            </div>
            {/* <!---->Character</----!-> */}

            <div className='flex items-center gap-x-1'>
                <input
                    type="checkbox"
                    id='charAllowed'
                    defaultChecked={characterAllowed}
                    onChange={()=>{
                        // eslint-disable-next-line no-undef
                        setcharacteAllowed((prev)=>!prev)

                        }
                    }
                />
                <label>String</label>


            </div>

        </div>
        
        </div>


    </div>
  )
}

export default PasswordChecker;