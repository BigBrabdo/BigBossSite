import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Logo3D.css'

function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 500 / 300, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(500, 300)
    renderer.setClearColor(0x000000, 0.1)
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1.2)
    light.position.set(5, 8, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Create 3D SVG geometry (extruded SVG shape)
    const canvas = document.createElement('canvas')
    canvas.width = 1050
    canvas.height = 600
    const ctx = canvas.getContext('2d')!
    
    // Draw the BIGBOSS logo shape
    ctx.fillStyle = '#ff0000'
    ctx.beginPath()
    ctx.ellipse(525, 300, 200, 150, 0, 0, Math.PI * 2)
    ctx.fill()

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas)
    
    // Create a simple shape to represent the 3D logo
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xff0000,
      emissive: 0x220000,
      shininess: 100
    })
    const logo = new THREE.Mesh(geometry, material)
    scene.add(logo)

    camera.position.z = 5

    let rotationX = 0
    let rotationY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      targetRotationX = (y / rect.height) * Math.PI - Math.PI / 2
      targetRotationY = (x / rect.width) * Math.PI * 2 - Math.PI
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation
      rotationX += (targetRotationX - rotationX) * 0.05
      rotationY += (targetRotationY - rotationY) * 0.05

      logo.rotation.x = rotationX
      logo.rotation.y = rotationY

      // Float animation
      logo.position.y = Math.sin(Date.now() * 0.001) * 0.3

      renderer.render(scene, camera)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="logo-3d-container" />
}

export default Logo3D
