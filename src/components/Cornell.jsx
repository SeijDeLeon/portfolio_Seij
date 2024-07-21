import { useState, useEffect } from 'react';
import '../App.css';

export default function Cornell() {
  const googleDocLink = 'https://docs.google.com/document/d/e/2PACX-1vRUvi2TL7r8cuS9_fnTb0G12pfCnlV4yHwbpTiws1HK9uDD8uy_iYmTfgSaeBNfFqeFVDAV2aGZFpGu/pub?embedded=true'; //need to publish the gdoc

  useEffect(()=> {
    const target = document.getElementById('googleDoc');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', googleDocLink, true);
    xhr.onload = function() {
      // write contents of google doc (inlcuding images) to div
      target.innerHTML = xhr.responseText;
    };
    xhr.send();
  },)

  return (
    <main className="w-full m-auto">
      <div className="relative max-h-[50vh] min-h-60 overflow-hidden bg-black">
        <div className="w-full h-[50vh] hero-bg border border-red">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-6xl font-bold text-white drop-shadow-lg w-full text-center px-4 py-2"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Cornell Block Party July 27th, 2024
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl text-sky-500">1pm - 8pm, 07/27/2024</h1>
      </div>
      <div className="max-w-screen-2xl sm:w-full  lg:w-6/12 overflow-auto flex flex-col justify-center px-4 m-auto">
        <div id="googleDoc" className="w-full px-6 "></div>
      </div>
    </main>
  )
}