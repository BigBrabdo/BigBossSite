import { SVG3D } from '3dsvg'
import './App.css'

export default function App() {
  // Your SVG graphic from 3dsvg.design
  const svgString = `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 600" width="1050" height="600">
    <style>
      .s0 { fill: #ff0000 }
    </style>
    <path id="Path 0" fill-rule="evenodd" class="s0" d="m352 135h43l0.01 164.5 7.61 9.5c4.19 5.23 8.8 10.99 12.88 16.13l-10.5 10.4c-5.77 5.72-10.27 10.56-10 10.76 0.27 0.2 4.55 3.21 9.5 6.69 4.95 3.49 10.23 7.19 10.73 7.59 0.5 0.4 1.23 0.98 1.63 1.3 0.4 0.32 5.16 4.23 10.59 8.68 5.43 4.45 10.46 8.5 11.18 9.01 0.72 0.51 2.44 1.95 3.82 3.2 1.38 1.25 3.98 3.65 5.78 5.33 1.8 1.68 3.89 3.62 4.65 4.33 2.13 1.9 3.87 3.54 7.92 7.28 2.14 1.98 4.15 3.84 4.47 4.13 0.32 0.29 1.83 1.7 3.35 3.13 1.52 1.43 3.46 3.25 4.3 4.05 0.84 0.8 2.28 2.17 3.2 3.05 0.92 0.88 2.77 2.66 4.1 3.95 1.33 1.29 3.36 3.26 4.5 4.37 1.14 1.11 2.66 2.59 3.38 3.31 0.72 0.72 2.61 2.66 4.21 4.31 1.6 1.65 3.46 3.57 4.13 4.27 0.67 0.7 2.09 2.21 3.16 3.35 1.07 1.14 2.74 2.93 3.71 3.98 0.97 1.05 2.47 2.68 3.33 3.62 0.86 0.94 2.06 2.26 2.67 2.96 0.61 0.7 1.98 2.28 3.05 3.51 1.07 1.23 2.64 3.05 3.49 4.05 0.85 1 1.99 2.33 2.54 2.96 0.55 0.63 1.73 2.01 2.62 3.01 0.89 1 2.15 2.42 2.81 3.25 0.66 0.83 1.64 2.07 2.18 2.76 0.54 0.69 1.65 2.11 2.47 3.16 0.82 1.05 1.97 2.52 2.56 3.27 0.59 0.75 1.45 1.85 1.91 2.44 0.46 0.59 1.32 1.7 1.93 2.46 0.61 0.76 1.51 1.88 1.99 2.5 0.48 0.62 1.16 1.5 1.52 2 0.36 0.5 0.95 1.31 1.31 1.81 0.36 0.5 0.94 1.3 1.28 1.79 0.34 0.49 0.87 1.26 1.17 1.71 0.3 0.45 0.79 1.19 1.09 1.64"/>
  </svg>`

  return (
    <div className="container">
      {/* Interactive 3D Logo */}
      <div className="logo-wrapper">
        <SVG3D
          svg={svgString}
          smoothness={0.6}
          color="#ff0000"
          animate="float"
          interactive={true}
          cursorOrbit={true}
          draggable={true}
          material="default"
        />
      </div>

      <h1>Professional DJ for hire.</h1>
      <h1>Suitable for weddings, Parties, & Bars.</h1>
      <h1>Karaoke specialist.</h1>

      <nav className="links">
        <a href="#" className="link-btn">Facebook</a>
        <a href="https://www.instagram.com/bigbrabdo" className="link-btn">Instagram</a>
        <a href="mailto:bigboss@thebigboss.info" className="link-btn">Email</a>
        <a href="#" className="link-btn">About Me</a>
        <a href="#" className="link-btn">Contact</a>
      </nav>
    </div>
  )
}
