import { useEffect, useRef } from "react";

function NavBar() {
  const modeRef = useRef()
  const mode = localStorage.getItem("mode")

  const changeMode = (mode)=> {
    if (mode === 'dark' || (mode=== 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'synthwave')
    } else {
      document.documentElement.removeAttribute('data-theme', 'synthwave')
    } 
  }

  const handleModeChange = () => {
    localStorage.setItem("mode", modeRef.current.value)
    changeMode(modeRef.current.value)
  }
  useEffect(() => {
    changeMode(mode)
  }, [])
  
  return (
    <div className="navbar bg-base-200 shadow-md rounded-lg my-1">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <p className="mx-4 normal-case text-2xl font-bold text-base-content">
          Rapid Route
        </p>
      </div>
      <div className="navbar-end">
      <select className="select w-full max-w-[8rem] font-bold font-mono text-base" ref={modeRef} defaultValue={mode} onChange={handleModeChange}>
        <option disabled selected>Select mode</option>
        <option selected value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="auto">Auto</option>
      </select>
      </div>
    </div>
  );
}

export default NavBar;
