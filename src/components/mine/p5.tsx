import { ReactP5Wrapper, type P5CanvasInstance } from '@p5-wrapper/react'

interface P5InstanceProps {}

const P5Instance: React.FC<P5InstanceProps> = ({}) => {
  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL)

    p5.draw = () => {
      p5.background(250)
      p5.normalMaterial()
      p5.push()
      p5.rotateZ(p5.frameCount * 0.01)
      p5.rotateX(p5.frameCount * 0.01)
      p5.rotateY(p5.frameCount * 0.01)
      p5.plane(100)
      p5.pop()
    }
  }

  return (
    <>
      <ReactP5Wrapper sketch={sketch} />
    </>
  )
}

export default P5Instance
