import React, { useState } from "react";

export default function Card() {
  const [text,setText] = useState('text')
  const [out,setoutput] = useState('Output')

  const handelText=(v)=>{
    setText(v.target.value)
  }

  //main code for fancy string
  /*
    ek string lenge 
    usme se duplicate continuas 
    leeter jo do se jyada bar aye
     ho unhe hatta denge
  */
  
  function fancyString(){
    let str = text
    // console.log(text)
    let output= ''
    for (const x in str) {
      if( output.length>=2 && output[output.length-1]==str[x] && output[output.length-2]==str[x] ){

        continue
      }else{
        output+=str[x]
      }
      setoutput(output)
    }}

  return (
    <div className="bg-slate-200 min-h-3/4 w-2/4 rounded-lg p-5 ">
      <h2 className="text-[40px] text-gray-600 font-extrabold  ">
        <span className="text-blue-700">Fancy </span>
        string
      </h2>
      <div className="pt-[50px]">
       <input
          type="text"
          placeholder="enter string"
          className="mx-auto w-full p-2 rounded"
          value={text}
          onChange={handelText}
        />
        <button className="px-4 py-2 bg-blue-500 rounded text-white w-full my-4" onClick={fancyString}>
          Fancy string
        </button>
     
      </div>
      <div>
        <h1 className="text-slate-600 text-2xl text-center ">{out}</h1>
      </div>
    </div>
  );
}
