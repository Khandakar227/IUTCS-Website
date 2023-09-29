import { LuBrainCircuit } from "react-icons/lu";
import { BiCodeAlt, BiCodeCurly, BiLogoAndroid } from "react-icons/bi";

export default function MainActivitiesSection() {
  return (
    <div className="py-12 grid gap-8 md:grid-cols-2 section px-4 overflow-hidden">
      <div>
        <p
          className="text-blue-300"
          data-sal="slide-down"
          data-sal-duration="400"
        >
          Main Activities
        </p>
        <h3 className="pb-12 font-semibold text-2xl md:text-4xl font-kanit"
         data-sal="slide-down" data-sal-duration="400" data-sal-delay="200">
          Our Core Offerings
        </h3>
        <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="400">
          While the society is primarily associated with the Department of CSE,
          students from other departments are welcome to join. The society aims
          to foster a collaborative and interdisciplinary environment for
          technology enthusiasts.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="md:pb-8 grid  gap-5">
          <div
          className="shadow shadow-black rounded-md p-5 flex gap-4 bg-secondary"
          data-sal="slide-left" data-sal-duration="400" data-sal-delay="600"
          >
            <BiCodeCurly size={36} />
            <p>ACM Programming Classes</p>
          </div>
          <div
          className="shadow shadow-black rounded-md p-5 flex gap-4 bg-secondary"
          data-sal="slide-left" data-sal-duration="400" data-sal-delay="700"
          >
            <BiCodeAlt size={36} />
            <p>Web Development Classes</p>
          </div>
        </div>
        <div className="md:pt-8 grid gap-5">
          <div 
          className="shadow shadow-black rounded-md p-5 flex gap-4 bg-secondary"
          data-sal="slide-left" data-sal-duration="400" data-sal-delay="800"
          >
            <BiLogoAndroid size={36} />
            <p>App Development Classes</p>
          </div>
          <div
          className="shadow shadow-black rounded-md p-5 flex gap-4 bg-secondary"
          data-sal="slide-left" data-sal-duration="400" data-sal-delay="900"
          >
            <LuBrainCircuit size={42} />
            <p>Machine Learning Workshops and Classes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
